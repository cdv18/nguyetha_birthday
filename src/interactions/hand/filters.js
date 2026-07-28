/**
 * Các bộ lọc tín hiệu và hàm tiện ích xử lý chống rung cho landmark và con trỏ.
 * Sử dụng One Euro Filter để lọc adaptive (mượt khi đứng yên, nhạy khi chuyển động).
 */

export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function lerp(a, b, t) {
  return a + (b - a) * clamp(t, 0, 1);
}

export function applyDeadZone(value, threshold) {
  if (Math.abs(value) < threshold) return 0;
  return value > 0 ? value - threshold : value + threshold;
}

export function distance2D(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function distance3D(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = (a.z || 0) - (b.z || 0);
  return Math.hypot(dx, dy, dz);
}

/**
 * One Euro Filter - Bộ lọc thông thấp thích ứng (Adaptive Low-Pass Filter)
 * Tham khảo: http://www.lifl.fr/~casiez/1euro/
 */
export class OneEuroFilter {
  constructor(minCutoff = 1.0, beta = 0.007, dCutoff = 1.0) {
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;
    this.xPrev = null;
    this.dxPrev = 0;
    this.tPrev = null;
  }

  smoothingFactor(te, cutoff) {
    const r = 2 * Math.PI * cutoff * te;
    return r / (r + 1);
  }

  filter(x, timestamp) {
    if (this.tPrev === null || this.xPrev === null) {
      this.xPrev = x;
      this.dxPrev = 0;
      this.tPrev = timestamp;
      return x;
    }

    // Thời gian trôi qua giữa 2 frames (tính bằng giây)
    const te = Math.max((timestamp - this.tPrev) / 1000.0, 1e-4);

    // Đạo hàm vận tốc tức thời
    const dx = (x - this.xPrev) / te;
    const alphaD = this.smoothingFactor(te, this.dCutoff);
    const edx = alphaD * dx + (1 - alphaD) * this.dxPrev;

    // Tính tần số cắt thích ứng theo độ lớn vận tốc
    const cutoff = this.minCutoff + this.beta * Math.abs(edx);
    const alpha = this.smoothingFactor(te, cutoff);
    const xHat = alpha * x + (1 - alpha) * this.xPrev;

    this.xPrev = xHat;
    this.dxPrev = edx;
    this.tPrev = timestamp;

    return xHat;
  }

  reset() {
    this.xPrev = null;
    this.dxPrev = 0;
    this.tPrev = null;
  }
}

/**
 * LandmarkSmoother - Lọc mịn toàn bộ 21 điểm landmarks của bàn tay (X, Y, Z)
 */
export class LandmarkSmoother {
  constructor(config) {
    this.config = config || { minCutoff: 1.0, beta: 0.007, dCutoff: 1.0 };
    // 21 landmarks * 3 trục (x, y, z)
    this.filters = [];
    for (let i = 0; i < 21 * 3; i++) {
      this.filters.push(
        new OneEuroFilter(this.config.minCutoff, this.config.beta, this.config.dCutoff)
      );
    }
  }

  smooth(landmarks, timestamp) {
    if (!landmarks || !Array.isArray(landmarks)) return landmarks;

    return landmarks.map((lm, i) => {
      const idx = i * 3;
      return {
        x: this.filters[idx].filter(lm.x, timestamp),
        y: this.filters[idx + 1].filter(lm.y, timestamp),
        z: this.filters[idx + 2].filter(lm.z || 0, timestamp),
      };
    });
  }

  reset() {
    for (let i = 0; i < this.filters.length; i++) {
      this.filters[i].reset();
    }
  }
}
