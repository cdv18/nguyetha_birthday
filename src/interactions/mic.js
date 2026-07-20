export function setupMicDetection(onBlowDetected) {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);
      analyser.connect(scriptProcessor);
      scriptProcessor.connect(audioContext.destination);

      scriptProcessor.onaudioprocess = function() {
        const array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        let values = 0;
        const length = array.length;
        for (let i = 0; i < length; i++) {
          values += (array[i]);
        }
        const average = values / length;

        // Arbitrary threshold for a "blow" (loud wind noise into mic)
        if (average > 40) { 
          scriptProcessor.disconnect();
          microphone.disconnect();
          stream.getTracks().forEach(track => track.stop());
          onBlowDetected();
        }
      };
    })
    .catch(err => {
      console.warn("Microphone access denied or not supported.", err);
      // Fallback if mic is blocked: simulate blow on click anywhere on screen
      window.addEventListener('click', onBlowDetected, { once: true });
    });
}
