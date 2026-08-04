// ============================================================================
// SMART AI CANDLE BLOW DETECTOR (CAMERA LIP-PUCKER + MICROPHONE WIND)
// Hệ thống nhận diện thổi nến thông minh bằng AI Webcam (Chu môi) & Micro
// ============================================================================

let isDetecting = false;
let hasTriggered = false;
let videoStream = null;
let audioStream = null;
let faceMeshInstance = null;
let scriptProcessorNode = null;
let micSourceNode = null;

/**
 * Tải thư viện script từ CDN một cách an toàn
 */
function loadScript(url) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = url;
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(script);
  });
}

/**
 * Tạo giao diện Glassmorphism HUD hiển thị trạng thái AI (Webcam + Micro)
 */
function createSmartHUD(onTrigger) {
  const existing = document.getElementById('smart-blow-hud');
  if (existing) existing.remove();

  const hud = document.createElement('div');
  hud.id = 'smart-blow-hud';
  hud.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
      <span style="font-size: 14.5px; font-weight: 600; letter-spacing: 0.5px; text-shadow: 0 2px 10px rgba(255, 255, 255, 0.4);">✨ Hãy thổi nhẹ để ước nguyện thành hiện thực</span>
      <span style="font-size: 11.5px; opacity: 0.8; font-weight: 400;">(Thổi trước màn hình / Micro hoặc chạm vào nút bên dưới)</span>
    </div>
    <button id="ai-skip-btn" style="background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.4); color: #fff; padding: 8px 24px; border-radius: 30px; cursor: pointer; font-size: 13px; font-weight: 600; font-family: inherit; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.3); white-space: nowrap;">
      Chạm để thổi ✨
    </button>
  `;

  // Styled Glassmorphism floating pill
  Object.assign(hud.style, {
    position: 'fixed',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '9999',
    background: 'rgba(12, 18, 36, 0.65)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '50px',
    padding: '12px 28px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 35px rgba(0, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
    color: '#ffffff',
    fontFamily: "'Montserrat', sans-serif",
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: '0',
    pointerEvents: 'auto'
  });

  document.body.appendChild(hud);

  // Animate in
  requestAnimationFrame(() => {
    hud.style.opacity = '1';
    hud.style.bottom = '50px';
  });

  // Touch/Click fallback button
  const btn = hud.querySelector('#ai-skip-btn');
  btn.addEventListener('click', () => {
    onTrigger('manual');
  });
  btn.addEventListener('mouseenter', () => {
    btn.style.background = 'rgba(255, 255, 255, 0.35)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background = 'rgba(255, 255, 255, 0.18)';
  });

  return hud;
}

/**
 * Cập nhật trạng thái chấm đèn LED trên HUD
 */
function updateHUDStatus(type, status, message) {
  const dot = document.getElementById(`ai-${type}-dot`);
  const text = document.getElementById(`ai-${type}-text`);
  if (!dot || !text) return;

  if (status === 'active') {
    dot.style.background = '#00ff88';
    dot.style.boxShadow = '0 0 10px #00ff88';
    if (message) text.textContent = message;
  } else if (status === 'trigger') {
    dot.style.background = '#00ffff';
    dot.style.boxShadow = '0 0 16px #00ffff';
    text.textContent = message || '✨ ĐÃ PHÁT HIỆN!';
  } else if (status === 'error') {
    dot.style.background = '#ff4444';
    dot.style.boxShadow = 'none';
    if (message) text.textContent = message;
  }
}

/**
 * Dừng toàn bộ các luồng Camera, Micro và AI Mesh
 */
function stopAllSensors() {
  isDetecting = false;

  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
  }
  if (audioStream) {
    audioStream.getTracks().forEach(track => track.stop());
    audioStream = null;
  }
  if (faceMeshInstance && typeof faceMeshInstance.close === 'function') {
    faceMeshInstance.close();
    faceMeshInstance = null;
  }
  if (scriptProcessorNode) {
    scriptProcessorNode.disconnect();
    scriptProcessorNode = null;
  }
  if (micSourceNode) {
    micSourceNode.disconnect();
    micSourceNode = null;
  }

  // Fade out UI HUD
  const hud = document.getElementById('smart-blow-hud');
  if (hud) {
    hud.style.opacity = '0';
    hud.style.bottom = '20px';
    setTimeout(() => hud.remove(), 600);
  }
}

/**
 * Khởi động hệ thống nhận diện Camera Chu Môi (MediaPipe Face Mesh) & Micro Gió
 */
export async function setupMicDetection(onBlowDetected) {
  if (isDetecting || hasTriggered) {
    onBlowDetected();
    return;
  }
  isDetecting = true;
  hasTriggered = false;

  const handleTrigger = (source) => {
    if (hasTriggered) return;
    hasTriggered = true;
    console.log(`🎂 NẾN ĐÃ ĐƯỢC THỔI TẮT qua: [${source.toUpperCase()}]`);

    if (source === 'camera') {
      updateHUDStatus('cam', 'trigger', '👄 ĐÃ CHU MÔI THỔI!!');
    } else if (source === 'mic') {
      updateHUDStatus('mic', 'trigger', '💨 ĐÃ THỔI GIÓ!!');
    }

    setTimeout(() => {
      stopAllSensors();
      onBlowDetected();
    }, 400);
  };

  createSmartHUD(handleTrigger);

  // 1. KÍCH HOẠT MICROPHONE WIND DETECTION (Luồng gió phát vào micro)
  try {
    audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
    micSourceNode = audioCtx.createMediaStreamSource(audioStream);
    scriptProcessorNode = audioCtx.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    micSourceNode.connect(analyser);
    analyser.connect(scriptProcessorNode);
    scriptProcessorNode.connect(audioCtx.destination);

    updateHUDStatus('mic', 'active', '🎙️ Thổi vào micro');

    scriptProcessorNode.onaudioprocess = () => {
      if (!isDetecting || hasTriggered) return;
      const array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      let sum = 0;
      for (let i = 0; i < array.length; i++) sum += array[i];
      const average = sum / array.length;

      // Ngưỡng cường độ gió vào mic
      if (average > 38) {
        handleTrigger('mic');
      }
    };
  } catch (err) {
    console.warn("🎙️ Micro không khả dụng hoặc bị từ chối:", err);
    updateHUDStatus('mic', 'error', '🎙️ Micro tắt');
  }

  // 2. KÍCH HOẠT CAMERA LIP-PUCKER DETECTION ("CHU MÔI THỔI NẾN")
  try {
    videoStream = await navigator.mediaDevices.getUserMedia({
      video: { width: 320, height: 240, facingMode: 'user' }
    });

    const video = document.createElement('video');
    video.srcObject = videoStream;
    video.playsInline = true;
    video.muted = true;
    await video.play();

    updateHUDStatus('cam', 'active', '📷 Đang tải AI chu môi...');

    // Dynamic load MediaPipe Face Mesh từ CDN
    await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js');
    await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js');

    if (window.FaceMesh) {
      faceMeshInstance = new window.FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
      });

      faceMeshInstance.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });

      let puckerFrameCount = 0;

      faceMeshInstance.onResults((results) => {
        if (!isDetecting || hasTriggered) return;
        if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) return;

        const lm = results.multiFaceLandmarks[0];

        // Landmark 234 (má trái), 454 (má phải) -> Chiều rộng khuôn mặt (Face Width)
        const faceWidth = Math.hypot(lm[454].x - lm[234].x, lm[454].y - lm[234].y);

        // Landmark 61 (khóe môi trái), 291 (khóe môi phải) -> Chiều rộng miệng (Mouth Width)
        const mouthWidth = Math.hypot(lm[291].x - lm[61].x, lm[291].y - lm[61].y);

        // Landmark 13 (giữa môi trên), 14 (giữa môi dưới) -> Chiều cao mở miệng (Mouth Height)
        const mouthHeight = Math.hypot(lm[14].x - lm[13].x, lm[14].y - lm[13].y);

        if (faceWidth > 0) {
          // Tỷ lệ chu môi: Khi chu môi thổi, chiều ngang miệng thu nhỏ dưới 0.28 chiều ngang mặt
          const puckerRatio = mouthWidth / faceWidth;
          // Tỷ lệ tròn miệng chữ O: Chiều cao mở miệng lớn hơn 0.24 chiều ngang miệng
          const oShapeRatio = mouthHeight / mouthWidth;

          if (puckerRatio < 0.285 && oShapeRatio > 0.235) {
            puckerFrameCount++;
            if (puckerFrameCount >= 3) {
              console.log(`👄 AI phát hiện hành động CHU MÔI (PuckerRatio: ${puckerRatio.toFixed(3)}, OShape: ${oShapeRatio.toFixed(3)})`);
              handleTrigger('camera');
            }
          } else {
            puckerFrameCount = Math.max(0, puckerFrameCount - 1);
          }
        }
      });

      updateHUDStatus('cam', 'active', '📷 Chu môi thổi nến');

      // Vòng lặp gửi frame camera cho FaceMesh nhận diện
      const detectLoop = async () => {
        if (!isDetecting || hasTriggered) return;
        if (video.readyState >= 2 && faceMeshInstance) {
          try {
            await faceMeshInstance.send({ image: video });
          } catch (e) {
            // bỏ qua frame lỗi khi đang đóng
          }
        }
        if (isDetecting && !hasTriggered) {
          requestAnimationFrame(detectLoop);
        }
      };

      requestAnimationFrame(detectLoop);
    }
  } catch (err) {
    console.warn("📷 Camera không khả dụng hoặc bị từ chối:", err);
    updateHUDStatus('cam', 'error', '📷 Camera tắt');
  }

  // 3. FALLBACK CLICK/TOUCH BẤT KỲ ĐÂU TRÊN MÀN HÌNH
  const globalClickHandler = () => {
    if (isDetecting && !hasTriggered) {
      window.removeEventListener('click', globalClickHandler);
      handleTrigger('manual');
    }
  };
  window.addEventListener('click', globalClickHandler, { once: true });
}
