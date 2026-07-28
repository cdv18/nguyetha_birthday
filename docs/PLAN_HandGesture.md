# 🔧 Plan Thi Công: Cải Tiến Hand Gesture & Photo Sphere

> Dựa trên [Description_Hand.md](file:///G:/Code/BirthdayNH/nguyetha_birthday/docs/Description_Hand.md) và phân tích code hiện tại

---

## 1. Phân Tích Điểm Yếu Hiện Tại

### 1.1 Gesture Flickering — Vấn đề chính đang gặp

**Nguyên nhân gốc**: `classifyHandGesture()` trong [hand.js L135-L182](file:///G:/Code/BirthdayNH/nguyetha_birthday/src/interactions/hand.js#L135-L182) **không có bất kỳ cơ chế ổn định nào**:

| # | Vấn đề | Dòng code | Hậu quả |
|---|---|---|---|
| 1 | **Không smoothing landmark** | hand.js L307-308: chỉ lerp cursor (0.7/0.3), raw landmarks truyền thẳng vào classifier | Landmark jitter → gesture nhảy loạn |
| 2 | **Không debounce/confirm gesture** | hand.js L299-300: `currentGesture = gesture` ngay lập tức mỗi frame | POINTING → FIST → POINTING trong 3 frame liên tiếp |
| 3 | **Không hysteresis** | hand.js L158-176: dùng cùng ngưỡng `1.25` cho cả khi ngón bắt đầu duỗi VÀ bắt đầu co | Ngón tay dao động quanh ngưỡng → nhảy liên tục |
| 4 | **Không cooldown** | Không có delay khi chuyển trạng thái | Gesture A → B → A trong vài ms |
| 5 | **Không multi-frame confirm** | 1 frame duy nhất = 1 gesture quyết định | Noise 1 frame đủ trigger hành động |
| 6 | **Bỏ qua trục Z (depth)** | hand.js L147: `Math.hypot(p1.x-p2.x, p1.y-p2.y)` — chỉ 2D | Góc nghiêng tay gây sai extension ratio |

### 1.2 PhotoSphere Phản Ứng Sai

| # | Vấn đề | Vị trí code | Hậu quả |
|---|---|---|---|
| 7 | **Chuyển SPHERE↔GALLERY ngay lập tức** | PhotoSphere.js L444-451: 1 frame OPEN_PALM → `disperseToGallery()` | Tay mở thoáng qua → gallery bật bất ngờ |
| 8 | **FULLVIEW đóng ngay khi gesture flicker** | PhotoSphere.js L417-420: FIST/OPEN_PALM → `closeFullView()` ngay, không cooldown | Ảnh mở xong đóng ngay trong cùng frame |
| 9 | **Dwell bị reset khi raycast trượt 1 frame** | PhotoSphere.js L493-497: mất target 1 frame → `hoveredCard = null`, `dwellRatio = 0` | Không bao giờ đạt được 1s hover liên tục |
| 10 | **Xoay cầu không quán tính** | PhotoSphere.js L454-458: `rotation += dx*4.5` trực tiếp, thả tay → dừng cứng | UX cứng nhắc, không tự nhiên |
| 11 | **Zoom spam GSAP tween mỗi frame** | PhotoSphere.js L388-394: tạo tween mới 0.4s mỗi frame (~60 lần/giây) | Zoom giật, stuttery |
| 12 | **Zoom spike khi tay re-enter** | hand.js L318-325: `lastPinchDist` không reset khi mất tay → delta cực lớn khi tay quay lại | Camera nhảy đột ngột |
| 13 | **POINTING vừa kéo gallery vừa hover** | PhotoSphere.js L462: POINTING trigger cả drag scroll VÀ raycast hover | Trỏ ảnh → gallery trôi ra khỏi cursor |
| 14 | **Black hole trigger box quá rộng** | main.js L212: `0.28` = 56% màn hình, không dwell | Trỏ tay gần giữa → kích hoạt ngay |

### 1.3 Thiếu Tính Năng Theo Description_Hand.md

| Tính năng yêu cầu | Hiện trạng |
|---|---|
| ✅ Xoay quả cầu (nắm kéo) | Có nhưng không quán tính, không dead zone |
| ✅ Zoom 1 tay (pinch) | Có nhưng giật, spike khi re-enter |
| ❌ Zoom 2 tay | Chưa có (maxNumHands = 1) |
| ✅ Trỏ ảnh + hover | Có nhưng bị flicker reset liên tục |
| ❌ Hover highlight (scale + viền + dịch ra) | Chưa có |
| ❌ Mở ảnh bằng pinch khi hover | Chưa có — chỉ có dwell 1s |
| ❌ Dàn trải ảnh 2 tay kéo ra | Chưa đúng — dùng OPEN_PALM 1 tay |
| ❌ Thu ảnh về cầu 2 tay kéo vào | Chưa đúng — dùng FIST 1 tay |
| ❌ Ready state (palm 300ms) | Chưa có |
| ❌ Stop (palm giữ 300-500ms khi đang thao tác) | Chưa có |
| ❌ Reset (2 palm giữ 1.5s) | Chưa có |
| ❌ Xem ảnh: pan, zoom, swipe đổi ảnh | Chưa có |
| ❌ Dead zone, hysteresis, cooldown | Chưa có |
| ❌ One Euro / Kalman filter | Chưa có |
| ❌ Grace period khi mất tay | Chưa có |
| ❌ Cấu hình ngưỡng tập trung | Chưa có — hard-code rải rác |
| ❌ Tách module rõ ràng | Tất cả 381 dòng trong 1 file |

---

## 2. Kiến Trúc Module Mới

```
src/interactions/
├── hand/
│   ├── config.js              # [MỚI] Tất cả ngưỡng, cấu hình tập trung
│   ├── filters.js             # [MỚI] One Euro Filter, EMA, smoothing utilities
│   ├── gestureClassifier.js   # [MỚI] Phân loại cử chỉ (hysteresis, multi-frame)
│   ├── stateMachine.js        # [MỚI] State machine 10 trạng thái + cooldown + grace
│   ├── handTracker.js         # [MỚI] MediaPipe wrapper 2 tay, cursor, pinch
│   ├── sphereController.js    # [MỚI] Xoay/zoom quả cầu + quán tính + dead zone
│   ├── uiFeedback.js          # [MỚI] Cursor, HUD, progress ring, toast, nút UI
│   └── index.js               # [MỚI] Entry point kết nối tất cả module
├── hand.js                    # [DEPRECATED] → thay bằng hand/index.js
└── mic.js                     # [GIỮ NGUYÊN]
```

Sửa thêm:
- `src/gl/PhotoSphere.js` — Sửa lớn: thêm SPREADING, hover highlight, image viewing nâng cao
- `src/main.js` — Sửa nhỏ: thay import, sửa ACT 5 wiring

---

## 3. Chi Tiết Từng Phase Thi Công

---

### Phase 1: Config & Filters

**File**: `config.js` + `filters.js`
**Mục tiêu**: Nền tảng cấu hình tập trung + bộ lọc chống rung landmark

#### `config.js` — Tất cả ngưỡng trong 1 object

```js
export const HAND_CONFIG = {
  mediapipe: {
    maxNumHands: 2,                  // Hỗ trợ 2 tay
    modelComplexity: 1,
    minDetectionConfidence: 0.65,
    minTrackingConfidence: 0.65,
  },
  filter: {
    minCutoff: 1.0,       // One Euro Filter — Hz tần số cắt tối thiểu
    beta: 0.007,          // Hệ số tốc độ (cao = nhanh hơn khi di chuyển nhanh)
    dCutoff: 1.0,
  },
  cursor: {
    lerpFactor: 0.35,     // EMA (hiện tại 0.3 quá nhạy)
    deadZone: 0.008,      // Bỏ qua di chuyển < 0.8% viewport
  },
  gesture: {
    pointingEnterThreshold: 1.30,  // Hysteresis: cần > 1.30 để BẮT ĐẦU pointing
    pointingExitThreshold: 1.18,   //            cần < 1.18 để KẾT THÚC pointing
    pinchEnterThreshold: 0.08,
    pinchExitThreshold: 0.14,
    fistMaxExtension: 1.15,
    confirmFrames: 4,              // Cần 4 frame liên tiếp cùng gesture
    gestureCooldownMs: 250,
  },
  state: {
    readyHoldMs: 300,
    stopHoldMs: 400,
    resetHoldMs: 1500,
    spreadCommitThreshold: 0.65,   // 2 tay kéo ra > 65% → commit dàn trải
    transitionCooldownMs: 300,
    handLostGraceMs: 500,          // Mất tay < 500ms → giữ state
  },
  sphere: {
    rotationSensitivity: 3.5,
    rotationDeadZone: 0.005,
    maxRotationX: 0.7,
    inertiaDecay: 0.92,
    minInertia: 0.001,
    zoomSensitivity: 2.5,
    zoomDeadZone: 0.01,
    zoomMin: 18,
    zoomMax: 52,
    zoomLerp: 0.12,
  },
  hover: {
    dwellTimeMs: 600,              // 600ms hover → highlight
    selectPinchThreshold: 0.07,    // Pinch khi đang hover → mở ảnh
    selectDwellMs: 1200,           // Hoặc giữ pointer 1.2s
    hoverScaleBoost: 1.15,
    hoverZOffset: 2.0,
  },
};
```

#### `filters.js` — One Euro Filter

Implement:
- `class OneEuroFilter` — Adaptive low-pass filter
- `class LandmarkSmoother` — Smooth tất cả 21 landmarks/tay bằng One Euro Filter
- `applyDeadZone(value, threshold)` — Bỏ qua micro-movements
- `lerp(a, b, t)`, `clamp(val, min, max)` — Utilities

**Ước lượng**: ~250 LOC tổng (config + filters)

**Test Phase 1**:
- [ ] Import config từ module khác OK
- [ ] OneEuroFilter: input dao động sin → output mượt
- [ ] LandmarkSmoother: 21 points × 3 coords = 63 filters hoạt động

---

### Phase 2: Gesture Classifier

**File**: `gestureClassifier.js`
**Mục tiêu**: Phân loại cử chỉ ổn định, không flicker

#### So sánh cũ vs mới

| Aspect | Cũ (`hand.js`) | Mới |
|---|---|---|
| Ngưỡng extension | `1.25` cố định | Hysteresis: enter `1.30` / exit `1.18` |
| Xác nhận | 1 frame | 4 frame liên tiếp (`confirmFrames`) |
| Cooldown | Không | 250ms giữa mỗi chuyển gesture |
| Input landmarks | Raw | Đã qua One Euro Filter |
| Output | String mỗi frame | Object `{ gesture, confirmed, confidence, pinchDist, fingerStates }` |

#### Logic hysteresis mô tả

```
Ví dụ POINTING:
  Nếu đang KHÔNG pointing:
    → Cần indexExtRatio > 1.30 VÀ 3 ngón kia co → candidate POINTING
    → Candidate phải giữ 4 frame liên tiếp → confirmed POINTING
  Nếu ĐANG pointing:
    → Chỉ kết thúc khi indexExtRatio < 1.18 liên tiếp 4 frame
    → Dao động quanh 1.20-1.28 → GIỮ POINTING (không flicker)
```

#### Output format

```js
{
  gesture: 'POINTING',      // Gesture đã confirmed
  confirmed: true,           // Đã qua multi-frame
  confidence: 0.92,          // Tỷ lệ ổn định
  pinchDist: 0.35,          // Khoảng cách ngón cái-trỏ (smooth)
  fingerStates: [true, false, false, false],  // [index, middle, ring, pinky]
  raw: 'POINTING',          // Gesture thô frame hiện tại (chưa confirm)
}
```

**Ước lượng**: ~250 LOC

**Test Phase 2**:
- [ ] Giơ ngón trỏ POINTING giữ 5s → console log ổn định, không nhảy sang FIST
- [ ] Nắm tay FIST giữ 5s → không nhảy sang POINTING
- [ ] Xòe tay OPEN_PALM giữ 5s → ổn định
- [ ] Chuyển POINTING → FIST chậm → mỗi transition chỉ xảy ra 1 lần, có delay

---

### Phase 3: State Machine

**File**: `stateMachine.js`
**Mục tiêu**: State machine 10 trạng thái, cooldown, grace period, đúng Description_Hand.md

#### 10 States

```
IDLE → READY → ROTATING → INERTIA → POINTING → IMAGE_VIEWING
                                    → ZOOMING
       READY → SPREADING → GRID
       bất kỳ → STOPPING → IDLE
       bất kỳ → RESETTING → IDLE
```

#### State Diagram

```
                          (palm mở 300ms)
            IDLE ───────────────────────→ READY
             ↑                              │
             │                    ┌─────────┼──────────┬────────────┐
        (mất tay               (nắm)     (trỏ)    (pinch 1 tay)  (2 tay)
        > 500ms)                 │         │          │             │
             │                   ▼         ▼          ▼             ▼
             │             ROTATING    POINTING    ZOOMING     SPREADING
             │                 │         │                        │
             │           (thả tay)   (pinch/        (kéo > 65%)  (kéo < 65%
             │                 │      dwell)                      hoặc thả)
             │                 ▼       ▼                │         │
             │             INERTIA  IMAGE_VIEWING    GRID     (quay về
             │              (decay)  (pan/zoom/      │        SPHERE)
             │                 │      swipe)         │
             │                 ▼       │             │
             └─────────────────┴───────┴─────────────┘

Từ BẤT KỲ state:
  • 1 palm mở giữ 400ms → STOPPING → IDLE
  • 2 palm mở giữ 1.5s  → RESETTING → IDLE (reset toàn bộ)
  • Mất tay < 500ms      → giữ state (grace period)
  • Mất tay > 500ms      → IDLE
```

#### Quy tắc quan trọng

1. **Cooldown 300ms** giữa mỗi chuyển trạng thái — không chuyển A→B→A trong <300ms
2. **Grace period 500ms** khi mất tay — không reset state nếu tay quay lại trong 500ms
3. **Không chuyển ngay từ 2 tay → 1 tay** nếu 1 tay tạm mất < 500ms (tránh false transition)
4. **Output dạng action** thay vì state — `{ state, action, params }`

**Ước lượng**: ~350 LOC

**Test Phase 3**:
- [ ] Mở tay 300ms → READY (không phải mở thoáng qua)
- [ ] Nắm tay kéo → ROTATING (không nhảy sang POINTING)
- [ ] Cooldown: chuyển từ ROTATING sang POINTING cần ≥ 300ms
- [ ] Mất tay < 500ms → giữ state hiện tại
- [ ] Mất tay > 500ms → về IDLE
- [ ] 2 palm mở 1.5s → RESETTING → IDLE

---

### Phase 4: Hand Tracker

**File**: `handTracker.js`
**Mục tiêu**: MediaPipe wrapper 2 tay, output chuẩn hóa, xử lý edge cases

#### Cải tiến so với hiện tại

| Aspect | Cũ | Mới |
|---|---|---|
| Số tay | `maxNumHands: 1` | `maxNumHands: 2` |
| Landmark smooth | Không | One Euro Filter × 21 landmarks × 2 tay |
| Hand lost | Set cursor opacity 0.3, giữ gesture cũ | Grace period 500ms, reset pinchDist |
| Pinch spike | `lastPinchDist` không reset khi mất tay | Reset khi mất tay, dùng smooth pinchDist |
| Camera fail | Log warning | UI toast + fallback mode |
| Mouse conflict | Mouse và camera cùng mutate biến chung | Tách biệt input source, priority system |

#### Output format mỗi frame

```js
{
  handCount: 0 | 1 | 2,
  hands: [{
    landmarks: [...],           // 21 points, ĐÃ SMOOTH qua OneEuroFilter
    gesture: { ... },           // Từ GestureClassifier (confirmed)
    cursorX, cursorY,           // Normalized 0-1, smooth + dead zone
    cursorDX, cursorDY,         // Velocity
    pinchDist,                  // Smooth khoảng cách ngón cái-trỏ
  }],
  twoHandDist: number | null,  // Khoảng cách 2 tay (nếu handCount=2)
  timestamp: number,
}
```

**Ước lượng**: ~350 LOC

**Test Phase 4**:
- [ ] Cursor smooth, không giật cục
- [ ] 2 tay nhận diện đồng thời
- [ ] Zoom 1 tay (pinch) ổn định, không spike khi tay re-enter
- [ ] Mất tay → cursor mờ, quay lại → cursor sáng, không jump

---

### Phase 5: Sphere Controller

**File**: `sphereController.js`
**Mục tiêu**: Tách logic xoay/zoom/quán tính, dùng trong cả camera và mouse mode

#### Tính năng

| Tính năng | Chi tiết |
|---|---|
| **Xoay** | Nhận dx/dy từ StateMachine → áp dụng sensitivity + dead zone |
| **Quán tính** | Khi thả tay: lưu velocity cuối, decay 0.92/frame, dừng khi < 0.001 |
| **Dead zone** | dx < 0.005 → bỏ qua (tay rung tự nhiên) |
| **Clamp Y** | rotation.x giới hạn ±0.7 rad |
| **Zoom** | Nhận zoomDelta → lerp camera.z, clamp [18, 52] |
| **Zoom to cursor** | Camera di chuyển dọc ray direction, không chỉ z |
| **Reset** | Về rotation (0,0,0) và camera z mặc định |

#### Sửa lỗi zoom hiện tại
- **Không tạo GSAP tween mới mỗi frame** — dùng lerp trực tiếp trong `update()` thay vì `gsap.to()`
- **Reset pinchDist** khi mất tay → tránh zoom spike

**Ước lượng**: ~200 LOC

**Test Phase 5**:
- [ ] Xoay có quán tính khi thả tay, giảm dần, dừng hẳn
- [ ] Dead zone: tay rung nhẹ → cầu đứng yên
- [ ] Zoom smooth bằng lerp (không giật như GSAP spam)
- [ ] Zoom có giới hạn min/max

---

### Phase 6: Cải Tiến PhotoSphere

**File**: `PhotoSphere.js` (sửa)
**Mục tiêu**: State machine mới, thêm tính năng Description_Hand.md

#### State Machine mới của PhotoSphere

```
SPHERE ←──── COLLAPSING ←── GRID/FLAT ←── SPREADING ←── SPHERE
   │                           │
   │                      (point+pinch / dwell)
   │                           ▼
   └────────────────────→ IMAGE_VIEWING → (close) → SPHERE/GRID
```

#### Tính năng mới cần code

| # | Tính năng | Mô tả |
|---|---|---|
| 1 | **Hover highlight** | Ảnh được trỏ: scale ×1.15, viền sáng vàng, dịch ra z+2 units |
| 2 | **Hover tolerance** | Raycast miss < 3 frames → giữ hoveredCard (không reset) |
| 3 | **Pinch to open** | Khi đang hover (>600ms) + pinch < 0.07 → mở ảnh |
| 4 | **Dwell to open** | Giữ pointer trên ảnh 1.2s → mở ảnh (fallback) |
| 5 | **SPREADING** | 2 tay kéo ra → lerp từ sphere → grid layout, commit >65% |
| 6 | **COLLAPSING** | 2 tay kéo vào → lerp từ grid → sphere, commit >65% |
| 7 | **Abort spread/collapse** | Thả tay trước 65% → quay về state trước |
| 8 | **Image pan** | Khi xem ảnh + nắm kéo → pan ảnh |
| 9 | **Image zoom** | Khi xem ảnh + pinch → zoom ảnh |
| 10 | **Image swipe** | Khi xem ảnh + vuốt ngang nhanh → ảnh trước/sau |
| 11 | **Image min-display** | Sau khi mở ảnh, không đóng được trong 500ms (tránh accidental close) |

#### Sửa lỗi hiện tại

| Sửa | Mô tả |
|---|---|
| Xóa trigger OPEN_PALM 1 tay → Gallery | Thay bằng 2 tay kéo ra (SPREADING) |
| Xóa trigger FIST 1 tay → Sphere | Thay bằng 2 tay kéo vào (COLLAPSING) |
| Xóa POINTING trigger cả drag + hover | POINTING chỉ hover, drag dùng PINCH_GRAB |
| Thêm cooldown khi đóng FULLVIEW | Min 500ms display time |
| Chuyển rotation/zoom logic → SphereController | PhotoSphere chỉ quản lý card layout + state |

**Ước lượng**: ~350 LOC sửa + thêm

**Test Phase 6**:
- [ ] 2 tay kéo ra > 65% → dàn trải ảnh thành grid
- [ ] 2 tay kéo ra < 65% rồi thả → quay về cầu (abort)
- [ ] Trỏ ảnh 600ms → ảnh highlight (scale + viền + dịch ra)
- [ ] Trỏ ảnh 600ms + pinch → mở ảnh full
- [ ] Trỏ ảnh 1.2s (dwell) → mở ảnh full
- [ ] Xem ảnh: vuốt tay ngang → đổi ảnh trước/sau
- [ ] Xem ảnh: nắm kéo → pan
- [ ] Xem ảnh: pinch → zoom
- [ ] Mở ảnh → không thể đóng trong 500ms đầu

---

### Phase 7: UI Feedback

**File**: `uiFeedback.js`
**Mục tiêu**: Phản hồi giao diện trực quan, thay thế UI cũ trong hand.js

#### Components

| Component | Mô tả |
|---|---|
| **Hand Cursor** | Chấm laser cyan + vòng tròn ngoài, smooth theo cursor data |
| **Gesture Badge** | Icon + tên cử chỉ đang hoạt động (dưới cursor) |
| **Dwell Progress Ring** | SVG vòng tròn: 600ms hover (cyan) / 1.2s select (vàng) |
| **State HUD** | Thanh top-center: icon + tên state, LED trạng thái camera |
| **Reset Countdown** | Vòng đếm ngược 1.5s khi giữ 2 palm (hiển thị giữa màn hình) |
| **Hover Glow** | CSS class toggle lên card đang hover |
| **Control Buttons** | Nút UI cố định: ✕ Đóng ảnh, ↻ Reset, 📷 Bật/Tắt Camera |
| **Toast** | Thông báo tạm (3s): "Camera không khả dụng", "Mất tay", v.v. |

**Ước lượng**: ~300 LOC

**Test Phase 7**:
- [ ] Cursor smooth, theo ngón tay mượt
- [ ] Badge hiển thị đúng gesture (thay đổi cùng gestureclassifier)
- [ ] Progress ring chạy đúng tiến trình hover/dwell
- [ ] HUD hiển thị state hiện tại
- [ ] Reset countdown hiển thị khi giữ 2 palm
- [ ] Nút UI đóng ảnh / reset hoạt động

---

### Phase 8: Tích Hợp + Sửa main.js

**File**: `hand/index.js` + sửa `main.js`
**Mục tiêu**: Kết nối toàn bộ, thay thế hand.js cũ

#### `hand/index.js` — Entry point

```js
export async function setupHandInteraction(photoSphere, camera, audioManager) {
  // 1. Khởi tạo tất cả module
  const tracker = new HandTracker(config);
  const stateMachine = new HandStateMachine(config);
  const sphereCtrl = new SphereController(config, photoSphere.group, camera);
  const ui = new HandUI(config);

  // 2. Init camera
  const cameraOK = await tracker.init();
  if (!cameraOK) ui.showToast('Camera không khả dụng, dùng chuột');

  // 3. Frame loop: tracker → stateMachine → controller → UI
  tracker.onFrame((frameData) => {
    const result = stateMachine.update(frameData, performance.now());
    sphereCtrl.handleAction(result);
    photoSphere.handleAction(result);  // Phương thức mới trong PhotoSphere
    ui.update(frameData, result);
  });

  // 4. Mouse/keyboard fallback
  setupMouseFallback(...);

  return { tracker, sphereCtrl, ui, stateMachine };
}
```

#### Sửa `main.js`

```diff
- import { setupHandDetection, updateDwellProgress } from './interactions/hand.js';
+ import { setupHandInteraction } from './interactions/hand/index.js';

  // Trong blowCandles() ACT 5, thay toàn bộ block cũ:
- setupHandDetection((gesture, x, y, dx, dy, _dwell, zoomDelta) => { ... });
+ const handSystem = await setupHandInteraction(
+   sceneManager.photoSphere, sceneManager.camera, audioManager
+ );
```

#### Sửa black hole trigger

```diff
  // Thay vì trigger ngay khi POINTING ở 56% màn hình:
- if (gesture === 'POINTING' && Math.abs(x - 0.5) < 0.28 && Math.abs(y - 0.5) < 0.28) {
+ // Dùng dwell 1.5s trên điểm sáng:
+ if (gesture === 'POINTING' && Math.abs(x - 0.5) < 0.15 && Math.abs(y - 0.5) < 0.15) {
+   blackHoleDwellTime += deltaTime;
+   if (blackHoleDwellTime > 1500) { // 1.5s dwell
+     triggerBlackHole();
+   }
+ } else {
+   blackHoleDwellTime = 0;
+ }
```

**Ước lượng**: ~150 LOC

**Test Phase 8** (end-to-end):
- [ ] Toàn bộ flow ACT 5 → điểm sáng → hố đen → Photo Sphere hoạt động
- [ ] Mouse fallback: click giữ kéo = xoay, cuộn = zoom, click = open
- [ ] Keyboard: 1/2/3/4 đổi gesture test, ESC đóng ảnh
- [ ] Camera từ chối → fallback mouse mượt, UI toast hiển thị
- [ ] Không crash, không memory leak
- [ ] Debug functions `skipToPhotoSphere()` vẫn hoạt động

---

## 4. Tổng Hợp

### File Manifest

| File | Action | Est. LOC |
|---|---|---|
| `src/interactions/hand/config.js` | 🆕 Tạo mới | ~100 |
| `src/interactions/hand/filters.js` | 🆕 Tạo mới | ~150 |
| `src/interactions/hand/gestureClassifier.js` | 🆕 Tạo mới | ~250 |
| `src/interactions/hand/stateMachine.js` | 🆕 Tạo mới | ~350 |
| `src/interactions/hand/handTracker.js` | 🆕 Tạo mới | ~350 |
| `src/interactions/hand/sphereController.js` | 🆕 Tạo mới | ~200 |
| `src/interactions/hand/uiFeedback.js` | 🆕 Tạo mới | ~300 |
| `src/interactions/hand/index.js` | 🆕 Tạo mới | ~150 |
| `src/gl/PhotoSphere.js` | ✏️ Sửa lớn | +350 |
| `src/main.js` | ✏️ Sửa nhỏ | ~30 |
| `src/interactions/hand.js` | 🗑️ Deprecated | — |
| **Tổng code mới** | | **~2,230 LOC** |

### Timeline Ước Lượng

| Phase | Công việc | Thời gian |
|---|---|---|
| Phase 1 | Config + Filters | ~1h |
| Phase 2 | Gesture Classifier | ~1.5h |
| Phase 3 | State Machine | ~2h |
| Phase 4 | Hand Tracker | ~2h |
| Phase 5 | Sphere Controller | ~1h |
| Phase 6 | PhotoSphere cải tiến | ~2.5h |
| Phase 7 | UI Feedback | ~1.5h |
| Phase 8 | Tích hợp + Test | ~1.5h |
| **Tổng** | | **~13h** |

### Nguyên Tắc Thi Công

1. **Không bao giờ dùng raw gesture trực tiếp** — Luôn qua Filter → Classifier → StateMachine → Action
2. **Mọi ngưỡng nằm trong config.js** — Không hard-code số ma thuật trong logic
3. **Module không phụ thuộc chéo** — gestureClassifier không biết PhotoSphere tồn tại
4. **Test từng phase** trước khi sang phase tiếp — Không code 8 phase rồi test 1 lần cuối
5. **Giữ mouse/keyboard fallback** — Không bao giờ phá vỡ trải nghiệm khi không có camera
6. **Data flow 1 chiều**: `MediaPipe → Filter → Classifier → StateMachine → Controller/PhotoSphere → UI`
