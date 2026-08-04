import { distance2D } from './filters.js';

/**
 * Phân loại cử chỉ tay có tích hợp Hysteresis, xác nhận đa frame (Multi-frame confirmation)
 * và thời gian nghỉ (Cooldown) để triệt tiêu hoàn toàn hiện tượng nhấp nháy (gesture flickering).
 */
export class GestureClassifier {
  constructor(config) {
    this.config = config.gesture;
    
    // Trạng thái hiện tại
    this.confirmedGesture = 'NONE';
    this.candidateGesture = 'NONE';
    this.candidateCount = 0;
    this.lastTransitionTime = 0;
  }

  /**
   * Tính tỷ lệ độ dài duỗi của một ngón tay so với đốt khớp PIP
   */
  getFingerExtensionRatio(landmarks, tipIdx, pipIdx, wristIdx) {
    const tipDist = distance2D(landmarks[tipIdx], landmarks[wristIdx]);
    const pipDist = distance2D(landmarks[pipIdx], landmarks[wristIdx]);
    return pipDist > 0.0001 ? tipDist / pipDist : 1.0;
  }

  /**
   * Kiểm tra ngón tay duỗi với ngưỡng động (hysteresis)
   */
  isFingerExtended(ratio, wasExtended) {
    const enterThresh = this.config.pointingEnterThreshold || 1.08;
    const exitThresh = this.config.pointingExitThreshold || 1.03;
    return wasExtended ? (ratio > exitThresh) : (ratio > enterThresh);
  }

  /**
   * Phân loại cử chỉ thô trong frame hiện tại dựa trên landmarks
   */
  classifyRaw(landmarks) {
    if (!landmarks || landmarks.length < 21) {
      return {
        raw: 'NONE',
        pinchDist: 1.0,
        fingerStates: [false, false, false, false],
      };
    }

    // 1. Khoảng cách pinch (ngón cái 4 <-> ngón trỏ 8)
    const pinchDist = distance2D(landmarks[4], landmarks[8]);
    const pinchMiddleDist = distance2D(landmarks[4], landmarks[12]);
    const indexMiddleDist = distance2D(landmarks[8], landmarks[12]);

    // Kiểm tra chụm ngón tay PINCH_GRAB với hysteresis
    const wasPinch = this.confirmedGesture === 'PINCH_GRAB';
    const pinchThresh = wasPinch 
      ? (this.config.pinchExitThreshold || 0.14)
      : (this.config.pinchEnterThreshold || 0.08);

    const isPinchGrab = pinchDist < pinchThresh && (pinchMiddleDist < 0.15 || indexMiddleDist < 0.10);

    // 2. Tỷ lệ duỗi các ngón
    const indexRatio = this.getFingerExtensionRatio(landmarks, 8, 6, 0);
    const middleRatio = this.getFingerExtensionRatio(landmarks, 12, 10, 0);
    const ringRatio = this.getFingerExtensionRatio(landmarks, 16, 14, 0);
    const pinkyRatio = this.getFingerExtensionRatio(landmarks, 20, 18, 0);

    const wasPointing = this.confirmedGesture === 'POINTING';
    const wasOpenPalm = this.confirmedGesture === 'OPEN_PALM';

    const indexExt = this.isFingerExtended(indexRatio, wasPointing || wasOpenPalm);
    const middleExt = this.isFingerExtended(middleRatio, wasOpenPalm);
    const ringExt = this.isFingerExtended(ringRatio, wasOpenPalm);
    const pinkyExt = this.isFingerExtended(pinkyRatio, wasOpenPalm);

    const fingerStates = [indexExt, middleExt, ringExt, pinkyExt];

    // Ưu tiên 0: PINCH_GRAB
    if (isPinchGrab) {
      return { raw: 'PINCH_GRAB', pinchDist, fingerStates };
    }

    // Ưu tiên 1: OPEN_PALM (cả 4 ngón đều duỗi)
    if (indexExt && middleExt && ringExt && pinkyExt) {
      return { raw: 'OPEN_PALM', pinchDist, fingerStates };
    }

    // Ưu tiên 2: FIST (nắm tay - ưu tiên kiểm tra trước POINTING tránh nhầm ngón trỏ co nhẹ thành chỉ)
    const fistMax = this.config.fistMaxExtension || 1.38;
    const avgRatio = (indexRatio + middleRatio + ringRatio + pinkyRatio) / 4.0;
    const isFist = (indexRatio < fistMax && middleRatio < fistMax && ringRatio < fistMax && pinkyRatio < fistMax) ||
                   (avgRatio < 1.25 && middleRatio < fistMax && ringRatio < fistMax && pinkyRatio < fistMax);
    if (isFist) {
      return { raw: 'FIST', pinchDist, fingerStates };
    }

    // Ưu tiên 3: POINTING (ngón trỏ duỗi hơn các ngón khác hoặc indexExt nhạy)
    if ((indexExt || indexRatio > 1.08) && !isFist) {
      return { raw: 'POINTING', pinchDist, fingerStates };
    }

    return { raw: 'NONE', pinchDist, fingerStates };
  }

  /**
   * Hàm chính: nhận landmarks đã làm mượt, trả về kết quả cử chỉ ổn định
   */
  classify(landmarks, timestamp) {
    const { raw, pinchDist, fingerStates } = this.classifyRaw(landmarks);

    // Xử lý candidate đếm số frame liên tiếp
    if (raw === this.candidateGesture) {
      this.candidateCount++;
    } else {
      this.candidateGesture = raw;
      this.candidateCount = 1;
    }

    // Kiểm tra thời gian cooldown từ lần chuyển trạng thái trước
    const timeSinceTransition = timestamp - this.lastTransitionTime;
    const canTransition = timeSinceTransition >= (this.config.gestureCooldownMs || 250);

    // Xác nhận cử chỉ mới nếu đủ số frame và hết cooldown
    const confirmFrames = this.config.confirmFrames || 4;
    let confirmed = false;

    if (canTransition && this.candidateCount >= confirmFrames && this.candidateGesture !== this.confirmedGesture) {
      this.confirmedGesture = this.candidateGesture;
      this.lastTransitionTime = timestamp;
      confirmed = true;
    }

    const confidence = Math.min(1.0, this.candidateCount / confirmFrames);

    return {
      gesture: this.confirmedGesture,
      confirmed,
      confidence,
      pinchDist,
      fingerStates,
      raw,
    };
  }

  reset() {
    this.confirmedGesture = 'NONE';
    this.candidateGesture = 'NONE';
    this.candidateCount = 0;
    this.lastTransitionTime = 0;
  }
}
