# 🎂 Nguyệt Hà Birthday — Product Specification

> Tài liệu đặc tả sản phẩm (Product Spec) — Phiên bản 1.0.0

---

## 1. Tổng Quan

| Thuộc tính | Giá trị |
|---|---|
| **Tên dự án** | `nguyet-ha-birthday` |
| **Phiên bản** | 1.0.0 |
| **Mô tả** | Trải nghiệm web điện ảnh 3D tương tác chúc mừng sinh nhật Nguyệt Hà (21 tuổi, 05/08/2005 → 05/08/2026) |
| **Loại sản phẩm** | Single Page Application (SPA) — Web 3D Cinematic Interactive Experience |
| **Đối tượng** | Nguyệt Hà (người nhận) — trải nghiệm cá nhân qua trình duyệt web |
| **Nền tảng** | Desktop & Mobile browsers (Chrome, Edge, Safari, Firefox) |
| **Deploy** | GitHub Pages (auto CI/CD) |

### 1.1 Tầm nhìn sản phẩm

Một trải nghiệm sinh nhật **điện ảnh** hoàn toàn trên web, kết hợp:
- **Đồ họa 3D real-time** (không gian vũ trụ, mặt trăng, thủy mặc, hố đen)
- **Âm thanh điện ảnh** tổng hợp trực tiếp (không dùng file audio)
- **Tương tác AI thông minh** (nhận diện khuôn mặt, cử chỉ tay, micro)
- **Cốt truyện** 5 màn theo phong cách đạo diễn phim

---

## 2. Luồng Trải Nghiệm (User Journey)

Toàn bộ trải nghiệm kéo dài khoảng **~2-3 phút** (tùy tương tác), được chia thành **5 Màn (Acts)**:

```
 ACT 0          ACT 1           ACT 2           BLOW          ACT 3          ACT 4          ACT 5
┌──────┐    ┌───────────┐   ┌───────────┐   ┌────────┐   ┌──────────┐   ┌──────────┐   ┌──────────────┐
│  ⭐   │ →  │ ⭐ Warp   │ → │ 🎂 Bánh   │ → │ 🌬️ Thổi│ → │ 🏔️ Thủy │ → │ 🌅 Dawn  │ → │ 🕳️ Hố đen   │
│ Star  │    │ Speed     │   │ + 5 Lời   │   │  Nến   │   │  Mặc     │   │ Finale   │   │ + 🌐 Gallery │
│Trigger│    │ Title     │   │ Chúc      │   │(tương  │   │ Ink Wash │   │ Confetti │   │ Ảnh 3D       │
└──────┘    └───────────┘   └───────────┘   │ tác)   │   └──────────┘   └──────────┘   └──────────────┘
                                             └────────┘
```

---

### 2.1 ACT 0: Loading & Star Trigger

**Trạng thái ban đầu:**
- Nền đen tuyệt đối (Space Black `#010205`)
- Một ngôi sao nhỏ 4px nhấp nháy (breathing animation 3s cycle)
- Hint text: *"Đang thiết lập không gian..."* → chuyển thành *"Đeo tai nghe và chạm nhẹ vào vì sao..."*

**User Action:**
- Click/Tap vào ngôi sao → Hiệu ứng nổ sáng trắng (scale 150x + white glow) → Bắt đầu trải nghiệm

**Yêu cầu UX:**
- Khuyến khích đeo tai nghe trước khi bắt đầu
- Ngôi sao có hover effect (scale 1.5x) để gợi ý tương tác

---

### 2.2 ACT 1: Space Warp + Title Reveal (0s → 15s)

**Mô tả:** Camera từ rất xa (z=600) lao nhanh về phía mặt trăng (z=40), hiệu ứng warp speed kịch tính. Tên và ngày sinh xuất hiện.

| Thời điểm | Sự kiện | Âm thanh |
|---|---|---|
| 0s | Camera warp speed (6s), FOV zoom 60°→110°→60° | Air rush whoosh 6s + Sub-bass glide |
| 5s | Text **"NGUYỆT HÀ"** fade in, float up | Dmaj7 Rhodes chord (title chime) |
| 7s | Text **"05.08.2005"** fade in | — |
| 8s | Bộ đếm năm: 2005 → 2006 → ... → 2026 (5s) | Heartbeat pulse (A2/D3, 200ms interval) |
| 13s | Bộ đếm dừng tại **2026** | Major resolution swell |
| 14s | Cả 2 text fade out | — |

---

### 2.3 ACT 2: Whispers + Birthday Cake (15s → 56s)

**Mô tả:** Camera hạ thấp, 5 lời chúc xuất hiện tuần tự như thì thầm. Sau đó camera ngẩng lên, bánh sinh nhật bay đến.

| Thời điểm | Sự kiện |
|---|---|
| 15s | Camera tilt xuống |
| 19s-49s | 5 lời chúc xuất hiện tuần tự (mỗi cái 6s) |
| 48s | Camera tilt lên |
| 49s | Bánh sinh nhật (quả cầu mặt trăng nhỏ + nến) bay từ xa đến gần |
| 51s | Text: *"Hãy nhắm mắt... ước một điều... và thổi nhẹ nhé."* |
| 56s | **⏸️ TIMELINE PAUSE** — Chờ user thổi nến |

