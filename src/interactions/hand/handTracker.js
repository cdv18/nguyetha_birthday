import { LandmarkSmoother, applyDeadZone, clamp, lerp, distance2D } from './filters.js';
import { GestureClassifier } from './gestureClassifier.js';

/**
 * HandTracker - Trình theo dõi bàn tay bằng MediaPipe Hands (Hỗ trợ 2 tay).
 * Quản lý webcam, lọc làm mượt landmark qua One Euro Filter, phân loại cử chỉ
 * và tính toán tọa độ con trỏ cùng khoảng cách zoom/dàn trải.
 */
export class HandTracker {
  constructor(config) {
    this.config = config;
    this.handsInstance = null;
    this.cameraInstance = null;
    this.videoElem = null;
    this.running = false;
    this.frameCallback = null;

    // Bộ lọc mịn landmark cho 2 tay
    this.smoothers = [
      new LandmarkSmoother(config.filter),
      new LandmarkSmoother(config.filter),
    ];

    // Bộ phân loại cử chỉ cho 2 tay
    this.classifiers = [
      new GestureClassifier(config),
      new GestureClassifier(config),
    ];

    // Trạng thái con trỏ (tay chính)
    this.cursorX = 0.5;
    this.cursorY = 0.5;
    this.cursorDX = 0;
    this.cursorDY = 0;

    // Khoảng cách pinch ngón cái-trỏ (tay chính)
    this.lastPinchDist = null;

    // Khoảng cách giữa 2 tay (để zoom 2 tay hoặc dàn trải)
    this.lastTwoHandDist = null;

    // Mất tay tạm thời
    this.lastHandSeenTime = 0;
  }

