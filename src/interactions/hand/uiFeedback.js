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
    // 1. Con trỏ tay với laser mượt và vòng sáng ngoài glassmorphic
    this.cursorElem = document.createElement('div');
    this.cursorElem.id = 'ai-hand-cursor-v2';
    Object.assign(this.cursorElem.style, {
      position: 'fixed',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 80%)',
      border: '1.5px solid rgba(255, 255, 255, 0.85)',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.45)',
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
        <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2.5"></circle>
        <circle id="ai-hand-progress-v2" cx="20" cy="20" r="16" fill="none" stroke="#ffffff" stroke-width="2.5" 
                stroke-dasharray="100.5" stroke-dashoffset="100.5" stroke-linecap="round"></circle>
      </svg>
      <div id="ai-hand-badge-v2" style="position:absolute; top:28px; left:50%; transform:translateX(-50%); 
           background:rgba(12,18,36,0.78); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
           border:1px solid rgba(255,255,255,0.25); border-radius:20px; padding:3px 10px; 
           font-family:'Montserrat',sans-serif; font-size:11px; font-weight:600; color:#ffffff; 
           white-space:nowrap; box-shadow:0 8px 20px rgba(0,0,0,0.5);">✨ Sẵn sàng</div>
    `;
    document.body.appendChild(this.cursorElem);
    this.progressCircle = this.cursorElem.querySelector('#ai-hand-progress-v2');
    this.badgeElem = this.cursorElem.querySelector('#ai-hand-badge-v2');

    // 3. HUD Trạng thái màn hình (Top-Center) - Vision Pro Glassmorphism
    this.hudElem = document.createElement('div');
    this.hudElem.id = 'ai-hand-hud';
    Object.assign(this.hudElem.style, {
      position: 'fixed',
      top: '22px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '10000',
      background: 'rgba(12, 18, 36, 0.65)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(255, 255, 255, 0.22)',
      borderRadius: '50px',
      padding: '8px 22px',
      color: '#ffffff',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '0.8px',
      display: 'none',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.22)',
    });
    this.hudElem.innerHTML = `
      <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#00ff88; box-shadow:0 0 10px #00ff88;"></span>
      <span id="ai-hand-hud-text">ĐANG KẾT NỐI CỬ CHỈ TAY</span>
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
        background: 'rgba(12, 18, 36, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        borderRadius: '50px',
        padding: '13px 30px',
        color: '#ffffff',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
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
    let gestureName = '✨ Sẵn sàng';
    let borderColor = 'rgba(255, 255, 255, 0.85)';

    switch (gesture.gesture) {
      case 'POINTING':
        gestureName = '👆 Chỉ tay';
        borderColor = '#00ffff';
        break;
      case 'PINCH_GRAB':
        gestureName = '🤏 Chọn ảnh';
        borderColor = '#ffaa00';
        break;
      case 'OPEN_PALM':
        gestureName = '✋ Xòe tay';
        borderColor = '#00ff88';
        break;
      case 'FIST':
        gestureName = '✊ Nắm tay';
        borderColor = '#ff3366';
        break;
      default:
        gestureName = '✨ Sẵn sàng';
        borderColor = 'rgba(255, 255, 255, 0.85)';
        break;
    }

    if (handCount === 2) {
      gestureName = '👐 2 bàn tay';
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
      let modeName = 'QUẢ CẦU';
      if (stateResult.state === 'GALLERY') modeName = 'DANH SÁCH ẢNH';
      if (stateResult.state === 'FULLVIEW') modeName = 'XEM ẢNH';
      hudText.textContent = `CỬ CHỈ: ${modeName} (${handCount} TAY)`;
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
  }

  hide() {
    if (this.cursorElem) this.cursorElem.style.display = 'none';
    if (this.hudElem) this.hudElem.style.display = 'none';
  }
}
