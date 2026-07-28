/**
 * State Machine 10 trạng thái kiểm soát luồng thao tác với Quả cầu hình ảnh 3D.
 * Đảm bảo mỗi thời điểm chỉ thực hiện một thao tác chính, tích hợp Cooldown 300ms
 * và Grace Period 500ms khi mất dấu tay tạm thời.
 */
export class HandStateMachine {
  constructor(config) {
    this.config = config.state || {};
    this.state = 'IDLE';
    this.lastTransitionTime = 0;
    this.handLostTimestamp = null;
    
    // Theo dõi thời gian giữ cử chỉ (Hold timers)
    this.palmHoldStartTime = 0;
    this.twoPalmHoldStartTime = 0;
    
    // Lưu tọa độ neo khi bắt đầu xoay / kéo
    this.anchorCursor = { x: 0.5, y: 0.5 };
  }

  /**
   * Kiểm tra có thể chuyển state mới chưa dựa trên cooldown
   */
  canTransition(timestamp) {
    const cooldown = this.config.transitionCooldownMs || 300;
    return (timestamp - this.lastTransitionTime) >= cooldown;
  }

  /**
   * Thực hiện chuyển state
   */
  transitionTo(newState, timestamp) {
    if (this.state === newState) return false;
    this.state = newState;
    this.lastTransitionTime = timestamp;
    return true;
  }

