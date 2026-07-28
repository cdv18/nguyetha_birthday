import { clamp, applyDeadZone } from './filters.js';

/**
 * SphereController - Điều khiển xoay, quán tính và zoom Quả cầu 3D.
 * Tách biệt hoàn toàn logic điều khiển vật lý ra khỏi PhotoSphere,
 * giải quyết lỗi dừng cứng khi thả tay và hiện tượng giật do GSAP spam zoom.
 */
export class SphereController {
  constructor(config, group, camera) {
    this.config = config.sphere || {};
    this.group = group;
    this.camera = camera;

    // Trạng thái xoay và quán tính
    this.isRotating = false;
    this.lastDX = 0;
    this.lastDY = 0;
    this.inertiaVX = 0;
    this.inertiaVY = 0;

    // Trạng thái zoom mượt (lerp thay vì GSAP spam)
    this.targetCameraZ = camera ? camera.position.z : 36;
    this.lastPinchDist = null;
    this.lastPalmSize = null;
  }

  /**
   * Bắt đầu thao tác xoay quả cầu
   */
  startRotation() {
    this.isRotating = true;
    this.inertiaVX = 0;
    this.inertiaVY = 0;
  }

  /**
   * Cập nhật góc xoay khi đang nắm tay kéo
   */
  updateRotation(dx, dy) {
    if (!this.group) return;

    const deadZone = this.config.rotationDeadZone || 0.005;
    const cleanDX = applyDeadZone(dx, deadZone);
    const cleanDY = applyDeadZone(dy, deadZone);

    const sensitivity = this.config.rotationSensitivity || 3.5;
    const rotYDelta = cleanDX * sensitivity;
    const rotXDelta = cleanDY * sensitivity * 0.7; // Xoay dọc nhẹ hơn xoay ngang

    this.group.rotation.y += rotYDelta;
    this.group.rotation.x += rotXDelta;

    // Giới hạn góc xoay trục X để không bị lật ngược quả cầu
    const maxX = this.config.maxRotationX || 0.7;
    this.group.rotation.x = clamp(this.group.rotation.x, -maxX, maxX);

    this.lastDX = rotYDelta;
    this.lastDY = rotXDelta;
  }

  /**
   * Kết thúc xoay tay -> chuyển sang quán tính (Inertia)
   */
  endRotation() {
    this.isRotating = false;
    // Gán vận tốc quán tính bằng chuyển động cuối cùng
    this.inertiaVX = this.lastDX;
    this.inertiaVY = this.lastDY;
  }

  /**
   * Cập nhật zoom camera dựa trên khoảng cách bàn tay tới camera (tay gần = zoom to, tay xa = zoom nhỏ)
   */
  applyProximityZoom(palmSize) {
    if (palmSize === null || palmSize === undefined || isNaN(palmSize)) {
      this.lastPalmSize = null;
      return;
    }

    if (this.lastPalmSize === null) {
      this.lastPalmSize = palmSize;
      return;
    }

    const dPalm = palmSize - this.lastPalmSize;
    const deadZone = this.config.zoomDeadZone || 0.002;

    if (Math.abs(dPalm) > deadZone) {
      const sensitivity = this.config.proximityZoomSensitivity || 150.0;
      // Đưa tay GẦN camera -> palmSize TĂNG (dPalm > 0) -> Zoom to quả cầu (camera Z GIẢM)
      // Đưa tay RA XA camera -> palmSize GIẢM (dPalm < 0) -> Zoom nhỏ quả cầu (camera Z TĂNG)
      const zoomDelta = -dPalm * sensitivity;
      this.targetCameraZ += zoomDelta;

      const zMin = this.config.zoomMin || 18;
      const zMax = this.config.zoomMax || 52;
      this.targetCameraZ = clamp(this.targetCameraZ, zMin, zMax);
    }

    this.lastPalmSize = palmSize;
  }

  /**
   * Cập nhật zoom camera dựa trên thay đổi khoảng cách pinch
   */
  applyPinchZoom(pinchDist) {
    if (pinchDist === null || pinchDist === undefined) {
      this.lastPinchDist = null;
      return;
    }

    if (this.lastPinchDist === null) {
      this.lastPinchDist = pinchDist;
      return;
    }

    const dPinch = pinchDist - this.lastPinchDist;
    const deadZone = this.config.zoomDeadZone || 0.01;

    if (Math.abs(dPinch) > deadZone) {
      const sensitivity = this.config.zoomSensitivity || 2.5;
      // Kéo ra xa (pinchDist tăng) -> zoom in (Z giảm)
      const zoomDelta = -dPinch * 40.0 * sensitivity;
      this.targetCameraZ += zoomDelta;

      const zMin = this.config.zoomMin || 18;
      const zMax = this.config.zoomMax || 52;
      this.targetCameraZ = clamp(this.targetCameraZ, zMin, zMax);
    }

    this.lastPinchDist = pinchDist;
  }

  /**
   * Cập nhật mỗi frame: xử lý suy giảm quán tính và lerp camera zoom
   */
  update() {
    if (!this.group || !this.camera) return;

    // 1. Quán tính xoay (khi không giữ tay xoay)
    if (!this.isRotating) {
      const decay = this.config.inertiaDecay || 0.92;
      const minInertia = this.config.minInertia || 0.001;

      if (Math.abs(this.inertiaVX) > minInertia || Math.abs(this.inertiaVY) > minInertia) {
        this.group.rotation.y += this.inertiaVX;
        this.group.rotation.x += this.inertiaVY;

        const maxX = this.config.maxRotationX || 0.7;
        this.group.rotation.x = clamp(this.group.rotation.x, -maxX, maxX);

        this.inertiaVX *= decay;
        this.inertiaVY *= decay;
      } else {
        this.inertiaVX = 0;
        this.inertiaVY = 0;
      }
    }

    // 2. Nội suy vị trí camera Z (lerp mượt, không tạo tween spam)
    const lerpFactor = this.config.zoomLerp || 0.12;
    this.camera.position.z += (this.targetCameraZ - this.camera.position.z) * lerpFactor;
  }

  /**
   * Lắng nghe các action từ StateMachine
   */
  handleAction(stateResult) {
    if (!stateResult) return;
    const { action, params } = stateResult;

    switch (action) {
      case 'ROTATE_START':
        this.startRotation();
        break;

      case 'ROTATE_MOVE':
        if (params) {
          this.updateRotation(params.dx || 0, params.dy || 0);
        }
        break;

      case 'ROTATE_END':
        this.endRotation();
        break;

      case 'RESET_ALL':
        this.reset();
        break;

      default:
        break;
    }

    // Ưu tiên zoom theo khoảng cách bàn tay tới camera (tay gần = zoom to, tay xa = zoom nhỏ)
    if (params && params.palmSize !== undefined) {
      this.applyProximityZoom(params.palmSize);
    } else if (params && params.pinchDist !== undefined) {
      this.applyPinchZoom(params.pinchDist);
    } else {
      this.lastPalmSize = null;
      this.lastPinchDist = null;
    }
  }

  /**
   * Reset quả cầu và camera về mặc định
   */
  reset() {
    this.isRotating = false;
    this.inertiaVX = 0;
    this.inertiaVY = 0;
    this.lastPinchDist = null;
    this.lastPalmSize = null;
    this.targetCameraZ = 36;

    if (this.group) {
      this.group.rotation.set(0, 0, 0);
    }
    if (this.camera) {
      this.camera.position.set(0, 12, 36);
    }
  }
}
