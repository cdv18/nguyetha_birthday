// ==========================================
// MODERN CINEMATIC AUDIO MANAGER (WEB AUDIO API)
// Đạo diễn & Phối âm điện ảnh hiện đại cho Sinh nhật Nguyệt Hà
// Phong cách: Cinematic Film Score, Warm Analog Pads, Camera Whooshes ("Âm vù vù như lao tới"), KHÔNG tiếng chuông/vang chói tai hoài cổ
// ==========================================

export class CinematicAudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.compressor = null;
    this.reverbBus = null;
    this.reverbGain = null;

    // State tracks
    this.isStarted = false;
    this.currentScene = 'none';

    // Ambient references
    this.spacePadNodes = [];
    this.spacePadGain = null;
    this.atmosphereGain = null;
    this.atmosphereNode = null;

    // Ink wash references
    this.inkWashGain = null;
    this.inkWashNodes = [];
    this.diveWhooshNode = null;
    this.diveWhooshGain = null;

    // Dawn references
    this.dawnGain = null;
    this.yearCountInterval = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master Compressor - configured for modern warm cinematic headroom
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(30, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(4, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.005, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.88, this.ctx.currentTime);

      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      // Setup Dark/Warm Cinematic Reverb Bus (Low-pass filtered at 1600Hz so reverb is never harsh/metallic)
      this.setupReverbBus();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setupReverbBus() {
    this.reverbBus = this.ctx.createGain();
    this.reverbGain = this.ctx.createGain();
    this.reverbGain.gain.setValueAtTime(0.40, this.ctx.currentTime);

    const delayL = this.ctx.createDelay();
    const delayR = this.ctx.createDelay();
    delayL.delayTime.setValueAtTime(0.28, this.ctx.currentTime);
    delayR.delayTime.setValueAtTime(0.42, this.ctx.currentTime);

    const feedback = this.ctx.createGain();
    feedback.gain.setValueAtTime(0.35, this.ctx.currentTime);

    // Dark cinematic filter - cuts off high shrill frequencies
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, this.ctx.currentTime);

    this.reverbBus.connect(delayL);
    this.reverbBus.connect(delayR);
    delayL.connect(filter);
    delayR.connect(filter);
    filter.connect(feedback);
    feedback.connect(delayL);
    feedback.connect(delayR);

    delayL.connect(this.reverbGain);
    delayR.connect(this.reverbGain);
    this.reverbGain.connect(this.compressor);
  }

  start() {
    this.initContext();
    if (this.isStarted) return;
    this.isStarted = true;
    this.currentScene = 'space';

    // Start Act 1 & 2: Warm Ethereal Space Pad + Deep Sub Atmosphere
    this.startSpaceAmbient();
    this.startDeepAtmosphere();
  }

  // ==========================================
  // CAMERA WHOOSHES ("ÂM VÙ VÙ NHƯ LAO TỚI")
  // ==========================================

  /**
   * Tạo âm thanh "vù vù như lao tới" mỗi khi camera di chuyển, phóng gần hoặc lao nhanh vào không gian
   * Kết hợp Doppler sub-bass glide + lowpass air rush, hoàn toàn êm tai và hiện đại
   */
  playCameraWhoosh(duration = 2.5, intensity = 1.0, direction = 'approach') {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // 1. Air Rush Whoosh (Filtered Pink Noise with Doppler sweep)
    const noise = this.createNoiseBuffer('pink', duration);
    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noise;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.4;

    if (direction === 'approach') {
      // Âm vù vù vút lại gần: Filter mở từ trầm (140Hz) dâng lên (850Hz) rồi hạ xuống (220Hz)
      filter.frequency.setValueAtTime(140, now);
      filter.frequency.exponentialRampToValueAtTime(850, now + duration * 0.55);
      filter.frequency.exponentialRampToValueAtTime(220, now + duration);
    } else {
      // Âm vù vù lướt đi
      filter.frequency.setValueAtTime(700, now);
      filter.frequency.exponentialRampToValueAtTime(150, now + duration);
    }

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.38 * intensity, now + duration * 0.5);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.compressor);
    noiseGain.connect(this.reverbBus);
    noiseSource.start(now);

    // 2. Sub-Bass Doppler Engine Glide (Cảm giác vật lý khi camera lao trong không gian)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';

    if (direction === 'approach') {
      subOsc.frequency.setValueAtTime(50, now);
      subOsc.frequency.exponentialRampToValueAtTime(88, now + duration * 0.6);
      subOsc.frequency.exponentialRampToValueAtTime(42, now + duration);
    } else {
      subOsc.frequency.setValueAtTime(80, now);
      subOsc.frequency.exponentialRampToValueAtTime(38, now + duration);
    }

    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.45 * intensity, now + duration * 0.45);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    subOsc.connect(subGain);
    subGain.connect(this.compressor);
    subOsc.start(now);
    subOsc.stop(now + duration + 0.1);
  }

  playWarpWhoosh() {
    this.initContext();
    const now = this.ctx.currentTime;

    // Deep Sub-bass Drop + Powerful Warp Approach Whoosh ("vù vù lao tới")
    this.playCameraWhoosh(3.2, 1.2, 'approach');

    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(140, now);
    subOsc.frequency.exponentialRampToValueAtTime(32, now + 3.0);

    subGain.gain.setValueAtTime(0, now);
    subGain.gain.linearRampToValueAtTime(0.65, now + 0.3);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

    subOsc.connect(subGain);
    subGain.connect(this.compressor);
    subOsc.start(now);
    subOsc.stop(now + 3.1);
  }

  playStarClickGlow() {
    this.initContext();
    const now = this.ctx.currentTime;
    // Âm vù vù nhẹ + hợp âm mở màn khi bấm vào vì sao (1.8s trước khi camera lao tới mặt trăng)
    this.playCameraWhoosh(1.8, 0.65, 'approach');
    this.playCinematicRhodes([146.83, 220.00, 329.63], now, 0.28, 3.5);
  }

  /**
   * Cú máy kéo từ xa vào sát mặt trăng trong 6 giây (warpSpeed):
   * Âm vù vù như lao tới sát mặt trăng (Doppler air rush 6.0s + sub-bass glide)
   */
  playMoonApproachWhoosh() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const duration = 6.0;

    // 1. Air Rush Whoosh (Filtered Pink Noise with Doppler sweep)
    const noise = this.createNoiseBuffer('pink', duration);
    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noise;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.6;

    // Filter mở dần từ 120Hz dâng lên 980Hz tại giây thứ 3.8 (lúc camera lao sát mặt trăng nhất) rồi hạ êm
    filter.frequency.setValueAtTime(120, now);
    filter.frequency.exponentialRampToValueAtTime(980, now + 3.8);
    filter.frequency.exponentialRampToValueAtTime(250, now + duration);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.42, now + 3.5);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.compressor);
    noiseGain.connect(this.reverbBus);
    noiseSource.start(now);

    // 2. Sub-Bass Space Glide (Lực đẩy vật lý khi lao trong không gian)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(42, now);
    subOsc.frequency.exponentialRampToValueAtTime(92, now + 3.8);
    subOsc.frequency.exponentialRampToValueAtTime(48, now + duration);

    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.50, now + 3.2);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    subOsc.connect(subGain);
    subGain.connect(this.compressor);
    subOsc.start(now);
    subOsc.stop(now + duration + 0.1);
  }

  // ==========================================
  // ACT 1 & 2: SPACE PAD, PIANO CHORDS, WHOOSHES
  // ==========================================

  startSpaceAmbient() {
    const now = this.ctx.currentTime;
    this.spacePadGain = this.ctx.createGain();
    this.spacePadGain.gain.setValueAtTime(0.001, now);
    this.spacePadGain.gain.linearRampToValueAtTime(0.24, now + 4.0);

    // Warm, dark low-pass filter for modern film-score pad (no harsh treble)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(580, now);

    // Slow LFO for organic pad breathing
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.07; // ~14s cycle
    lfoGain.gain.value = 160;
    lfo.connect(filter.frequency);
    lfo.start(now);

    // Lush Dmaj9 warm analog chord (D3, F#3, A3, C#4, E4)
    const freqs = [146.83, 185.00, 220.00, 277.18, 329.63];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.value = freq + (Math.random() - 0.5) * 0.7; // Warm analog drift

      gain.gain.value = 0.20 / freqs.length;
      osc.connect(gain);
      gain.connect(filter);
      osc.start(now);
      this.spacePadNodes.push({ osc, gain });
    });

    filter.connect(this.spacePadGain);
    this.spacePadGain.connect(this.compressor);
    this.spacePadGain.connect(this.reverbBus);
  }

  startDeepAtmosphere() {
    const now = this.ctx.currentTime;
    const noiseBuffer = this.createNoiseBuffer('pink', 10);
    this.atmosphereNode = this.ctx.createBufferSource();
    this.atmosphereNode.buffer = noiseBuffer;
    this.atmosphereNode.loop = true;

    // Deep atmospheric low-end rumble (like Interstellar space atmosphere)
    const atmFilter = this.ctx.createBiquadFilter();
    atmFilter.type = 'lowpass';
    atmFilter.frequency.setValueAtTime(220, now);

    this.atmosphereGain = this.ctx.createGain();
    this.atmosphereGain.gain.setValueAtTime(0.001, now);
    this.atmosphereGain.gain.linearRampToValueAtTime(0.14, now + 5.0);

    this.atmosphereNode.connect(atmFilter);
    atmFilter.connect(this.atmosphereGain);
    this.atmosphereGain.connect(this.compressor);
    this.atmosphereNode.start(now);
  }

  playTitleChime() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Warm Cinematic Piano / Rhodes chord swell (Dmaj7 - D3, F#3, A3, C#4) - Sâu lắng, không chói tai
    this.playCinematicRhodes([146.83, 185.00, 220.00, 277.18], now, 0.30, 4.0);
  }

  startYearCount() {
    if (!this.ctx || this.yearCountInterval) return;
    let step = 0;
    // Cinematic Low Pulse / Heartbeat Anticipation - nhịp tim ấm áp đếm mốc thời gian
    this.yearCountInterval = setInterval(() => {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const freq = step % 2 === 0 ? 110.00 : 146.83; // Low A2 / D3 warm pulse
      this.playWarmPulse(freq, now, 0.16, 0.45);
      step++;
    }, 200);
  }

  stopYearCount() {
    if (this.yearCountInterval) {
      clearInterval(this.yearCountInterval);
      this.yearCountInterval = null;
    }
    if (!this.ctx) return;
    // IMAX-style warm major resolution swell for 2026
    const now = this.ctx.currentTime;
    this.playCinematicRhodes([146.83, 220.00, 293.66, 369.99], now, 0.35, 4.5);
  }

  playWhisper(index) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // 5 hợp âm Rhodes/Piano điện ảnh ấm áp cho từng lời chúc (không dùng chuông chói tai)
    const whisperChords = [
      [146.83, 220.00, 293.66, 369.99], // 0: Dmaj7 warm welcoming chord
      [123.47, 185.00, 246.94, 293.66], // 1: Bm7 gentle reflective chord
      [110.00, 164.81, 220.00, 329.63], // 2: A major deep warmth
      [146.83, 220.00, 277.18, 329.63], // 3: Dmaj9 soft moonlight pad chord
      [146.83, 220.00, 293.66, 440.00]  // 4: D5 open hopeful resolution
    ];

    const chord = whisperChords[index % whisperChords.length];
    this.playCinematicRhodes(chord, now, 0.28, 4.2);
  }

  playCakeApproachWhoosh() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Âm vù vù khi camera ngẩng lên và bánh sinh nhật tiến lại gần ("lao tới")
    this.playCameraWhoosh(3.2, 0.85, 'approach');

    // Gentle candle glow warmth (240Hz triangle hum)
    const glowOsc = this.ctx.createOscillator();
    const glowGain = this.ctx.createGain();
    glowOsc.type = 'triangle';
    glowOsc.frequency.setValueAtTime(220, now);
    glowGain.gain.setValueAtTime(0, now);
    glowGain.gain.linearRampToValueAtTime(0.06, now + 1.2);
    glowGain.gain.exponentialRampToValueAtTime(0.001, now + 6.0);
    glowOsc.connect(glowGain);
    glowGain.connect(this.reverbBus);
    glowOsc.start(now);
    glowOsc.stop(now + 6.1);
  }

  playCandleBlow() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Breath / air puff
    const noise = this.createNoiseBuffer('white', 1.0);
    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noise;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(120, now + 0.7);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0, now);
    noiseGain.gain.linearRampToValueAtTime(0.32, now + 0.1);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.compressor);
    noiseSource.start(now);

    // Warm atmospheric fade-out chord (no loud bell)
    this.playCinematicRhodes([220.00, 329.63, 440.00], now + 0.2, 0.25, 4.0);
  }

  // ==========================================
  // ACT 3: INK WASH CINEMATIC SCORE & CAMERA DIVE WHOOSH
  // ==========================================

  transitionToInkWash() {
    if (!this.ctx || this.currentScene === 'inkwash') return;
    this.currentScene = 'inkwash';
    const now = this.ctx.currentTime;

    // 1. Fade out Space Pad
    if (this.spacePadGain) {
      this.spacePadGain.gain.linearRampToValueAtTime(0.001, now + 3.0);
    }
    if (this.atmosphereGain) {
      this.atmosphereGain.gain.linearRampToValueAtTime(0.001, now + 3.0);
    }

    // 2. Mountain Rise Camera Pullback Whoosh ("âm vù vù như lao tới / chuyển cảnh")
    this.playCameraWhoosh(3.6, 0.90, 'approach');

    // 3. Start Modern Cinematic Ink Wash Score (Warm Atmospheric String Pad + Serene Air, KHÔNG chuông cồng hoài cổ)
    this.startInkWashCinematicScore();
  }

  startInkWashCinematicScore() {
    const now = this.ctx.currentTime;
    this.inkWashGain = this.ctx.createGain();
    this.inkWashGain.gain.setValueAtTime(0.001, now);
    this.inkWashGain.gain.linearRampToValueAtTime(0.28, now + 3.5);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(680, now);

    // LFO for cinematic breathing strings
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.06;
    lfoGain.gain.value = 180;
    lfo.connect(filter.frequency);
    lfo.start(now);

    // Epic cinematic serene chord (D3, A3, D4, G4 - Quartal harmony, very modern film score)
    const freqs = [146.83, 220.00, 293.66, 392.00];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx < 2 ? 'sawtooth' : 'triangle';
      osc.frequency.value = freq;
      gain.gain.value = 0.22 / freqs.length;
      osc.connect(gain);
      gain.connect(filter);
      osc.start(now);
      this.inkWashNodes.push({ osc, gain });
    });

    filter.connect(this.inkWashGain);
    this.inkWashGain.connect(this.compressor);
    this.inkWashGain.connect(this.reverbBus);
  }

  /**
   * Called when the 21-second camera dive into the painting starts!
   * Tạo luồng gió vù vù chuyển động liên tục theo hành trình camera lao qua núi non
   */
  startInkWashDiveWhoosh() {
    if (!this.ctx || this.currentScene !== 'inkwash') return;
    const now = this.ctx.currentTime;

    // Gliding Camera Air-Rush ("âm vù vù lao tới" kéo dài cho cú máy 21s)
    const noiseBuffer = this.createNoiseBuffer('pink', 22);
    this.diveWhooshNode = this.ctx.createBufferSource();
    this.diveWhooshNode.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.6;
    filter.frequency.setValueAtTime(160, now);

    // LFO modulation to simulate rushing past mountain ridges
    const ridgeLfo = this.ctx.createOscillator();
    const ridgeGain = this.ctx.createGain();
    ridgeLfo.type = 'sine';
    ridgeLfo.frequency.value = 0.18; // Rush peaks every ~5.5 seconds
    ridgeGain.gain.value = 350;
    ridgeLfo.connect(filter.frequency);
    ridgeLfo.start(now);
    ridgeLfo.stop(now + 21);

    this.diveWhooshGain = this.ctx.createGain();
    this.diveWhooshGain.gain.setValueAtTime(0.001, now);
    this.diveWhooshGain.gain.linearRampToValueAtTime(0.32, now + 3.0);
    this.diveWhooshGain.gain.setValueAtTime(0.32, now + 17.0);
    this.diveWhooshGain.gain.linearRampToValueAtTime(0.001, now + 21.0);

    this.diveWhooshNode.connect(filter);
    filter.connect(this.diveWhooshGain);
    this.diveWhooshGain.connect(this.compressor);
    this.diveWhooshGain.connect(this.reverbBus);
    this.diveWhooshNode.start(now);
    this.diveWhooshNode.stop(now + 21.5);
  }

  playPoemChime(index) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Khi hai câu thơ xuất hiện: Hợp âm dàn dây/piano điện ảnh sâu lắng, sang trọng (không dùng đàn tranh/chuông chói)
    if (index === 1) {
      this.playCinematicRhodes([146.83, 220.00, 293.66, 440.00], now, 0.32, 4.5);
    } else {
      this.playCinematicRhodes([146.83, 220.00, 329.63, 440.00], now, 0.32, 5.0);
    }
  }

  // ==========================================
  // ACT 4: DAWN FINALE & CELEBRATION
  // ==========================================

  transitionToDawn() {
    if (!this.ctx || this.currentScene === 'dawn') return;
    this.currentScene = 'dawn';
    const now = this.ctx.currentTime;

    // 1. Silencing all previous ambient soundscapes and loops
    if (this.spacePadGain) {
      this.spacePadGain.gain.linearRampToValueAtTime(0.0001, now + 2.5);
    }
    if (this.atmosphereGain) {
      this.atmosphereGain.gain.linearRampToValueAtTime(0.0001, now + 2.5);
    }
    if (this.inkWashGain) {
      this.inkWashGain.gain.linearRampToValueAtTime(0.0001, now + 2.5);
    }
    if (this.diveWhooshGain) {
      this.diveWhooshGain.gain.linearRampToValueAtTime(0.0001, now + 1.0);
    }
    if (this.yearCountInterval) {
      clearInterval(this.yearCountInterval);
      this.yearCountInterval = null;
    }

    // 2. Cinematic Sunrise Approach Whoosh ("vù vù lao vào bình minh")
    this.playCameraWhoosh(4.0, 1.0, 'approach');

    // 3. Swell Epic Hans Zimmer-style Dawn Symphonic Crescendo (D Major Wide Film Score Pad)
    // - Chỉ dùng tần số trầm và trung (D2, D3, A3, D4) để tuyệt đối không bị tiếng reng reng chói tai
    // - Tự động fade out về im lặng hoàn toàn (0.0001) trong 14 giây, để cuối video không bị tạp âm duy trì
    this.dawnGain = this.ctx.createGain();
    this.dawnGain.gain.setValueAtTime(0.001, now);
    this.dawnGain.gain.linearRampToValueAtTime(0.32, now + 5.0);
    this.dawnGain.gain.setValueAtTime(0.32, now + 6.0);
    this.dawnGain.gain.linearRampToValueAtTime(0.0001, now + 14.0);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 6.0); // Majestic sunrise swell

    // D Major Deep Warm Symphonic Progression (D2, D3, A3, D4 - NO high ringing frequencies)
    const dawnFreqs = [73.42, 146.83, 220.00, 293.66];
    dawnFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx < 2 ? 'sawtooth' : 'triangle';
      osc.frequency.value = freq;
      gain.gain.value = 0.25 / dawnFreqs.length;
      osc.connect(gain);
      gain.connect(filter);
      osc.start(now);
      osc.stop(now + 14.2);
    });

    filter.connect(this.dawnGain);
    this.dawnGain.connect(this.compressor);
    this.dawnGain.connect(this.reverbBus);
  }

  playConfettiSparkles() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Hợp âm kết thúc ấm áp, sang trọng và tự động tắt hẳn (decay mượt mà trong 6 giây)
    // KHÔNG dùng vòng lặp setTimeout lặp đi lặp lại gây tiếng reng reng khó chịu cuối video
    this.playCinematicRhodes([73.42, 146.83, 220.00, 293.66, 369.99], now, 0.35, 6.0);
  }

  // ==========================================
  // ACT 4 FINALE: INTERSTELLAR BLACK HOLE & HOLOGRAPHIC PHOTO SPHERE
  // ==========================================

  playBlackHoleSuction() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // 1. IMAX Interstellar Deep Gravitational Rumble (30Hz -> 85Hz -> 20Hz)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sawtooth';
    subOsc.frequency.setValueAtTime(32, now);
    subOsc.frequency.exponentialRampToValueAtTime(95, now + 3.0);
    subOsc.frequency.exponentialRampToValueAtTime(22, now + 5.5);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, now);
    filter.frequency.exponentialRampToValueAtTime(650, now + 3.0);
    filter.frequency.exponentialRampToValueAtTime(80, now + 5.5);

    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.65, now + 3.0);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 5.8);

    subOsc.connect(filter);
    filter.connect(subGain);
    subGain.connect(this.compressor);
    subGain.connect(this.reverbBus);
    subOsc.start(now);
    subOsc.stop(now + 6.0);

    // 2. Gravitational Vortex Suction Whoosh ("hút tất cả")
    this.playCameraWhoosh(5.5, 1.4, 'approach');
  }

  playBlackHoleWarp() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Âm thanh vù vù siêu âm khi vượt qua tâm hố đen Gargantua
    this.playCameraWhoosh(4.0, 1.5, 'approach');
    this.playCinematicRhodes([73.42, 110.00, 146.83, 220.00, 329.63], now, 0.45, 6.0);
  }

  playPhotoSphereOpen() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Âm thanh Holographic mở danh sách ảnh khi xòe bàn tay
    this.playCinematicRhodes([220.00, 329.63, 440.00, 587.33], now, 0.25, 3.0);
    this.playCameraWhoosh(1.5, 0.5, 'approach');
  }

  playPhotoSphereClose() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Âm thanh thu gọn về dạng quả cầu xoay khi nắm tay lại
    this.playCinematicRhodes([146.83, 220.00, 293.66], now, 0.22, 2.5);
  }

  playPhotoEnlarge() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Âm thanh vinh danh bức ảnh khi chỉ tay > 2 giây
    this.playCinematicRhodes([146.83, 220.00, 293.66, 440.00, 659.25], now, 0.35, 4.5);
    this.playCameraWhoosh(1.2, 0.6, 'approach');
  }

  // ==========================================
  // MODERN CINEMATIC SOUND BUILDERS
  // ==========================================

  /**
   * Warm Cinematic Piano / Rhodes Swell - Ấm áp, mượt mà, không bao giờ bị chói tai hay hoài cổ
   */
  playCinematicRhodes(freqs = [], time, volume = 0.28, decay = 4.0) {
    if (!this.ctx) return;
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      // Lowpass filter ensures warm analog character without sharp treble
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3.2, time);
      filter.frequency.exponentialRampToValueAtTime(freq * 1.3, time + 0.5);

      const noteVol = volume / freqs.length;
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(noteVol, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + decay);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.compressor);
      gain.connect(this.reverbBus);

      osc.start(time);
      osc.stop(time + decay + 0.1);
    });
  }

  /**
   * Warm Cinematic Pulse - Nhịp tim/âm nền đếm thời gian
   */
  playWarmPulse(freq, time, volume = 0.18, duration = 0.5) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(volume, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor);

    osc.start(time);
    osc.stop(time + duration + 0.05);
  }

  /**
   * Noise Generator (White / Pink Noise)
   */
  createNoiseBuffer(type = 'pink', duration = 2.0) {
    const sampleRate = this.ctx.sampleRate;
    const bufferSize = sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
    const data = buffer.getChannelData(0);

    if (type === 'white') {
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    } else {
      // Paul Kellet's filtered pink noise algorithm
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }
    }
    return buffer;
  }
}

export function setupAudio() {
  const manager = new CinematicAudioManager();
  return manager;
}
