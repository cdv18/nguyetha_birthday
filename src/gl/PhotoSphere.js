import * as THREE from 'three';
import gsap from 'gsap';

// Tự động import tất cả hình ảnh trong folder /src/assets/nh/
const photoUrlsMap = import.meta.glob('/src/assets/nh/*', { eager: true, query: '?url', import: 'default' });
const photoUrls = Object.values(photoUrlsMap);

/**
 * PHOTO SPHERE & HOLOGRAPHIC GESTURE GALLERY
 * Quả cầu 3D Kỷ niệm Nguyệt Hà & Trình diễn ảnh Holographic điều khiển bằng cử chỉ tay
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
    this.state = 'SPHERE'; // 'SPHERE', 'GALLERY', 'FULLVIEW'
    this.previousState = 'SPHERE';
    this.activeCard = null;
    this.hoveredCard = null;
    this.hoverStartTime = 0;
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
    const radius = 22; // Bán kính quả cầu ảnh 3D lớn hơn, hoành tráng hơn
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
      const spacing = 11.5;
      const galleryX = (i - (count - 1) / 2) * spacing;
      const galleryPos = new THREE.Vector3(galleryX, 0, 15); // Gần camera hơn

      // 3. Tạo Mesh thẻ ảnh với khung sáng kim loại điện ảnh
      const cardGroup = new THREE.Group();
      cardGroup.position.copy(spherePos);
      cardGroup.lookAt(0, 0, 0);

      // Khung viền sáng bóng lớn hơn
      const frameGeo = new THREE.PlaneGeometry(9.6, 6.8);
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

      // Mặt ảnh chính lớn hơn
      const geo = new THREE.PlaneGeometry(9.2, 6.4);
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
        frameMesh: frameMesh
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
   * XÒE BÀN TAY (OPEN_PALM): Phân giải Quả cầu thành Danh sách ảnh nổi (Floating Gallery)
   */
  disperseToGallery() {
    if (this.state === 'GALLERY') return;
    this.state = 'GALLERY';
    this.activeCard = null;

    console.log("✋ XÒE TAY: Phân giải quả cầu ảnh thành danh sách trôi nổi!");
    this.cards.forEach((card, idx) => {
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
   * NẤM BÀN TAY (FIST): Thu gọn danh sách ảnh hoặc ảnh phóng to về lại Quả Cầu xoay tròn
   */
  collapseToSphere() {
    if (this.state === 'SPHERE') return;
    this.state = 'SPHERE';
    this.activeCard = null;
    this.hoveredCard = null;

    console.log("✊ NẤM TAY: Thu gọn ảnh về dạng quả cầu xoay tròn!");
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
   * CHỈ TAY HOVER 1s: Phóng to bức ảnh được chọn ra chính diện camera
   */
  enlargeCard(cardMesh) {
    if (this.state === 'FULLVIEW' && this.activeCard === cardMesh) return;
    this.previousState = (this.state === 'FULLVIEW') ? (this.previousState || 'SPHERE') : this.state;
    this.state = 'FULLVIEW';
    this.activeCard = cardMesh;
    this.enlargeTimestamp = performance.now();

    console.log(`✨ VIEW LỚN BỨC ẢNH #${cardMesh.userData.index + 1} (Chỉ tay Hover 1s)`);

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
        boxShadow: '0 10px 30px rgba(255, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)',
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
   */
  closeFullView() {
    if (this.state !== 'FULLVIEW' || !this.activeCard) return;

    console.log("❌ HỦY XEM ẢNH: Trở về trạng thái trước đó.");
    this.hideCloseButtonUI();

    const targetState = this.previousState || 'SPHERE';
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
   * ZOOM VÀ DI CHUYỂN CAMERA THEO VỊ TRÍ CON TRỎ (CHUỘT HOẶC CỬ CHỈ MỞ/CHỤM NGÓN TRỎ & CÁI)
   */
  zoomAtCursor(cursorX, cursorY, zoomDelta) {
    if (!this.group.visible || this.state === 'FULLVIEW') return;

    // Chuyển từ tọa độ cursor (0 -> 1) sang NDC (-1 -> 1)
    this.mouse2D.x = (cursorX * 2) - 1;
    this.mouse2D.y = -(cursorY * 2) + 1;

    this.raycaster.setFromCamera(this.mouse2D, this.camera);
    const rayDir = this.raycaster.ray.direction.clone().normalize();

    const targetPos = this.camera.position.clone();
    if (zoomDelta > 0) {
      // Phóng to (Zoom In / Mở 2 ngón tay / Cuộn chuột lên): kéo camera lại gần điểm đang trỏ
      const step = Math.min(3.5, zoomDelta * 2.2);
      targetPos.addScaledVector(rayDir, step);
    } else if (zoomDelta < 0) {
      // Thu nhỏ (Zoom Out / Chụm 2 ngón tay / Cuộn chuột xuống): kéo camera ra xa
      const step = Math.min(3.5, Math.abs(zoomDelta) * 2.2);
      targetPos.addScaledVector(rayDir, -step);
      // Hướng nhẹ x, y về lại tâm (0, 12) khi lùi ra xa
      targetPos.x *= 0.9;
      targetPos.y = 12 + (targetPos.y - 12) * 0.9;
    }

    // Giới hạn Z trong khoảng an toàn (z min = 15 để không xuyên qua ảnh, z max = 48)
    targetPos.z = Math.max(15, Math.min(48, targetPos.z));
    targetPos.x = Math.max(-18, Math.min(18, targetPos.x));
    targetPos.y = Math.max(0, Math.min(24, targetPos.y));

    gsap.to(this.camera.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: 0.4,
      ease: 'power2.out'
    });
  }

  /**
   * Xử lý tương tác ngón tay với Quả cầu hoặc Gallery ảnh
   * @param {string} gesture - 'POINTING', 'OPEN_PALM', 'FIST'
   * @param {number} cursorX - Tọa độ X chuẩn hóa (0 -> 1)
   * @param {number} cursorY - Tọa độ Y chuẩn hóa (0 -> 1)
   * @param {number} dx - Tốc độ di chuyển X
   * @param {number} dy - Tốc độ di chuyển Y
   * @param {Function} onDwellRatio - Callback báo tỷ lệ tiến trình chỉ tay 1s (0 -> 1)
   * @param {number} zoomDelta - Lượng phóng to / thu nhỏ (> 0: phóng to, < 0: thu nhỏ)
   */
  handleHandGesture(gesture, cursorX, cursorY, dx, dy, onDwellRatio, zoomDelta = 0) {
    if (!this.group.visible) return;

    // Xử lý zoom camera theo vị trí trỏ chuột / ngón tay khi cuộn chuột hoặc mở/chụm ngón tay
    if (Math.abs(zoomDelta) > 0.001) {
      this.zoomAtCursor(cursorX, cursorY, zoomDelta);
    }

    // 1. Nếu đang xem ảnh lớn (FULLVIEW): có thể hủy/đóng xem ảnh bằng Nắm tay, Xòe tay, hoặc Chỉ tay 1s
    if (this.state === 'FULLVIEW') {
      if (gesture === 'FIST' || gesture === 'OPEN_PALM') {
        this.closeFullView();
        return;
      }
      if (gesture === 'POINTING') {
        if (!this.closeHoverStartTime) {
          this.closeHoverStartTime = performance.now();
        }
        const elapsed = (performance.now() - this.closeHoverStartTime) / 1000.0;
        const ratio = Math.min(1.0, elapsed / 1.0); // 1.0s Dwell hủy ảnh
        if (onDwellRatio) onDwellRatio(ratio);

        if (ratio >= 1.0) {
          this.closeFullView();
          if (onDwellRatio) onDwellRatio(0);
        }
        return;
      } else {
        if (this.closeHoverStartTime) {
          this.closeHoverStartTime = null;
          if (onDwellRatio) onDwellRatio(0);
        }
      }
      return;
    }

    // 2. Chuyển đổi trạng thái dựa vào cử chỉ xòe tay / nắm tay ở chế độ SPHERE hoặc GALLERY
    if (gesture === 'OPEN_PALM' && this.state === 'SPHERE') {
      this.disperseToGallery();
      return;
    }
    if (gesture === 'FIST' && this.state === 'GALLERY') {
      this.collapseToSphere();
      return;
    }

    // 3. CHỤM 5 NGÓN TAY (PINCH_GRAB / HOẶC CLICK GIỮ CHUỘT): Kéo xoay quả cầu khi ở trạng thái SPHERE
    if (this.state === 'SPHERE' && gesture === 'PINCH_GRAB') {
      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
        this.group.rotation.y += dx * 4.5; // Nhạy và xoay mượt theo hướng kéo
        this.group.rotation.x = Math.max(-0.6, Math.min(0.6, this.group.rotation.x + dy * 3.0));
      }
    }

    // 4. Kéo cuộn danh sách ảnh (Drag scrolling) khi ở trạng thái GALLERY
    if (this.state === 'GALLERY' && (gesture === 'PINCH_GRAB' || gesture === 'POINTING')) {
      if (Math.abs(dx) > 0.001) {
        this.targetScrollX -= dx * 65.0; // Kéo ảnh sang trái/phải theo cử chỉ ngón tay
      }
    }

    // 5. CHỈ NGÓN TAY: Kiểm tra (Raycast) vào bức ảnh nào để kích hoạt Dwell 1 GIÂY (1.0s)
    if (gesture === 'POINTING' && (this.state === 'SPHERE' || this.state === 'GALLERY')) {
      this.mouse2D.x = (cursorX * 2) - 1;
      this.mouse2D.y = -(cursorY * 2) + 1;

      this.raycaster.setFromCamera(this.mouse2D, this.camera);
      const intersects = this.raycaster.intersectObjects(this.cards);

      if (intersects.length > 0) {
        const hitCard = intersects[0].object;
        if (this.hoveredCard !== hitCard) {
          this.hoveredCard = hitCard;
          this.hoverStartTime = performance.now();
        } else {
          // Tính thời gian hover (chỉ tay vào ảnh): 1.0 giây (1s)
          const elapsed = (performance.now() - this.hoverStartTime) / 1000.0;
          const ratio = Math.min(1.0, elapsed / 1.0); // 1.0 giây thay vì 2 giây
          if (onDwellRatio) onDwellRatio(ratio);

          if (ratio >= 1.0) {
            this.enlargeCard(hitCard);
            this.hoveredCard = null;
            if (onDwellRatio) onDwellRatio(0);
          }
        }
      } else {
        if (this.hoveredCard) {
          this.hoveredCard = null;
          if (onDwellRatio) onDwellRatio(0);
        }
      }
    } else {
      if (this.hoveredCard) {
        this.hoveredCard = null;
        if (onDwellRatio) onDwellRatio(0);
      }
    }
  }

  /**
   * Vòng lặp cập nhật mỗi frame
   */
  update(delta) {
    if (!this.group.visible) return;

    // 1. Xoay tròn quả cầu liên tục tự động nếu ở trạng thái SPHERE
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