  /**
   * Cập nhật máy trạng thái mỗi frame, trả về action và tham số điều khiển
   */
  update(handData, timestamp) {
    const { handCount, hands, twoHandDist, twoHandDelta } = handData;
    const canTrans = this.canTransition(timestamp);

    // 1. Xử lý khi mất tay (Grace period 500ms)
    if (handCount === 0) {
      if (this.handLostTimestamp === null) {
        this.handLostTimestamp = timestamp;
      }
      const lostDur = timestamp - this.handLostTimestamp;
      const graceMs = this.config.handLostGraceMs || 500;
      
      if (lostDur > graceMs) {
        this.state = 'IDLE';
        this.palmHoldStartTime = 0;
        this.twoPalmHoldStartTime = 0;
      }
      return {
        state: this.state,
        action: null,
        params: {},
        canTransition: canTrans,
      };
    }

    // Có tay -> xoá cờ mất tay
    this.handLostTimestamp = null;

    const primaryHand = hands[0];
    const { gesture, cursorX, cursorY, cursorDX, cursorDY, pinchDist, palmSize } = primaryHand;

    // 2. Kiểm tra thao tác RESET toàn bộ (2 bàn tay mở giữ 1.5s)
    if (handCount === 2 && hands[0].gesture.gesture === 'OPEN_PALM' && hands[1].gesture.gesture === 'OPEN_PALM') {
      if (this.twoPalmHoldStartTime === 0) {
        this.twoPalmHoldStartTime = timestamp;
      } else if (timestamp - this.twoPalmHoldStartTime >= (this.config.resetHoldMs || 1500)) {
        this.transitionTo('IDLE', timestamp);
        this.twoPalmHoldStartTime = 0;
        return {
          state: 'IDLE',
          action: 'RESET_ALL',
          params: {},
          canTransition: false,
        };
      }
    } else {
      this.twoPalmHoldStartTime = 0;
    }

    // 3. Kiểm tra cử chỉ DỪNG / READY (1 bàn tay mở hướng về camera)
    if (gesture.gesture === 'OPEN_PALM') {
      if (this.palmHoldStartTime === 0) {
        this.palmHoldStartTime = timestamp;
      } else {
        const holdDur = timestamp - this.palmHoldStartTime;
        // Nếu đang ở trạng thái thao tác mà giơ tay mở > 400ms -> STOP
        if (this.state !== 'IDLE' && this.state !== 'READY' && holdDur >= (this.config.stopHoldMs || 400)) {
          this.transitionTo('READY', timestamp);
          return {
            state: 'READY',
            action: 'ROTATE_END',
            params: {},
            canTransition: false,
          };
        }
        // Nếu đang IDLE mà giữ tay mở > 300ms -> READY
        if (this.state === 'IDLE' && holdDur >= (this.config.readyHoldMs || 300)) {
          this.transitionTo('READY', timestamp);
        }
      }
    } else {
      this.palmHoldStartTime = 0;
    }

    // 4. Máy trạng thái chính
    let action = null;
    let params = { cursorX, cursorY, dx: cursorDX, dy: cursorDY, pinchDist, palmSize };

    switch (this.state) {
      case 'IDLE':
      case 'READY':
        // Vào xoay quả cầu (Nắm tay hoặc Pinch grab và kéo)
        if (canTrans && (gesture.gesture === 'PINCH_GRAB' || gesture.gesture === 'FIST')) {
          if (Math.abs(cursorDX) > 0.003 || Math.abs(cursorDY) > 0.003) {
            this.transitionTo('ROTATING', timestamp);
            this.anchorCursor = { x: cursorX, y: cursorY };
            action = 'ROTATE_START';
          }
        }
        // Trỏ ảnh (POINTING)
        else if (gesture.gesture === 'POINTING') {
          if (canTrans && this.state !== 'POINTING') {
            this.transitionTo('POINTING', timestamp);
          }
          action = 'HOVER_CARD';
        }
        // Thao tác 2 tay: Dàn trải ảnh (SPREADING)
        else if (handCount === 2 && twoHandDelta && twoHandDelta > 0.02) {
          if (canTrans) {
            this.transitionTo('SPREADING', timestamp);
            action = 'SPREAD_MOVE';
            params.spreadRatio = Math.min(1.0, Math.max(0, twoHandDist * 1.8));
          }
        }
        break;

      case 'ROTATING':
        if (gesture.gesture === 'PINCH_GRAB' || gesture.gesture === 'FIST') {
          action = 'ROTATE_MOVE';
          params.dx = cursorDX;
          params.dy = cursorDY;
        } else {
          // Thả tay mở ra -> chuyển sang quán tính (INERTIA)
          this.transitionTo('INERTIA', timestamp);
          action = 'ROTATE_END';
        }
        break;

      case 'INERTIA':
        // Trong chế độ quán tính, nếu nắm tay lại -> tiếp tục xoay
        if (gesture.gesture === 'PINCH_GRAB' || gesture.gesture === 'FIST') {
          this.transitionTo('ROTATING', timestamp);
          action = 'ROTATE_START';
        }
        // Nếu trỏ tay -> sang POINTING
        else if (gesture.gesture === 'POINTING') {
          this.transitionTo('POINTING', timestamp);
          action = 'HOVER_CARD';
        }
        break;

      case 'POINTING':
        if (gesture.gesture === 'POINTING') {
          action = 'HOVER_CARD';
        }
        // Khi đang hover ảnh mà chụm ngón (PINCH_GRAB) -> mở ảnh (SELECT_CARD)
        else if (gesture.gesture === 'PINCH_GRAB') {
          if (canTrans) {
            this.transitionTo('IMAGE_VIEWING', timestamp);
            action = 'SELECT_CARD';
          }
        }
        // Thả tay hoặc co tay -> về READY
        else if (gesture.gesture === 'OPEN_PALM' || gesture.gesture === 'NONE') {
          if (canTrans) {
            this.transitionTo('READY', timestamp);
          }
        }
        // Nắm tay kéo -> sang ROTATING
        else if (gesture.gesture === 'FIST') {
          if (canTrans) {
            this.transitionTo('ROTATING', timestamp);
            action = 'ROTATE_START';
          }
        }
        break;

      case 'SPREADING':
        // Dàn trải ảnh theo khoảng cách 2 tay
        if (handCount === 2) {
          const spreadRatio = Math.min(1.0, Math.max(0, (twoHandDist - 0.15) * 2.2));
          params.spreadRatio = spreadRatio;
          action = 'SPREAD_MOVE';

          // Nếu vượt ngưỡng commit (>65%) -> vào chế độ GRID/GALLERY
          const commitThresh = this.config.spreadCommitThreshold || 0.65;
          if (spreadRatio >= commitThresh) {
            this.transitionTo('GRID', timestamp);
            action = 'SPREAD_COMMIT';
          }
        } else {
          // Thả tay trước khi vượt ngưỡng -> thu về quả cầu
          this.transitionTo('READY', timestamp);
          action = 'COLLAPSE_COMMIT';
        }
        break;

      case 'GRID':
        // Trong chế độ GRID, nếu 2 tay kéo lại gần nhau -> thu về quả cầu
        if (handCount === 2 && twoHandDelta && twoHandDelta < -0.02) {
          this.transitionTo('COLLAPSING', timestamp);
          action = 'COLLAPSE_MOVE';
        }
        // Trỏ ảnh trong GRID
        else if (gesture.gesture === 'POINTING') {
          action = 'HOVER_CARD';
        }
        // Pinch mở ảnh trong GRID
        else if (gesture.gesture === 'PINCH_GRAB') {
          if (canTrans) {
            this.transitionTo('IMAGE_VIEWING', timestamp);
            action = 'SELECT_CARD';
          }
        }
        break;

      case 'COLLAPSING':
        if (handCount === 2) {
          const collapseRatio = Math.max(0, Math.min(1.0, (twoHandDist - 0.15) * 2.2));
          params.spreadRatio = collapseRatio;
          action = 'COLLAPSE_MOVE';

          if (collapseRatio < 0.35) {
            this.transitionTo('READY', timestamp);
            action = 'COLLAPSE_COMMIT';
          }
        } else {
          this.transitionTo('GRID', timestamp);
        }
        break;

      case 'IMAGE_VIEWING':
        // Trong chế độ xem ảnh chi tiết:
        // Cử chỉ FIST hoặc OPEN_PALM giữ > 300ms -> Đóng ảnh
        if (gesture.gesture === 'FIST' || gesture.gesture === 'OPEN_PALM') {
          if (canTrans) {
            this.transitionTo('READY', timestamp);
            action = 'CLOSE_IMAGE';
          }
        }
        // PINCH_GRAB kéo di chuyển -> Pan ảnh
        else if (gesture.gesture === 'PINCH_GRAB') {
          action = 'VIEW_PAN';
          params.dx = cursorDX;
          params.dy = cursorDY;
        }
        break;

      default:
        this.state = 'IDLE';
        break;
    }

    return {
      state: this.state,
      action,
      params,
      canTransition: canTrans,
    };
  }

  forceState(newState) {
    this.state = newState;
  }

  reset() {
    this.state = 'IDLE';
    this.lastTransitionTime = 0;
    this.handLostTimestamp = null;
    this.palmHoldStartTime = 0;
    this.twoPalmHoldStartTime = 0;
  }
}
