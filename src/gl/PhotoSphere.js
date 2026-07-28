import * as THREE from 'three';
import gsap from 'gsap';

// Tự động import tất cả hình ảnh trong folder /src/assets/nh/
const photoUrlsMap = import.meta.glob('/src/assets/nh/*', { eager: true, query: '?url', import: 'default' });
const photoUrls = Object.values(photoUrlsMap);

/**
 * PHOTO SPHERE & HOLOGRAPHIC GESTURE GALLERY
 * Quả cầu 3D Kỷ niệm Nguyệt Hà & Trình diễn ảnh Holographic điều khiển bằng cử chỉ tay
 * Đã nâng cấp hỗ trợ StateMachine, dàn trải 2 tay (SPREADING), Hover Highlight, và chống rung/lỗi nhạy.
 */
export class PhotoSphere {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.group = new THREE.Group();
    this.group.position.set(0, 12, 0); // Đặt ở vị trí trung tâm cảnh
    this.group.visible = false;
    this.scene.add(this.group);

    this.cards = [];
    this.state = 'SPHERE'; // 'SPHERE', 'GALLERY', 'FULLVIEW', 'SPREADING', 'COLLAPSING'
    this.previousState = 'SPHERE';
    this.activeCard = null;
    this.hoveredCard = null;
    this.hoverStartTime = 0;
    this.lastHoverSeenTime = 0;
    this.closeHoverStartTime = null;
    this.enlargeTimestamp = 0;
    this.galleryScrollX = 0;
    this.targetScrollX = 0;

    // Raycaster để phát hiện ngón tay đang chỉ vào bức ảnh nào
    this.raycaster = new THREE.Raycaster();
    this.mouse2D = new THREE.Vector2();

