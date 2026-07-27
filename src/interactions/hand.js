// ============================================================================
// SMART AI HAND GESTURE DETECTOR (MEDIAPIPE HANDS + LASER CURSOR)
// Nhận diện cử chỉ tay (Chỉ ngón tay 👆, Xòe tay ✋, Nắm tay ✊) & Con trỏ ngón tay
// ============================================================================

let isHandDetecting = false;
let handsInstance = null;
let videoStream = null;
let cursorElem = null;
let dwellSvg = null;
let dwellCircle = null;

// Track cursor coordinates and velocities
let cursorX = 0.5;
let cursorY = 0.5;
let lastX = 0.5;
let lastY = 0.5;
let currentGesture = 'NONE';

// Dwell timer for >2 seconds pointing at target
let dwellStartTime = 0;
let dwellingTargetId = null;

/**
 * Tải thư viện script từ CDN một cách an toàn
 */
function loadScript(url) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = url;
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(script);
  });
}

/**
 * Tạo con trỏ holographic laser pointer & thanh tiến trình dwell 2 giây
 */
function createHandCursor() {
  const existing = document.getElementById('ai-hand-cursor');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.id = 'ai-hand-cursor';
  el.innerHTML = `
    <svg width="48" height="48" viewBox="0 0 48 48" style="position: absolute; top: -16px; left: -16px; pointer-events: none;">
      <circle cx="24" cy="24" r="18" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
      <circle id="dwell-progress-circle" cx="24" cy="24" r="18" fill="none" stroke="#00ffff" stroke-width="3" 
              stroke-dasharray="113" stroke-dashoffset="113" stroke-linecap="round"
              style="transform: rotate(-90deg); transform-origin: 50% 50%; transition: stroke-dashoffset 0.1s linear;"/>
    </svg>
    <div style="width: 16px; height: 16px; border-radius: 50%; background: #00ffff; box-shadow: 0 0 16px #00ffff, 0 0 30px #00aaff; border: 2px solid #ffffff;"></div>
    <div id="ai-gesture-badge" style="position: absolute; top: 24px; left: 50%; transform: translateX(-50%); white-space: nowrap; font-size: 11px; font-weight: 700; color: #fff; background: rgba(0,0,0,0.75); padding: 2px 8px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.3); font-family: 'Montserrat', sans-serif;">
      👆 POINTING
    </div>
  `;

  Object.assign(el.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '16px',
    height: '16px',
    pointerEvents: 'none',
    zIndex: '100000',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.3s ease',
    opacity: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  document.body.appendChild(el);
  cursorElem = el;
  dwellCircle = el.querySelector('#dwell-progress-circle');

  return el;
}

/**
 * Tạo giao diện HUD hướng dẫn nhận diện cử chỉ bàn tay
 */
function createHandHUD() {
  const existing = document.getElementById('ai-hand-hud');
  if (existing) existing.remove();

  const hud = document.createElement('div');
  hud.id = 'ai-hand-hud';
  hud.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span id="hand-status-dot" style="width: 10px; height: 10px; border-radius: 50%; background: #00ff88; box-shadow: 0 0 10px #00ff88;"></span>
      <span id="hand-status-text" style="font-size: 13px; font-weight: 600;">👆 Chỉ tay (Hover 1s view) | 🤏 Chụm 5 ngón kéo xoay | 🔍 Mở ngón trỏ cái (hoặc cuộn chuột) zoom | ✋ Xòe | ✊ Nắm</span>
    </div>
  `;

  Object.assign(hud.style, {
    position: 'fixed',
    top: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '9999',
    background: 'rgba(10, 15, 30, 0.85)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(0, 255, 255, 0.35)',
    borderRadius: '40px',
    padding: '10px 24px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 255, 255, 0.15)',
    color: '#ffffff',
    fontFamily: "'Montserrat', sans-serif",
    transition: 'all 0.5s ease',
    opacity: '0'
  });

  document.body.appendChild(hud);
  requestAnimationFrame(() => {
    hud.style.opacity = '1';
  });

  return hud;
}

/**
 * Phân loại cử chỉ tay từ 21 điểm landmarks của MediaPipe
 * Trả về: 'POINTING' (Chỉ tay), 'PINCH_GRAB' (Chụm 5 ngón), 'OPEN_PALM' (Xòe tay), 'FIST' (Nắm tay), hoặc 'NONE'
 */
function classifyHandGesture(landmarks) {
  const wrist = landmarks[0];
  const thumbTip = landmarks[4];
  const indexTip = landmarks[8];
  const indexPip = landmarks[6];
  const middleTip = landmarks[12];
  const middlePip = landmarks[10];
  const ringTip = landmarks[16];
  const ringPip = landmarks[14];
  const pinkyTip = landmarks[20];
  const pinkyPip = landmarks[18];

  const dist = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

  const pinchThumbIndex = dist(thumbTip, indexTip);
  const pinchThumbMiddle = dist(thumbTip, middleTip);
  const pinchIndexMiddle = dist(indexTip, middleTip);

  // 0. PINCH_GRAB (Chụm 5 ngón tay lại xoay quả cầu - giống click giữ chuột):
  if (pinchThumbIndex < 0.12 && (pinchThumbMiddle < 0.15 || pinchIndexMiddle < 0.10)) {
    return 'PINCH_GRAB';
  }

  const indexExt = dist(indexTip, wrist) > dist(indexPip, wrist) * 1.25;
  const middleExt = dist(middleTip, wrist) > dist(middlePip, wrist) * 1.25;
  const ringExt = dist(ringTip, wrist) > dist(ringPip, wrist) * 1.25;
  const pinkyExt = dist(pinkyTip, wrist) > dist(pinkyPip, wrist) * 1.25;

  // 1. OPEN PALM (Xòe cả bàn tay): Cả 4 ngón đều duỗi thẳng
  if (indexExt && middleExt && ringExt && pinkyExt) {
    return 'OPEN_PALM';
  }

  // 2. POINTING (Chỉ ngón tay): Ngón trỏ duỗi, các ngón còn lại co lại
  if (indexExt && !middleExt && !ringExt && !pinkyExt) {
    return 'POINTING';
  }

  // 3. FIST (Nắm bàn tay lại): Cả 4 ngón đều co lại
  if (!indexExt && !middleExt && !ringExt && !pinkyExt) {
    return 'FIST';
  }

  // Mặc định nếu ngón trỏ vươn ra xa thì xem như POINTING
  if (indexExt) return 'POINTING';

  return 'NONE';
}

/**
 * Dừng hệ thống nhận diện tay
 */
export function stopHandDetection() {
  isHandDetecting = false;
  if (videoStream) {
    videoStream.getTracks().forEach(t => t.stop());
    videoStream = null;
  }
  if (handsInstance && typeof handsInstance.close === 'function') {
    handsInstance.close();
    handsInstance = null;
  }
  if (cursorElem) {
    cursorElem.remove();
    cursorElem = null;
  }
  const hud = document.getElementById('ai-hand-hud');
  if (hud) hud.remove();
}

/**
 * Kích hoạt hệ thống AI Hand Gesture (Camera + Mouse Fallback)
 * @param {Function} onGestureCallback - Callback (gesture, x, y, dx, dy, dwellRatio)
 */
export async function setupHandDetection(onGestureCallback) {
  if (isHandDetecting) return;
  isHandDetecting = true;

  createHandCursor();
  createHandHUD();

  // 1. FALLBACK MOUSE / TOUCH CONTROL (Luôn hoạt động để hỗ trợ thiết bị không camera hoặc test chuột)
  window.addEventListener('mousemove', (e) => {
    if (!isHandDetecting) return;
    const nx = e.clientX / window.innerWidth;
    const ny = e.clientY / window.innerHeight;
    const dx = nx - lastX;
    const dy = ny - lastY;
    lastX = cursorX;
    lastY = cursorY;
    cursorX = nx;
    cursorY = ny;

    if (cursorElem) {
      cursorElem.style.opacity = '1';
      cursorElem.style.left = `${e.clientX}px`;
      cursorElem.style.top = `${e.clientY}px`;
    }

    // Khi nhấn giữ chuột (hoặc test trên desktop), thao tác tương đương với chụm 5 ngón tay (PINCH_GRAB) để xoay quả cầu
    const activeGesture = isMouseDown ? 'PINCH_GRAB' : (currentGesture === 'NONE' ? 'POINTING' : currentGesture);
    onGestureCallback(activeGesture, cursorX, cursorY, dx, dy);
  });

  let isMouseDown = false;
  window.addEventListener('mousedown', () => { isMouseDown = true; });
  window.addEventListener('mouseup', () => { isMouseDown = false; });

  let lastPinchDist = null;

  // Hỗ trợ cuộn chuột phóng to / thu nhỏ tại vị trí con trỏ (Zoom to Cursor)
  window.addEventListener('wheel', (e) => {
    if (!isHandDetecting) return;
    const zoomDelta = e.deltaY < 0 ? 1.2 : -1.2;
    const activeGesture = isMouseDown ? 'PINCH_GRAB' : (currentGesture === 'NONE' ? 'POINTING' : currentGesture);
    onGestureCallback(activeGesture, cursorX, cursorY, 0, 0, null, zoomDelta);
  });

  // Hỗ trợ phím/mouse phím tắt chuyển cử chỉ khi test chuột
  window.addEventListener('keydown', (e) => {
    if (!isHandDetecting) return;
    if (e.key === '1') currentGesture = 'POINTING';
    if (e.key === '2') currentGesture = 'PINCH_GRAB';
    if (e.key === '3') currentGesture = 'OPEN_PALM';
    if (e.key === '4') currentGesture = 'FIST';
    const badge = document.getElementById('ai-gesture-badge');
    if (badge) badge.textContent = `👆 ${currentGesture}`;
  });

  // 2. WEBCAM MEDIAPIPE HANDS AI DETECTOR
  try {
    videoStream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480, facingMode: 'user' }
    });

    const video = document.createElement('video');
    video.srcObject = videoStream;
    video.playsInline = true;
    video.muted = true;
    await video.play();

    await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js');
    await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js');

    if (window.Hands) {
      handsInstance = new window.Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
      });

      handsInstance.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.6,
        minTrackingConfidence: 0.6
      });

      handsInstance.onResults((results) => {
        if (!isHandDetecting) return;
        if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
          if (cursorElem) cursorElem.style.opacity = '0.3';
          return;
        }

        const landmarks = results.multiHandLandmarks[0];
        const gesture = classifyHandGesture(landmarks);
        currentGesture = gesture;

        // Landmark 8 là đầu ngón trỏ (Index Finger Tip). Do webcam lật gương, x = 1 - landmarks[8].x
        const rawX = 1 - landmarks[8].x;
        const rawY = landmarks[8].y;

        // Làm mượt (lerp) tọa độ con trỏ ngón tay
        cursorX = cursorX * 0.7 + rawX * 0.3;
        cursorY = cursorY * 0.7 + rawY * 0.3;
        const dx = cursorX - lastX;
        const dy = cursorY - lastY;
        lastX = cursorX;
        lastY = cursorY;

        // Tính khoảng cách giữa ngón cái (4) và ngón trỏ (8) để phát hiện mở ra / chụm lại (Pinch Zoom)
        const thumbTip = landmarks[4];
        const indexTip = landmarks[8];
        const pinchDist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y);
        let zoomDelta = 0;
        if (lastPinchDist !== null) {
          const dPinch = pinchDist - lastPinchDist; // > 0: mở ra (phóng to), < 0: chụm lại (thu nhỏ)
          if (Math.abs(dPinch) > 0.005) {
            zoomDelta = dPinch * 40.0;
          }
        }
        lastPinchDist = pinchDist;

        // Cập nhật vị trí con trỏ laser trên màn hình
        if (cursorElem) {
          cursorElem.style.opacity = '1';
          cursorElem.style.left = `${cursorX * window.innerWidth}px`;
          cursorElem.style.top = `${cursorY * window.innerHeight}px`;

          const badge = cursorElem.querySelector('#ai-gesture-badge');
          if (badge) {
            if (zoomDelta > 0.15) badge.textContent = '🔍 PHÓNG TO (ZOOM IN)';
            else if (zoomDelta < -0.15) badge.textContent = '🔍 THU NHỎ (ZOOM OUT)';
            else if (gesture === 'POINTING') badge.textContent = '👆 CHỈ NGÓN (HOVER 1S VIEW)';
            else if (gesture === 'PINCH_GRAB') badge.textContent = '🤏 CHỤM TAY KÉO XOAY (GRAB)';
            else if (gesture === 'OPEN_PALM') badge.textContent = '✋ XÒE BÀN TAY';
            else if (gesture === 'FIST') badge.textContent = '✊ NẮM BÀN TAY';
            else badge.textContent = '👋 HAND TRACKING';
          }
        }

        onGestureCallback(gesture, cursorX, cursorY, dx, dy, null, zoomDelta);
      });

      const detectLoop = async () => {
        if (!isHandDetecting) return;
        if (video.readyState >= 2 && handsInstance) {
          try {
            await handsInstance.send({ image: video });
          } catch (err) {}
        }
        if (isHandDetecting) requestAnimationFrame(detectLoop);
      };

      requestAnimationFrame(detectLoop);
    }
  } catch (err) {
    console.warn("👋 Camera Hand Tracking không khả dụng, sử dụng chế độ chuột/touch:", err);
  }
}

/**
 * Cập nhật vòng tròn tiến trình 2 giây khi ngón tay chỉ vào mục tiêu
 */
export function updateDwellProgress(ratio) {
  if (!dwellCircle) return;
  // ratio: 0 -> 1. strokeDashoffset: 113 -> 0
  const offset = Math.max(0, 113 * (1 - ratio));
  dwellCircle.style.strokeDashoffset = offset;
  if (ratio > 0 && ratio < 1) {
    dwellCircle.style.stroke = '#00ffff';
  } else if (ratio >= 1) {
    dwellCircle.style.stroke = '#00ff88';
  } else {
    dwellCircle.style.strokeDashoffset = '113';
  }
}