**5 Lời chúc:**
1. *"Chúc mừng sinh nhật em, Nguyệt Hà."*
2. *"Chúc em tuổi 21 rực rỡ và ngập tràn niềm vui..."*
3. *"Mong mọi ước mơ đẹp nhất của em sẽ thành hiện thực..."*
4. *"Hãy luôn bình an và tỏa sáng như vầng trăng dịu dàng..."*
5. *"...và chúc cho mỗi ngày của em đều trọn vẹn hạnh phúc!"*

---

### 2.4 Blow Detection — Tương Tác Thổi Nến

Hệ thống nhận diện thổi nến **đa kênh** với 3 phương thức fallback:

| # | Phương thức | Cách hoạt động | Ưu tiên |
|---|---|---|---|
| 1 | 📷 **Camera AI Chu Môi** | MediaPipe FaceMesh nhận diện hình dạng miệng chu lại (pucker) liên tục 3 frames | Chính |
| 2 | 🎙️ **Micro Gió** | Phân tích FFT luồng gió thổi vào micro | Chính |
| 3 | 🖱️ **Manual** | Click nút "Chạm để thổi ✨" hoặc click bất kỳ đâu | Fallback |

**UI:** Thanh Glassmorphism HUD pill ở bottom màn hình, hiển thị:
- 🟢 Đèn LED trạng thái Camera (đang hoạt động / tắt / đã phát hiện)
- 🟢 Đèn LED trạng thái Micro (đang hoạt động / tắt / đã phát hiện)
- Nút "Chạm để thổi ✨" (fallback cho thiết bị không camera/mic)

---

### 2.5 ACT 3: Ink Wash — Thủy Mặc Điện Ảnh (+1s → +26s)

**Mô tả:** Scene chuyển đổi hoàn toàn sang phong cách **tranh thủy mặc** (ink wash painting). Camera zoom ra xa rồi lao sâu vào bức tranh.

| Thời điểm | Sự kiện |
|---|---|
| +1s | Nền chuyển sang tông giấy da (Parchment), stars ẩn, water đổi màu |
| +1s | Camera PULL BACK kịch tính (z→300, y→50) — reveal toàn cảnh |
| +1-5s | 3 lớp núi trồi lên từ dưới (xa → gần, staggered) |
| +4s | Mặt trăng thủy mặc (ink brush texture) xuất hiện |
| +4s | 7 chim yến bay lượn, cánh đập |
| +5s | Camera DIVE xuyên qua tranh (z=300→z=-20, 21s) |
| +10s | 150 cánh hoa anh đào rơi rải rác |
| +10s | Thơ dòng 1: *"Năm tháng trôi như dòng thủy mặc,"* — hiệu ứng viết mực |
| +17.5s | Thơ dòng 2: *"Tâm an nhiên tĩnh tại tựa ngàn non."* — hiệu ứng viết mực |

**Đặc biệt:** Mỗi dòng thơ có phản chiếu trên mặt nước (lật ngược, mờ hơn).

---

### 2.6 ACT 4: Dawn Finale (+26s → +39s)

**Mô tả:** Scene chuyển sang bình minh rực rỡ. 8000 ngôi sao biến hình thành **hình trái tim**. Confetti bùng nổ.

| Thời điểm | Sự kiện |
|---|---|
| +26s | Nền chuyển sang Dawn sunset (hồng cam) |
| +26s | 8000 ngôi sao morph thành hình trái tim (8s) |
| +33s | Text **"HAPPY 21ST BIRTHDAY"** xuất hiện |
| +33s | 🎊 Confetti pháo hoa bùng nổ (kéo dài 15s) |
| +36s | Text **"ANH YÊU EM ❤️"** (vàng gold) xuất hiện |
| +39s | ✨ Điểm sáng lấp lánh xuất hiện giữa màn hình |

---

### 2.7 ACT 5: Black Hole Gargantua + Photo Sphere Gallery

**Trigger:** User chỉ tay vào điểm sáng (AI Hand) HOẶC click chuột.

#### Phase 1: Hố Đen Gargantua

| Bước | Sự kiện |
|---|---|
| 1 | Điểm sáng biến mất → Vụ nổ chớp sáng sinh ra hố đen (shockwave) |
| 2 | Hố đen Interstellar xuất hiện (accretion disk xoáy, photon ring, Doppler beaming) |
| 3 | 2500 vệt sáng lướt qua tạo cảm giác bị hút vào |
| 4 | Mọi vật thể (chữ, bánh, mặt trăng, chim) bị xoáy hút vào tâm hố đen |
| 5 | Camera bị hút xuyên qua Event Horizon (FOV bẻ cong 98°) |

#### Phase 2: Photo Sphere — Quả Cầu Ảnh 3D

Sau khi vượt qua hố đen, camera đến **Vũ trụ Kỷ niệm** — một quả cầu 3D chứa 13 bức ảnh kỷ niệm, xoay tròn giữa bầu trời sao.

**3 chế độ xem:**