    // Phím tắt ESC hoặc click chuột ngoài để hủy/đóng xem ảnh
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state === 'FULLVIEW') {
        this.closeFullView();
      }
    });
    window.addEventListener('click', (e) => {
      if (this.state === 'FULLVIEW' && performance.now() - (this.enlargeTimestamp || 0) > 400) {
        this.closeFullView();
      }
    });

    this.initPhotos();
  }

  /**
   * Khởi tạo 13 thẻ ảnh từ folder assets/nh và bố trí theo hình cầu Fibonacci
   */
  initPhotos() {
    const textureLoader = new THREE.TextureLoader();
    const count = photoUrls.length || 1;
    const radius = 13.5; // Bán kính chuẩn, nhìn thấy trọn vẹn 100% quả cầu trên màn hình
    const phi = Math.PI * (3 - Math.sqrt(5)); // Tỷ lệ vàng Fibonacci

    photoUrls.forEach((url, i) => {
      // 1. Tọa độ Fibonacci Sphere
      const y = 1 - (i / (count - 1)) * 2; // y từ 1 -> -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const spherePos = new THREE.Vector3(x * radius, y * radius, z * radius);

      // 2. Tọa độ Floating Gallery List (khi xòe bàn tay phân giải)
      // Dàn đều ảnh trên một cung ngang/danh sách nổi trước camera
      const spacing = 7.5;
      const galleryX = (i - (count - 1) / 2) * spacing;
      const galleryPos = new THREE.Vector3(galleryX, 0, 15); // Gần camera hơn

      // 3. Tạo Mesh thẻ ảnh với khung sáng kim loại điện ảnh
      const cardGroup = new THREE.Group();
      cardGroup.position.copy(spherePos);
      cardGroup.lookAt(0, 0, 0);

      // Khung viền sáng bóng cân đối vừa vặn
      const frameGeo = new THREE.PlaneGeometry(6.2, 4.4);
      const frameMat = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        wireframe: false,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide
      });
      const frameMesh = new THREE.Mesh(frameGeo, frameMat);
      frameMesh.position.z = -0.05;
      cardGroup.add(frameMesh);

      // Mặt ảnh chính sắc nét
      const geo = new THREE.PlaneGeometry(5.8, 4.0);
      const texture = textureLoader.load(url);
      texture.colorSpace = THREE.SRGBColorSpace;

      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData = {
        index: i,
        spherePos: spherePos.clone(),
        sphereRot: cardGroup.rotation.clone(),
        galleryPos: galleryPos.clone(),
        cardGroup: cardGroup,
        frameMesh: frameMesh,
        isHovered: false,
      };

      cardGroup.add(mesh);
      this.group.add(cardGroup);
      this.cards.push(mesh);
    });
  }

  /**
   * Xuất hiện Quả Cầu Ảnh sau khi vượt qua Hố Đen
   */
  show() {
    this.group.visible = true;
    this.state = 'SPHERE';

    // Fade in từng bức ảnh và xoay nhẹ tạo cảm giác tráng lệ
    this.cards.forEach((card, idx) => {
      gsap.to(card.material, {
        opacity: 1,
        duration: 2.5,
        delay: idx * 0.1,
        ease: 'power2.out'
      });
      gsap.to(card.userData.frameMesh.material, {
        opacity: 0.4,
        duration: 2.5,
        delay: idx * 0.1
      });
    });
  }

  /**
   * Nội suy vị trí ảnh giữa quả cầu và danh sách ngang khi dàn trải 2 tay (SPREADING / COLLAPSING)
   * @param {number} ratio - 0.0 (Quả cầu) -> 1.0 (Gallery)
   */
  updateSpreadLayout(ratio) {
    const t = Math.max(0, Math.min(1, ratio));
    this.cards.forEach((card) => {
      if (card.userData.cardGroup.parent !== this.group) {
        this.group.attach(card.userData.cardGroup);
      }
      const sPos = card.userData.spherePos;
      const gPos = card.userData.galleryPos;
      const sRot = card.userData.sphereRot;

      // Nội suy tọa độ position
      card.userData.cardGroup.position.lerpVectors(sPos, gPos, t);

      // Nội suy rotation về Euler(0,0,0) khi t -> 1
      card.userData.cardGroup.rotation.x = sRot.x * (1 - t);
      card.userData.cardGroup.rotation.y = sRot.y * (1 - t);
      card.userData.cardGroup.rotation.z = sRot.z * (1 - t);
    });
  }

  /**
   * XÒE BÀN TAY (OPEN_PALM / 2 TAY KÉO RA): Phân giải Quả cầu thành Danh sách ảnh nổi (Floating Gallery)
   */
  disperseToGallery() {
    if (this.state === 'GALLERY') return;
    this.state = 'GALLERY';
    this.activeCard = null;

    console.log("✋ PHÂN GIẢI QUẢ CẦU: Dàn ảnh thành danh sách trôi nổi (Gallery)!");
    this.cards.forEach((card) => {
      if (card.userData.cardGroup.parent !== this.group) {
        this.group.attach(card.userData.cardGroup);
      }
      const gPos = card.userData.galleryPos;
      gsap.to(card.userData.cardGroup.position, {
        x: gPos.x,
        y: gPos.y,
        z: gPos.z,
        duration: 1.5,
        ease: 'power3.out'
      });
      gsap.to(card.userData.cardGroup.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
      gsap.to(card.userData.frameMesh.material.color, { r: 0.0, g: 1.0, b: 1.0, duration: 1.0 });
      gsap.to(card.userData.frameMesh.material, { opacity: 0.35, duration: 1.0 });
    });
  }

  /**
   * NẮM BÀN TAY (FIST / 2 TAY KÉO VÀO): Thu gọn danh sách ảnh hoặc ảnh phóng to về lại Quả Cầu xoay tròn
   */
  collapseToSphere() {
    if (this.state === 'SPHERE') return;
    this.state = 'SPHERE';
    this.activeCard = null;
    this.unhighlightAllCards();

    console.log("✊ THU GỌN ẢNH: Đưa về dạng Quả cầu 3D xoay tròn!");
    this.cards.forEach((card) => {
      if (card.userData.cardGroup.parent !== this.group) {
        this.group.attach(card.userData.cardGroup);
      }
      const sPos = card.userData.spherePos;
      const sRot = card.userData.sphereRot;
      gsap.to(card.userData.cardGroup.position, {
        x: sPos.x,
        y: sPos.y,
        z: sPos.z,
        duration: 1.5,
        ease: 'power3.out'
      });
      gsap.to(card.userData.cardGroup.rotation, {
        x: sRot.x,
        y: sRot.y,
        z: sRot.z,
        duration: 1.5,
        ease: 'power3.out'
      });
      gsap.to(card.scale, { x: 1, y: 1, z: 1, duration: 1.0 });
      gsap.to(card.userData.frameMesh.scale, { x: 1, y: 1, z: 1, duration: 1.0 });
      gsap.to(card.userData.frameMesh.material.color, { r: 0.0, g: 1.0, b: 1.0, duration: 1.0 });
      gsap.to(card.userData.frameMesh.material, { opacity: 0.4, duration: 1.0 });
    });
  }

  /**
   * HIỆU ỨNG HOVER HIGHLIGHT: Phóng to nhẹ, sáng viền vàng, và dịch về phía trước
   */
  highlightCard(cardMesh) {
    if (!cardMesh || cardMesh.userData.isHovered || this.state === 'FULLVIEW') return;
    cardMesh.userData.isHovered = true;

    gsap.to(cardMesh.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.35, ease: 'power2.out' });
    gsap.to(cardMesh.userData.frameMesh.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.35, ease: 'power2.out' });
    gsap.to(cardMesh.userData.frameMesh.material.color, { r: 1.0, g: 0.84, b: 0.0, duration: 0.3 });
    gsap.to(cardMesh.userData.frameMesh.material, { opacity: 0.85, duration: 0.3 });
  }

  /**
   * BỎ HOVER HIGHLIGHT: Trả ảnh về kích thước và màu khung bình thường
   */
  unhighlightCard(cardMesh) {
    if (!cardMesh || !cardMesh.userData.isHovered || this.state === 'FULLVIEW') return;
    cardMesh.userData.isHovered = false;

    gsap.to(cardMesh.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 0.35, ease: 'power2.out' });
    gsap.to(cardMesh.userData.frameMesh.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 0.35, ease: 'power2.out' });
    gsap.to(cardMesh.userData.frameMesh.material.color, { r: 0.0, g: 1.0, b: 1.0, duration: 0.3 });
    gsap.to(cardMesh.userData.frameMesh.material, { opacity: 0.4, duration: 0.3 });
  }

  unhighlightAllCards() {
    this.cards.forEach((c) => this.unhighlightCard(c));
    this.hoveredCard = null;
  }

  /**
   * CHỈ TAY HOVER / PINCH TO OPEN: Phóng to bức ảnh được chọn ra chính diện camera
   */
  enlargeCard(cardMesh) {
    if (this.state === 'FULLVIEW' && this.activeCard === cardMesh) return;
    this.previousState = (this.state === 'FULLVIEW') ? (this.previousState || 'SPHERE') : this.state;
    this.state = 'FULLVIEW';
    this.activeCard = cardMesh;
    this.enlargeTimestamp = performance.now();
    this.unhighlightAllCards();

    console.log(`✨ VIEW LỚN BỨC ẢNH #${cardMesh.userData.index + 1}`);

    this.showCloseButtonUI();

    // Đưa cardGroup ra khỏi quả cầu xoay, gắn vào scene ở hệ tọa độ world để không bị xoay ngược hướng
    this.scene.attach(cardMesh.userData.cardGroup);

    // Phóng lớn bức ảnh ra ngay trước camera (Camera ở 0, 12, 36 -> Đặt ảnh ở 0, 12, 24)
    gsap.to(cardMesh.userData.cardGroup.position, {
      x: 0,
      y: 12,
      z: 24, // Sát ngay chính diện trước camera, luôn quay mặt về phía người dùng
      duration: 1.2,
      ease: 'power3.out'
    });
    gsap.to(cardMesh.userData.cardGroup.rotation, {
      x: 0,
      y: 0,
      z: 0, // Luôn hướng thẳng về phía camera
      duration: 1.2,
      ease: 'power3.out'
    });
    gsap.to(cardMesh.scale, { x: 2.2, y: 2.2, z: 2.2, duration: 1.2, ease: 'power3.out' });
    gsap.to(cardMesh.userData.frameMesh.scale, { x: 2.2, y: 2.2, z: 2.2, duration: 1.2, ease: 'power3.out' });
    gsap.to(cardMesh.userData.frameMesh.material.color, { r: 1.0, g: 0.843, b: 0.0, duration: 1.0 });
    gsap.to(cardMesh.userData.frameMesh.material, { opacity: 0.8, duration: 1.0 });

    // Làm mờ các ảnh còn lại ở phía sau
    this.cards.forEach((c) => {
      if (c !== cardMesh) {
        gsap.to(c.material, { opacity: 0.2, duration: 0.8 });
      }
    });
  }

  showCloseButtonUI() {
    let btn = document.getElementById('ai-close-photo-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'ai-close-photo-btn';
      btn.innerHTML = `✕ Đóng ảnh <span style="font-size: 11px; opacity: 0.85; margin-left: 6px;">(✊ Nắm tay / ✋ Xòe / ESC)</span>`;
      Object.assign(btn.style, {
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '10000',
        background: 'rgba(255, 60, 60, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '30px',
        padding: '12px 32px',
        color: '#ffffff',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '15px',
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(255, 0, 0, 0.4), 0 0 20px rgba(255, 255, 0.2)',
        transition: 'all 0.4s ease',
        opacity: '0'
      });
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeFullView();
      });
      document.body.appendChild(btn);
    }
    btn.style.display = 'inline-block';
    requestAnimationFrame(() => {
      btn.style.opacity = '1';
    });
  }

  hideCloseButtonUI() {
    const btn = document.getElementById('ai-close-photo-btn');
    if (btn) {
      btn.style.opacity = '0';
      setTimeout(() => {
        if (btn) btn.style.display = 'none';
      }, 300);
    }
  }

  /**
   * HỦY / ĐÓNG XEM ẢNH: Trở về chế độ trước đó (SPHERE hoặc GALLERY)
   * Tích hợp thời gian bảo vệ 500ms tránh đóng nhầm ngay sau khi mở
   */
  closeFullView() {
    if (this.state !== 'FULLVIEW' || !this.activeCard) return;

    // Bảo vệ tối thiểu 500ms sau khi mở ảnh
    if (performance.now() - (this.enlargeTimestamp || 0) < 500) {
      return;
    }

    console.log("❌ HỦY XEM ẢNH: Trở về trạng thái trước đó.");
    this.hideCloseButtonUI();

    const targetState = (this.previousState === 'FULLVIEW') ? 'SPHERE' : (this.previousState || 'SPHERE');
    const active = this.activeCard;
    if (active.userData.cardGroup.parent !== this.group) {
      this.group.attach(active.userData.cardGroup);
    }
    const pos = targetState === 'GALLERY' ? active.userData.galleryPos : active.userData.spherePos;
    const rot = targetState === 'GALLERY' ? new THREE.Euler(0, 0, 0) : active.userData.sphereRot;

    gsap.to(active.userData.cardGroup.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: 1.2,
      ease: 'power3.out'
    });
    gsap.to(active.userData.cardGroup.rotation, {
      x: rot.x,
      y: rot.y,
      z: rot.z,
      duration: 1.2,
      ease: 'power3.out'
    });
    gsap.to(active.scale, { x: 1, y: 1, z: 1, duration: 1.0, ease: 'power3.out' });
    gsap.to(active.userData.frameMesh.scale, { x: 1, y: 1, z: 1, duration: 1.0, ease: 'power3.out' });
    gsap.to(active.userData.frameMesh.material.color, { r: 0.0, g: 1.0, b: 1.0, duration: 1.0 });
    gsap.to(active.userData.frameMesh.material, { opacity: targetState === 'GALLERY' ? 0.35 : 0.4, duration: 1.0 });

    // Khôi phục độ sáng của tất cả các ảnh khác
    this.cards.forEach((c) => {
      gsap.to(c.material, { opacity: 1.0, duration: 0.8 });
    });

    this.state = targetState;
    this.activeCard = null;
    this.hoveredCard = null;
    this.closeHoverStartTime = null;
  }

  /**
   * Xử lý action từ StateMachine (Kiến trúc mới ổn định)
   */
  handleAction(stateResult, onDwellRatio) {
    if (!this.group.visible || !stateResult) return;
    const { action, params } = stateResult;

    const timestamp = performance.now();

    // 1. DÀN TRẢI HOẶC THU GỌN ẢNH BẰNG 2 TAY
    if (action === 'SPREAD_MOVE' || action === 'COLLAPSE_MOVE') {
      if (params && params.spreadRatio !== undefined) {
        this.updateSpreadLayout(params.spreadRatio);
      }
      return;
    }
    if (action === 'SPREAD_COMMIT') {
      this.disperseToGallery();
      return;
    }
    if (action === 'COLLAPSE_COMMIT') {
      this.collapseToSphere();
      return;
    }

    // 2. TRỞ VỀ HOẶC ĐÓNG ẢNH
    if (action === 'CLOSE_IMAGE' || action === 'RESET_ALL') {
      if (this.state === 'FULLVIEW') {
        this.closeFullView();
      } else if (action === 'RESET_ALL' && this.state !== 'SPHERE') {
        this.collapseToSphere();
      }
      return;
    }

    // 3. HOVER / TRỎ ẢNH (POINTING)
    if (action === 'HOVER_CARD') {
      if (this.state === 'FULLVIEW') return;
      const cursorX = params.cursorX !== undefined ? params.cursorX : 0.5;
      const cursorY = params.cursorY !== undefined ? params.cursorY : 0.5;

      this.mouse2D.x = (cursorX * 2) - 1;
      this.mouse2D.y = -(cursorY * 2) + 1;

      this.raycaster.setFromCamera(this.mouse2D, this.camera);
      const intersects = this.raycaster.intersectObjects(this.cards);

      if (intersects.length > 0) {
        const hitCard = intersects[0].object;
        this.lastHoverSeenTime = timestamp;

        if (this.hoveredCard !== hitCard) {
          if (this.hoveredCard) this.unhighlightCard(this.hoveredCard);
          this.hoveredCard = hitCard;
          this.hoverStartTime = timestamp;
          this.highlightCard(hitCard);
        } else {
          // Tính tiến trình dwell 1s để tự động mở ảnh (hoặc dùng Pinch để mở ngay)
          const elapsed = (timestamp - this.hoverStartTime) / 1000.0;
          const ratio = Math.min(1.0, elapsed / 1.0);
          if (onDwellRatio) onDwellRatio(ratio);

          if (ratio >= 1.0) {
            this.enlargeCard(hitCard);
            if (onDwellRatio) onDwellRatio(0);
          }
        }
      } else {
        // Tolerence 150ms: Không mất hover ngay lập tức nếu tia raycast lệch nhẹ trong 1-2 frames
        if (this.hoveredCard && timestamp - this.lastHoverSeenTime > 150) {
          this.unhighlightCard(this.hoveredCard);
          this.hoveredCard = null;
          if (onDwellRatio) onDwellRatio(0);
        }
      }
      return;
    }

    // 4. MỞ ẢNH CHỌN (SELECT_CARD - Pinch to open khi đang hover)
    if (action === 'SELECT_CARD') {
      if (this.hoveredCard && this.state !== 'FULLVIEW') {
        this.enlargeCard(this.hoveredCard);
      }
      return;
    }
  }

  /**
   * Xử lý cử chỉ tay (Wrapper tương thích ngược & hỗ trợ chuột/phím)
   */
  handleHandGesture(gesture, cursorX, cursorY, dx, dy, onDwellRatio, zoomDelta = 0) {
    if (!this.group.visible) return;

    // 1. Chế độ xem ảnh lớn
    if (this.state === 'FULLVIEW') {
      if (gesture === 'FIST' || gesture === 'OPEN_PALM') {
        this.closeFullView();
        return;
      }
      return;
    }

    // 2. Chuyển đổi trạng thái SPHERE / GALLERY
    if (gesture === 'OPEN_PALM' && this.state === 'SPHERE') {
      this.disperseToGallery();
      return;
    }
    if (gesture === 'FIST' && this.state === 'GALLERY') {
      this.collapseToSphere();
      return;
    }

    // 3. Xoay bằng chuột / thao tác trực tiếp
    if (this.state === 'SPHERE' && gesture === 'PINCH_GRAB') {
      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
        this.group.rotation.y += dx * 4.5;
        this.group.rotation.x = Math.max(-0.6, Math.min(0.6, this.group.rotation.x + dy * 3.0));
      }
    }

    // 4. Cuộn ngang Gallery
    if (this.state === 'GALLERY' && (gesture === 'PINCH_GRAB' || gesture === 'POINTING')) {
      if (Math.abs(dx) > 0.001) {
        this.targetScrollX -= dx * 65.0;
      }
    }

    // 5. Trỏ ảnh và hover
    if (gesture === 'POINTING' && (this.state === 'SPHERE' || this.state === 'GALLERY')) {
      this.handleAction({
        action: 'HOVER_CARD',
        params: { cursorX, cursorY }
      }, onDwellRatio);
    } else {
      if (this.hoveredCard) {
        this.unhighlightAllCards();
        if (onDwellRatio) onDwellRatio(0);
      }
    }
  }

  /**
   * Vòng lặp cập nhật mỗi frame
   */
  update(delta) {
    if (!this.group.visible) return;

    // 1. Xoay tròn quả cầu liên tục tự động nếu ở trạng thái SPHERE và không có thao tác giữ
    if (this.state === 'SPHERE') {
      this.group.rotation.y += delta * 0.12; // Xoay tự nhiên mượt mà
    }

    // 2. Lướt cuộn mượt mà (lerp) danh sách ảnh nếu ở trạng thái GALLERY
    if (this.state === 'GALLERY') {
      this.galleryScrollX += (this.targetScrollX - this.galleryScrollX) * 0.1;
      this.group.position.x = this.galleryScrollX;
    } else {
      this.group.position.x += (0 - this.group.position.x) * 0.1;
    }
  }
}