  /**
   * Tải động thư viện MediaPipe từ CDN nếu chưa có
   */
  async loadScripts() {
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement('script');
        s.src = url;
        s.crossOrigin = 'anonymous';
        s.onload = resolve;
        s.onerror = () => reject(new Error(`Failed to load ${url}`));
        document.head.appendChild(s);
      });
    };

    if (!window.Hands || !window.Camera) {
      await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js');
      await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js');
    }
  }

  /**
   * Khởi tạo MediaPipe Hands và Webcam
   */
  async init() {
    try {
      await this.loadScripts();

      // Tạo thẻ video ẩn cho webcam
      this.videoElem = document.createElement('video');
      this.videoElem.style.display = 'none';
      this.videoElem.setAttribute('playsinline', '');
      document.body.appendChild(this.videoElem);

      this.handsInstance = new window.Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
      });

      this.handsInstance.setOptions({
        maxNumHands: this.config.mediapipe.maxNumHands || 2,
        modelComplexity: this.config.mediapipe.modelComplexity || 1,
        minDetectionConfidence: this.config.mediapipe.minDetectionConfidence || 0.65,
        minTrackingConfidence: this.config.mediapipe.minTrackingConfidence || 0.65,
      });

      this.handsInstance.onResults((results) => this.processResults(results));

      this.cameraInstance = new window.Camera(this.videoElem, {
        onFrame: async () => {
          if (this.running && this.handsInstance) {
            await this.handsInstance.send({ image: this.videoElem });
          }
        },
        width: 640,
        height: 480,
      });

      await this.cameraInstance.start();
      this.running = true;
      console.log('✅ HandTracker: Khởi tạo camera và MediaPipe thành công (Hỗ trợ 2 tay)');
      return true;
    } catch (err) {
      console.error('❌ HandTracker init error:', err);
      return false;
    }
  }

  /**
   * Đăng ký callback xử lý dữ liệu mỗi frame
   */
  onFrame(callback) {
    this.frameCallback = callback;
  }

  /**
   * Xử lý kết quả trả về từ MediaPipe mỗi frame
   */
  processResults(results) {
    const timestamp = performance.now();
    const handCount = results.multiHandLandmarks ? results.multiHandLandmarks.length : 0;

    // Nếu không thấy tay nào -> xử lý mất tay
    if (handCount === 0) {
      const lostDuration = timestamp - this.lastHandSeenTime;
      const graceMs = this.config.state.handLostGraceMs || 500;

      // Hết thời gian ân hạn -> reset khoảng cách pinch tránh zoom spike khi quay lại
      if (lostDuration > graceMs) {
        this.lastPinchDist = null;
        this.lastTwoHandDist = null;
        this.cursorDX = 0;
        this.cursorDY = 0;
      }

      if (this.frameCallback) {
        this.frameCallback({
          handCount: 0,
          hands: [],
          twoHandDist: null,
          twoHandDelta: 0,
          timestamp,
        });
      }
      return;
    }

    this.lastHandSeenTime = timestamp;

    const handsData = [];
    const maxHands = Math.min(handCount, 2);

    for (let i = 0; i < maxHands; i++) {
      const rawLandmarks = results.multiHandLandmarks[i];
      // 1. Làm mượt landmarks qua One Euro Filter
      const smoothedLandmarks = this.smoothers[i].smooth(rawLandmarks, timestamp);

      // 2. Phân loại cử chỉ với hysteresis & confirmFrames
      const gestureResult = this.classifiers[i].classify(smoothedLandmarks, timestamp);

      // 3. Tính toán con trỏ cho từng bàn tay (tọa độ ngón trỏ landmark 8)
      // Lật gương ngang cho đúng góc nhìn camera: x = 1 - rawX
      const rawX = clamp(1.0 - smoothedLandmarks[8].x, 0, 1);
      const rawY = clamp(smoothedLandmarks[8].y, 0, 1);

      let cursorX = rawX;
      let cursorY = rawY;
      let dx = 0;
      let dy = 0;

      // Nếu là tay chính (tay 0), tính con trỏ với EMA mượt và Dead Zone
      if (i === 0) {
        const lerpFactor = this.config.cursor.lerpFactor || 0.35;
        const targetX = lerp(this.cursorX, rawX, lerpFactor);
        const targetY = lerp(this.cursorY, rawY, lerpFactor);

        const diffX = targetX - this.cursorX;
        const diffY = targetY - this.cursorY;

        const deadZone = this.config.cursor.deadZone || 0.008;
        dx = applyDeadZone(diffX, deadZone);
        dy = applyDeadZone(diffY, deadZone);

        this.cursorX += dx;
        this.cursorY += dy;
        this.cursorDX = dx;
        this.cursorDY = dy;

        cursorX = this.cursorX;
        cursorY = this.cursorY;
      }

      // Tính khoảng cách lòng bàn tay (landmark 0 -> 9) để biết tay gần hay xa camera
      const palmSize = distance2D(smoothedLandmarks[0], smoothedLandmarks[9]);

      handsData.push({
        index: i,
        landmarks: smoothedLandmarks,
        gesture: gestureResult,
        cursorX,
        cursorY,
        cursorDX: dx,
        cursorDY: dy,
        pinchDist: gestureResult.pinchDist,
        palmSize: palmSize,
      });
    }

    // 4. Tính toán khoảng cách giữa 2 tay (nếu có 2 tay)
    let twoHandDist = null;
    let twoHandDelta = 0;

    if (maxHands === 2) {
      // Dùng tâm lòng bàn tay (landmark 0 - cổ tay hoặc landmark 9 - giữa lòng tay)
      const p0 = handsData[0].landmarks[9];
      const p1 = handsData[1].landmarks[9];
      twoHandDist = distance2D(p0, p1);

      if (this.lastTwoHandDist !== null) {
        twoHandDelta = twoHandDist - this.lastTwoHandDist;
      }
      this.lastTwoHandDist = twoHandDist;
    } else {
      this.lastTwoHandDist = null;
    }

    // 5. Trả dữ liệu về cho callback
    if (this.frameCallback) {
      this.frameCallback({
        handCount: maxHands,
        hands: handsData,
        twoHandDist,
        twoHandDelta,
        timestamp,
      });
    }
  }

  stop() {
    this.running = false;
    if (this.cameraInstance) {
      this.cameraInstance.stop();
    }
    if (this.videoElem && this.videoElem.parentNode) {
      this.videoElem.parentNode.removeChild(this.videoElem);
    }
    console.log('🛑 HandTracker stopped.');
  }

  isRunning() {
    return this.running;
  }
}
