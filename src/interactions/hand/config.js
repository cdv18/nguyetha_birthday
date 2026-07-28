/**
 * Cấu hình tập trung cho toàn bộ hệ thống tương tác cử chỉ tay (Hand Interaction System)
 * Mọi ngưỡng (threshold), thời gian (delay, cooldown, dwell), và hệ số lọc đều nằm ở đây.
 */
export const HAND_CONFIG = {
  // 1. Cấu hình MediaPipe Hands
  mediapipe: {
    maxNumHands: 2,                  // Hỗ trợ 2 tay để zoom 2 tay, dàn trải, reset
    modelComplexity: 1,              // 0: nhanh/nhẹ, 1: cân bằng chính xác
    minDetectionConfidence: 0.65,
    minTrackingConfidence: 0.65,
  },

  // 2. Cấu hình One Euro Filter (làm mượt landmark chống rung)
  filter: {
    minCutoff: 1.0,                  // Hz - tần số cắt tối thiểu (thấp = mượt hơn khi đứng yên)
    beta: 0.007,                     // Hệ số tốc độ (beta cao = phản hồi nhanh hơn khi chuyển động nhanh)
    dCutoff: 1.0,                    // Hz - tần số cắt cho đạo hàm vận tốc
  },

  // 3. Cấu hình con trỏ tay (Hand Cursor)
  cursor: {
    lerpFactor: 0.35,                // Hệ số làm mượt Exponential Moving Average cho cursor
    deadZone: 0.008,                 // Bỏ qua di chuyển nhỏ hơn 0.8% màn hình
  },

  // 4. Cấu hình phân loại cử chỉ (Gesture Classification & Hysteresis)
  gesture: {
    // Ngưỡng POINTING (Hysteresis: ngưỡng bắt đầu lớn hơn ngưỡng kết thúc)
    pointingEnterThreshold: 1.18,    // tỷ lệ dist(tip, wrist) / dist(pip, wrist) > 1.18 để vào POINTING
    pointingExitThreshold: 1.10,     // tỷ lệ < 1.10 mới kết thúc POINTING

    // Ngưỡng PINCH_GRAB (chụm ngón cái - trỏ / giữa)
    pinchEnterThreshold: 0.08,       // Khoảng cách chuẩn hóa < 0.08 để vào PINCH
    pinchExitThreshold: 0.14,        // Khoảng cách > 0.14 mới thoát PINCH

    // Ngưỡng FIST (nắm tay)
    fistMaxExtension: 1.15,          // Không ngón nào có tỷ lệ duỗi vượt 1.15

    // Xác nhận nhiều frame liên tiếp (Multi-frame confirmation)
    confirmFrames: 2,                // Cần 2 frame liên tiếp cùng cử chỉ để công nhận nhanh nhạy

    // Thời gian nghỉ giữa các lần chuyển đổi cử chỉ
    gestureCooldownMs: 150,
  },

  // 5. Cấu hình máy trạng thái (State Machine)
  state: {
    readyHoldMs: 300,                // Bàn tay mở giữ ổn định 300ms -> vào READY
    stopHoldMs: 400,                 // Bàn tay mở giữ 400ms khi đang thao tác -> STOPPING/IDLE
    resetHoldMs: 1500,               // 2 bàn tay mở giữ 1.5s -> RESETTING
    spreadCommitThreshold: 0.65,     // Kéo 2 tay ra ngoài > 65% quãng đường -> commit SPREADING
    transitionCooldownMs: 300,       // Cooldown tối thiểu giữa các lần chuyển state
    handLostGraceMs: 500,            // Thời gian ân hạn 500ms khi mất tay trước khi reset state
  },

  // 6. Cấu hình điều khiển Quả cầu 3D (Sphere Controller)
  sphere: {
    rotationSensitivity: 3.5,        // Độ nhạy xoay theo chuyển động tay
    rotationDeadZone: 0.005,         // Bỏ qua dịch chuyển nhỏ hơn 0.5% khi xoay
    maxRotationX: 0.7,               // Giới hạn góc xoay dọc (radians) +/- 0.7
    inertiaDecay: 0.92,              // Hệ số giảm vận tốc quán tính mỗi frame (0.92 = mượt)
    minInertia: 0.001,               // Vận tốc dưới ngưỡng này sẽ dừng hẳn
    
    proximityZoomSensitivity: 150.0, // Độ nhạy zoom theo khoảng cách bàn tay tới camera (tay gần = zoom to)
    zoomSensitivity: 2.5,            // Độ nhạy pinch zoom (dự phòng)
    zoomDeadZone: 0.002,             // Bỏ qua rung lắc nhỏ khi zoom
    zoomMin: 18,                     // Khoảng cách camera Z tối thiểu (zoom in cực đại)
    zoomMax: 52,                     // Khoảng cách camera Z tối đa (zoom out cực đại)
    zoomLerp: 0.12,                  // Hệ số nội suy mượt cho camera.position.z
  },

  // 7. Cấu hình tương tác Hover, Trỏ & Mở ảnh
  hover: {
    dwellTimeMs: 600,                // 600ms hover liên tục -> highlight ảnh
    selectPinchThreshold: 0.07,      // Pinch khi đang hover -> mở ảnh full view
    selectDwellMs: 1200,             // Hoặc giữ con trỏ 1.2s -> tự động mở ảnh
    hoverScaleBoost: 1.15,           // Tăng tỷ lệ kích thước ảnh 15% khi hover
    hoverZOffset: 2.0,               // Dịch ảnh ra trước 2 units khi hover
  },
};
