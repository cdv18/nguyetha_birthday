import { HAND_CONFIG } from './config.js';
import { HandTracker } from './handTracker.js';
import { HandStateMachine } from './stateMachine.js';
import { SphereController } from './sphereController.js';
import { HandUI } from './uiFeedback.js';

let activeTracker = null;
let activeStateMachine = null;
let activeSphereController = null;
let activeUI = null;
let globalDwellRatio = 0;

/**
 * Khởi tạo toàn bộ hệ thống điều khiển tay mới (Hand Interaction System 2.0).
 * Quản lý vòng đời dữ liệu 1 chiều:
 * MediaPipe -> OneEuroFilter -> GestureClassifier -> StateMachine -> SphereController & PhotoSphere -> HandUI
 */
export async function setupHandInteraction(photoSphere, camera, audioManager, onGestureCallback) {
  // 1. Nếu đã có hệ thống chạy trước đó -> reset/dừng để tránh chạy lặp
  if (activeTracker && activeTracker.isRunning()) {
    activeTracker.stop();
  }

  // 2. Khởi tạo các module con
  activeUI = new HandUI(HAND_CONFIG);
  activeStateMachine = new HandStateMachine(HAND_CONFIG);
  activeSphereController = new SphereController(HAND_CONFIG, photoSphere ? photoSphere.group : null, camera);
  activeTracker = new HandTracker(HAND_CONFIG);

  // 3. Đăng ký xử lý frame
  activeTracker.onFrame((frameData) => {
    const timestamp = frameData.timestamp || performance.now();

    // 3.1 Cập nhật StateMachine (với cooldown & grace period)
    const stateResult = activeStateMachine.update(frameData, timestamp);

    // 3.2 Chuyển tiếp action tới SphereController (xoay, quán tính, zoom)
    if (activeSphereController) {
      activeSphereController.update(); // xử lý quán tính và lerp zoom
      activeSphereController.handleAction(stateResult);
    }

    // 3.3 Chuyển tiếp action tới PhotoSphere
    if (photoSphere && photoSphere.group && photoSphere.group.visible) {
      photoSphere.handleAction(stateResult, (ratio) => {
        globalDwellRatio = ratio;
      });
    }

    // 3.4 Cập nhật giao diện phản hồi người dùng (Laser cursor, Dwell ring, HUD)
    if (activeUI) {
      activeUI.update(frameData, stateResult, globalDwellRatio);
    }

    // 3.5 Tương thích ngược: gọi onGestureCallback cho ACT 5 (kích hoạt hố đen, debug shortcuts)
    if (onGestureCallback && typeof onGestureCallback === 'function') {
      const primaryHand = (frameData.hands && frameData.hands.length > 0) ? frameData.hands[0] : null;
      const gestureName = primaryHand ? primaryHand.gesture.gesture : 'NONE';
      const cursorX = primaryHand ? primaryHand.cursorX : 0.5;
      const cursorY = primaryHand ? primaryHand.cursorY : 0.5;
      const dx = primaryHand ? primaryHand.cursorDX : 0;
      const dy = primaryHand ? primaryHand.cursorDY : 0;
      const pinchDist = primaryHand ? primaryHand.pinchDist : 1.0;
      const palmSize = primaryHand ? primaryHand.palmSize : null;

      // Tính zoomDelta mượt từ thay đổi khoảng cách bàn tay tới camera (palmSize)
      let zoomDelta = 0;
      if (primaryHand && activeSphereController && activeSphereController.lastPalmSize !== null && palmSize !== null) {
        const dPalm = palmSize - activeSphereController.lastPalmSize;
        if (Math.abs(dPalm) > (HAND_CONFIG.sphere.zoomDeadZone || 0.002)) {
          zoomDelta = -dPalm * (HAND_CONFIG.sphere.proximityZoomSensitivity || 150.0);
        }
      }

      onGestureCallback(
        gestureName,
        cursorX,
        cursorY,
        dx,
        dy,
        (ratio) => { globalDwellRatio = ratio; },
        zoomDelta
      );
    }
  });

  // 4. Khởi động camera và MediaPipe
  const cameraOK = await activeTracker.init();
  if (!cameraOK && activeUI) {
    activeUI.showToast('⚠️ Camera không khả dụng. Hệ thống đã tự động bật chế độ chuột/phím.', 4500);
  } else if (cameraOK && activeUI) {
    activeUI.showToast('✅ Nhận diện tay AI 2.0 đã kích hoạt (Hỗ trợ 2 tay & Bộ lọc One Euro)', 3000);
  }

  // 5. Cài đặt điều khiển chuột & phím fallback (luôn sẵn sàng khi không dùng camera)
  setupMouseFallback(photoSphere, camera);

  return {
    tracker: activeTracker,
    stateMachine: activeStateMachine,
    sphereController: activeSphereController,
    ui: activeUI,
  };
}

/**
 * Điều khiển chuột và bàn phím (Fallback mode khi không có Camera)
 */
function setupMouseFallback(photoSphere, camera) {
  let isMouseDown = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  window.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!photoSphere || !photoSphere.group || !photoSphere.group.visible) return;

    const cursorX = e.clientX / window.innerWidth;
    const cursorY = e.clientY / window.innerHeight;

    if (isMouseDown) {
      const dx = (e.clientX - lastMouseX) * 0.005;
      const dy = (e.clientY - lastMouseY) * 0.005;

      photoSphere.handleHandGesture('PINCH_GRAB', cursorX, cursorY, dx, dy, null, 0);

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    } else {
      photoSphere.handleHandGesture('POINTING', cursorX, cursorY, 0, 0, (ratio) => {
        globalDwellRatio = ratio;
      }, 0);
    }
  });

  window.addEventListener('wheel', (e) => {
    if (!photoSphere || !photoSphere.group || !photoSphere.group.visible) return;
    const cursorX = e.clientX / window.innerWidth;
    const cursorY = e.clientY / window.innerHeight;
    const zoomDelta = e.deltaY * 0.005;
    photoSphere.handleHandGesture('POINTING', cursorX, cursorY, 0, 0, null, zoomDelta);
  });
}

/**
 * Tương thích ngược: Hàm setupHandDetection cũ được chuyển tiếp sang hệ thống 2.0
 */
export function setupHandDetection(onGestureCallback) {
  // Lấy sceneManager từ window hoặc photoSphere nếu có sẵn
  const photoSphere = window._globalPhotoSphere || null;
  const camera = window._globalCamera || null;

  setupHandInteraction(photoSphere, camera, null, onGestureCallback);
}

/**
 * Tương thích ngược: Cập nhật tiến trình dwell UI
 */
export function updateDwellProgress(ratio) {
  globalDwellRatio = ratio;
  if (activeUI && activeUI.progressCircle) {
    const maxDash = 100.5;
    const offset = maxDash - Math.min(1.0, Math.max(0, ratio)) * maxDash;
    activeUI.progressCircle.setAttribute('stroke-dashoffset', String(offset));
  }
}
