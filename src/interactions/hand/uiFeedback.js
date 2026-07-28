/**
 * HandUI - Hệ thống phản hồi trực quan UI/UX cho Tương tác Tay & Quả cầu 3D.
 * Cung cấp con trỏ tay laser cyan, vòng tròn tiến trình hover/dwell, HUD trạng thái,
 * huy hiệu cử chỉ (Gesture badge), và Toast thông báo.
 */
export class HandUI {
  constructor(config) {
    this.config = config || {};
    this.cursorElem = null;
    this.badgeElem = null;
    this.progressCircle = null;
    this.hudElem = null;
    this.toastElem = null;

    this.initUI();
  }

  /**
   * Khởi tạo các phần tử DOM trên trang
   */
  initUI() {
    // 1. Con trỏ tay với laser cyan và vòng sáng ngoài
    this.cursorElem = document.createElement('div');
    this.cursorElem.id = 'ai-hand-cursor-v2';
    Object.assign(this.cursorElem.style, {
      position: 'fixed',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, #00ffff 0%, rgba(0, 255, 255, 0.4) 50%, rgba(0,255,255,0) 70%)',
      border: '2px solid #00ffff',
      boxShadow: '0 0 15px #00ffff, 0 0 30px rgba(0,255,255,0.5)',
      pointerEvents: 'none',
      zIndex: '99999',
      top: '0',
      left: '0',
      transform: 'translate(-50%, -50%)',
      display: 'none',
      transition: 'opacity 0.3s ease, border-color 0.3s ease, transform 0.08s ease-out',
    });

    // 2. SVG Vòng tiến trình Dwell xoay quanh con trỏ
    this.cursorElem.innerHTML = `
      <svg width="40" height="40" viewBox="0 0 40 40" style="position:absolute; top:-10px; left:-10px; transform:rotate(-90deg);">
        <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(0, 255, 255, 0.25)" stroke-width="2.5"></circle>
        <circle id="ai-hand-progress-v2" cx="20" cy="20" r="16" fill="none" stroke="#00ffff" stroke-width="2.5" 
                stroke-dasharray="100.5" stroke-dashoffset="100.5" stroke-linecap="round"></circle>
      </svg>
      <div id="ai-hand-badge-v2" style="position:absolute; top:28px; left:50%; transform:translateX(-50%); 
           background:rgba(0,10,20,0.85); border:1px solid #00ffff; border-radius:12px; padding:2px 8px; 
           font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; color:#00ffff; 
           white-space:nowrap; box-shadow:0 0 10px rgba(0,255,255,0.4);">READY</div>
    `;
    document.body.appendChild(this.cursorElem);
    this.progressCircle = this.cursorElem.querySelector('#ai-hand-progress-v2');
    this.badgeElem = this.cursorElem.querySelector('#ai-hand-badge-v2');

    // 3. HUD Trạng thái màn hình (Top-Center)
    this.hudElem = document.createElement('div');
    this.hudElem.id = 'ai-hand-hud';
    Object.assign(this.hudElem.style, {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '10000',
      background: 'rgba(5, 15, 30, 0.75)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(0, 255, 255, 0.3)',
      borderRadius: '24px',
      padding: '6px 18px',
      color: '#00ffff',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '1px',
      display: 'none',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 4px 20px rgba(0, 255, 255, 0.2)',
    });
    this.hudElem.innerHTML = `
      <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#00ff88; box-shadow:0 0 8px #00ff88;"></span>
      <span id="ai-hand-hud-text">HAND TRACKING ACTIVE</span>
    `;
    document.body.appendChild(this.hudElem);
  }

  /**
   * Hiển thị Toast thông báo ngắn
   */
  showToast(message, durationMs = 3000) {
    if (!this.toastElem) {
      this.toastElem = document.createElement('div');
      Object.assign(this.toastElem.style, {
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '100000',
        background: 'rgba(10, 25, 45, 0.9)',
        border: '1px solid #00ffff',
        borderRadius: '30px',
        padding: '12px 28px',
        color: '#ffffff',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 10px 30px rgba(0,255,255,0.3)',
        transition: 'opacity 0.3s ease',
      });
      document.body.appendChild(this.toastElem);
    }

    this.toastElem.textContent = message;
    this.toastElem.style.opacity = '1';

    setTimeout(() => {
      if (this.toastElem) this.toastElem.style.opacity = '0';
    }, durationMs);
  }

  /**
   * Cập nhật UI mỗi frame
   */
  update(handData, stateResult, dwellRatio = 0) {
    if (!handData) return;
    const { handCount, hands } = handData;

    // 1. Kiểm tra hiển thị Cursor và HUD
    if (handCount === 0) {
      if (this.cursorElem) {
        this.cursorElem.style.opacity = '0.25';
      }
      return;
    }

    if (this.cursorElem.style.display === 'none') {
      this.cursorElem.style.display = 'block';
      this.hudElem.style.display = 'flex';
      this.cursorElem.style.opacity = '1';
    } else {
      this.cursorElem.style.opacity = '1';
    }

    const primaryHand = hands[0];
    const { cursorX, cursorY, gesture } = primaryHand;

    // 2. Cập nhật vị trí con trỏ trên viewport
    const xPx = cursorX * window.innerWidth;
    const yPx = cursorY * window.innerHeight;
    this.cursorElem.style.left = `${xPx}px`;
    this.cursorElem.style.top = `${yPx}px`;

    // 3. Cập nhật màu sắc & huy hiệu cử chỉ
    let gestureName = 'READY';
    let borderColor = '#00ffff';

    switch (gesture.gesture) {
      case 'POINTING':
        gestureName = '👆 POINTING';
        borderColor = '#00ffff';
        break;
      case 'PINCH_GRAB':
        gestureName = '🤏 PINCH GRAB';
        borderColor = '#ffaa00';
        break;
      case 'OPEN_PALM':
        gestureName = '✋ OPEN PALM';
        borderColor = '#00ff88';
        break;
      case 'FIST':
        gestureName = '✊ FIST';
        borderColor = '#ff3366';
        break;
      default:
        gestureName = 'READY';
        borderColor = '#00ffff';
        break;
    }

    if (handCount === 2) {
      gestureName = '👐 TWO HANDS';
    }

    this.cursorElem.style.borderColor = borderColor;
    if (this.badgeElem) {
      this.badgeElem.textContent = gestureName;
      this.badgeElem.style.borderColor = borderColor;
      this.badgeElem.style.color = borderColor;
    }

    // 4. Cập nhật HUD trạng thái
    const hudText = this.hudElem.querySelector('#ai-hand-hud-text');
    if (hudText && stateResult) {
      hudText.textContent = `MODE: ${stateResult.state} (${handCount} ${handCount === 1 ? 'HAND' : 'HANDS'})`;
    }

    // 5. Cập nhật vòng tiến trình Dwell
    if (this.progressCircle) {
      const maxDash = 100.5;
      const offset = maxDash - Math.min(1.0, Math.max(0, dwellRatio)) * maxDash;
      this.progressCircle.setAttribute('stroke-dashoffset', String(offset));
      this.progressCircle.setAttribute('stroke', borderColor);
    }
  }

  show() {
    if (this.cursorElem) this.cursorElem.style.display = 'block';
    if (this.hudElem) this.hudElem.style.display = 'flex';
  }

  hide() {
    if (this.cursorElem) this.cursorElem.style.display = 'none';
    if (this.hudElem) this.hudElem.style.display = 'none';
  }
}