| Chế độ | Hình thức | Chuyển từ |
|---|---|---|
| **SPHERE** | 13 ảnh phân bố trên quả cầu Fibonacci, tự xoay | Mặc định / Nắm tay ✊ |
| **GALLERY** | 13 ảnh dàn hàng ngang nổi trước camera | Xòe tay ✋ |
| **FULLVIEW** | 1 ảnh phóng to full chính diện, các ảnh còn lại mờ | Chỉ tay 1s 👆 |

**Bảng tương tác cử chỉ:**

| Cử chỉ | Ở SPHERE | Ở GALLERY | Ở FULLVIEW |
|---|---|---|---|
| ✋ Xòe tay | → GALLERY | — | → Quay về SPHERE/GALLERY |
| ✊ Nắm tay | — | → SPHERE | → Quay về SPHERE/GALLERY |
| 👆 Chỉ tay (hover 1s) | Phóng to ảnh | Phóng to ảnh | Đóng ảnh (1s dwell) |
| 🤏 Chụm 5 ngón kéo | Xoay quả cầu | Kéo cuộn ngang | — |
| 🔍 Mở/chụm 2 ngón | Zoom camera | Zoom camera | — |
| 🖱️ Click giữ kéo | Xoay quả cầu | Kéo cuộn ngang | — |
| 🖱️ Cuộn chuột | Zoom camera | Zoom camera | — |
| ⌨️ ESC | — | — | Đóng ảnh |
| ⌨️ 1/2/3/4 | Đổi cử chỉ test | Đổi cử chỉ test | Đổi cử chỉ test |

---

## 3. Yêu Cầu Phi Chức Năng

### 3.1 Hiệu năng
- Frame rate mục tiêu: 60 FPS trên desktop, 30+ FPS trên mobile
- Tải trang lần đầu: < 10s trên 4G (không tính ảnh)
- MediaPipe AI chỉ load khi cần (lazy CDN)

### 3.2 Khả năng tiếp cận (Accessibility)
- Mọi tương tác đều có **fallback thủ công** (click/touch) cho thiết bị không camera/mic
- Phím tắt keyboard cho tất cả cử chỉ (1/2/3/4/ESC)
- HUD hướng dẫn hiển thị rõ ràng trạng thái sensor

### 3.3 Responsive
- Full viewport (100vw × 100vh), no scroll
- Tự động resize canvas/camera khi thay đổi kích thước cửa sổ

### 3.4 Browser Support
- Chrome 90+ ✅
- Edge 90+ ✅
- Firefox 90+ ✅
- Safari 15+ ⚠️ (WebGL có thể hạn chế trên iOS)

---

## 4. Assets

### 4.1 Ảnh (13 bức, ~41.4 MB tổng)

| # | Tên file (rút gọn) | Dung lượng |
|---|---|---|
| 1 | `206bff05-...3600.jpg` | 2.1 MB |
| 2 | `3268500f-...3600-1.JPG` | 1.2 MB |
| 3 | `44bae090-...3600.JPG` | 1.3 MB |
| 4 | `846995b7-...3600.jpg` | 1.9 MB |
| 5 | `ab35f926-...3600-1.JPG` | 1.2 MB |
| 6 | `f131374f-...3600.JPG` | 1.4 MB |
| 7 | `IMG_0096...3600.JPG` | 2.4 MB |
| 8-12 | `IMG_9246-9250.JPG` | 4.7 – 6.6 MB mỗi ảnh |
| 13 | `Locket_...56.jpg` | 80 KB |

### 4.2 Remote Textures
- Moon texture: `moon_1024.jpg` (Three.js GitHub)
- Water normals: `waternormals.jpg` (Three.js GitHub)

### 4.3 Fonts (Google Fonts CDN)
- Montserrat (300, 400, 600)
- Dancing Script (400, 700)

---

## 5. Debug & Testing

| Hàm (Console) | Mô tả |
|---|---|
| `skipToCake()` | Nhảy đến cảnh Bánh Sinh Nhật |
| `skipToInkWash()` | Nhảy đến cảnh Thủy Mặc |
| `skipToDawn()` | Nhảy đến Dawn Finale |
| `skipToBlackHole()` | Nhảy đến Hố Đen |
| `skipToPhotoSphere()` | Nhảy đến Quả Cầu Ảnh 3D |

---

## 6. Rủi Ro & Lưu Ý

| Rủi ro | Mức độ | Giải pháp |
|---|---|---|
| Ảnh 41MB tải lâu trên mạng chậm | 🔴 Cao | Nén ảnh, progressive loading |
| Favicon 2.5MB quá lớn | 🟡 Trung bình | Nén xuống < 100KB |
| MediaPipe CDN load fail | 🟡 Trung bình | Fallback manual click đã có |
| WebGL crash trên GPU yếu | 🟡 Trung bình | `antialias: false`, pixel ratio cap 2 |
| iOS Safari hạn chế WebGL | 🟡 Trung bình | Test riêng, giảm particle count nếu cần |
| Camera/Mic bị user từ chối | 🟢 Thấp | Fallback thủ công hoạt động tốt |
