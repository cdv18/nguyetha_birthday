import './style.css';
import gsap from 'gsap';
import { SceneManager } from './gl/Scene.js';
import { setupAudio } from './audio.js';
import { setupMicDetection } from './interactions/mic.js';
import { setupHandInteraction, setupHandDetection, updateDwellProgress } from './interactions/hand.js';
import confetti from 'canvas-confetti';

const triggerStar = document.getElementById('trigger-star');
const hintText = document.getElementById('hint-text');
const uiAct1 = document.getElementById('ui-act1');

let sceneManager;
let audioManager;
let hasStarted = false;
const master = gsap.timeline({ paused: true });

document.fonts.ready.then(() => {
  hintText.innerText = "Đeo tai nghe và chạm nhẹ vào vì sao...";
  
  sceneManager = new SceneManager();
  sceneManager.init(document.getElementById('canvas-container'));
  window._globalPhotoSphere = sceneManager.photoSphere;
  window._globalCamera = sceneManager.camera;
  audioManager = setupAudio();

  buildTimeline();

  triggerStar.addEventListener('click', () => {
    if (hasStarted) return;
    hasStarted = true;
    
    audioManager.start();
    audioManager.playStarClickGlow();
    
    gsap.to(triggerStar, { scale: 150, opacity: 0, duration: 2, ease: 'power3.in' });
    gsap.to(triggerStar, { boxShadow: '0 0 100px 50px rgba(255,255,255,1)', duration: 1 }, "<");
    gsap.to(hintText, { opacity: 0, duration: 0.5 });
    
    setTimeout(() => {
      uiAct1.style.display = 'none';
      master.play();
    }, 1800);
  });
  
  animate();
});

function buildTimeline() {
  master.add(() => {
    sceneManager.warpSpeed();
    audioManager.playMoonApproachWhoosh();
  }, 0);
  
  master.to(sceneManager.textName.material, { opacity: 1, duration: 3, ease: 'power2.inOut' }, 5);
  master.fromTo(sceneManager.textName.position, { y: 2 }, { y: 6, duration: 4, ease: 'power2.out' }, 5);
  master.add(() => audioManager.playTitleChime(), 5);
  
  master.to(sceneManager.textYear.material, { opacity: 1, duration: 3 }, 7);
  master.fromTo(sceneManager.textYear.position, { y: -2 }, { y: 2, duration: 4, ease: 'power2.out' }, 7);
  
  master.add(() => audioManager.startYearCount(), 8);
  const yearObj = { val: 2005 };
  master.to(yearObj, {
    val: 2026,
    duration: 5,
    ease: 'slow(0.5, 0.8, false)',
    onUpdate: () => {
      const yearStr = Math.floor(yearObj.val).toString();
      sceneManager.updateTextSprite(sceneManager.textYear, `05.08.${yearStr}`, "Montserrat", 80, "#aaccff", "10px");
    }
  }, 8);

  master.fromTo(sceneManager.textYear.scale, 
    { x: 0.5, y: 0.5, z: 0.5 }, 
    { x: 1.0, y: 1.0, z: 1.0, duration: 5, ease: 'power1.inOut' }, 
  8);
  master.add(() => audioManager.stopYearCount(), 13);

  master.to(sceneManager.textName.material, { opacity: 0, duration: 2 }, 14);
  master.to(sceneManager.textYear.material, { opacity: 0, duration: 2 }, 14);

  master.add(() => {
    sceneManager.tiltDown();
    audioManager.playCameraWhoosh(2.8, 0.7, 'approach');
  }, 15);

  for (let i = 0; i < 5; i++) {
    let t = 19 + i * 6;
    const whisper = sceneManager.whispers[i];
    master.add(() => audioManager.playWhisper(i), t);
    master.fromTo(whisper.material, { opacity: 0 }, { opacity: 1, duration: 2, ease: 'power2.out' }, t);
    master.fromTo(whisper.position, { y: -2, z: 20 }, { y: 2, z: 10, duration: 5, ease: 'power1.out' }, t);
    master.to(whisper.material, { opacity: 0, duration: 2 }, t + 4);
  }

  master.add(() => {
    sceneManager.tiltUp();
    audioManager.playCameraWhoosh(2.5, 0.75, 'approach');
  }, 48);
  master.add(() => {
    sceneManager.showCake();
    audioManager.playCakeApproachWhoosh();
  }, 49); 
  
  master.to(sceneManager.textWish.material, { opacity: 1, duration: 3 }, 51);
  master.fromTo(sceneManager.textWish.position, { y: 5 }, { y: 8, duration: 4, ease: 'power2.out' }, 51);
  
  master.add(() => {
    master.pause();
    setupMicDetection(() => {
      if (hasStarted) blowCandles();
    });
  }, 56);
}

let hasBlownCandles = false;

function blowCandles() {
  if (hasBlownCandles) return;
  hasBlownCandles = true;
  
  const tl = gsap.timeline();
  window.act3Timeline = tl; // Expose globally for debugging
  
  sceneManager.blowOutCandles(); 
  audioManager.playCandleBlow();
  tl.to(sceneManager.textWish.material, { opacity: 0, duration: 1 }, 0);
  tl.add(() => sceneManager.hideCake(), 0.5); 
  
  // --- ACT 3: INK WASH EXTENDED DIRECTOR'S CUT (25s) ---
  
  // 1. Transition initiates: Mountains rise, scene turns to parchment
  tl.add(() => {
    sceneManager.transitionToInkWash();
    audioManager.transitionToInkWash();
  }, 1);
  
  // PULL BACK dramatic reveal! (Camera zooms out to z=300)
  tl.to(sceneManager.camera.position, { z: 300, y: 50, duration: 4, ease: "power2.out" }, 1);
  tl.to(sceneManager.camera.rotation, { x: -Math.PI / 12, duration: 4, ease: "power2.out" }, 1); // Tilt down to see the water
  
  // Camera then dives deeply into the painting from z=300 to z=-20 over 21s
  tl.add(() => audioManager.startInkWashDiveWhoosh(), 5);
  tl.to(sceneManager.camera.position, { z: -20, y: 3, duration: 21, ease: "none" }, 5);
  tl.to(sceneManager.camera.rotation, { x: -Math.PI / 48, duration: 21, ease: "none" }, 5); // Slowly level the camera
  
  // 2. Birds fly in
  tl.to(sceneManager.birdMats, { opacity: 0.8, duration: 3 }, 4);
  
  // 3. Poem line 1 appears at z=150 (Camera hits it at ~14.8s)
  tl.set(sceneManager.textPoem1.material, { opacity: 1 }, 10);
  tl.set(sceneManager.textPoem1Reflect.material, { opacity: 0.6 }, 10); // Reflection appears stronger
  tl.add(() => audioManager.playPoemChime(1), 10);
  tl.to(sceneManager.textPoem1.userData, { 
      writeProgress: 1, 
      duration: 3, 
      ease: "power1.inOut",
      onUpdate: () => sceneManager.updateTextSpriteWriting(sceneManager.textPoem1, sceneManager.textPoem1.userData.writeProgress)
  }, 10);
  tl.to(sceneManager.textPoem1.material, { opacity: 0, duration: 1.5 }, 13.5); // Fades out right as camera flies through it
  tl.to(sceneManager.textPoem1Reflect.material, { opacity: 0, duration: 1.5 }, 13.5); // Reflection fades out
  
  // 4. Cherry Blossom Petals start falling gracefully
  tl.to(sceneManager.petalMat, { opacity: 0.7, duration: 4 }, 10);
  
  // 5. Poem line 2 appears at z=40 (Camera hits it at ~22.1s)
  tl.set(sceneManager.textPoem2.material, { opacity: 1 }, 17.5);
  tl.set(sceneManager.textPoem2Reflect.material, { opacity: 0.6 }, 17.5); // Reflection appears stronger
  tl.add(() => audioManager.playPoemChime(2), 17.5);
  tl.to(sceneManager.textPoem2.userData, { 
      writeProgress: 1, 
      duration: 3, 
      ease: "power1.inOut",
      onUpdate: () => sceneManager.updateTextSpriteWriting(sceneManager.textPoem2, sceneManager.textPoem2.userData.writeProgress)
  }, 17.5);
  tl.to(sceneManager.textPoem2.material, { opacity: 0, duration: 1.5 }, 21); // Fades out as camera passes it
  tl.to(sceneManager.textPoem2Reflect.material, { opacity: 0, duration: 1.5 }, 21); // Reflection fades out

  // --- ACT 4: DAWN FINALE (Return to Space) ---
  tl.add(() => {
    sceneManager.transitionToDawn();
    audioManager.transitionToDawn();
  }, 26);
  tl.to(sceneManager.camera.rotation, { x: 0, duration: 2 }, 26); // Reset camera rotation for Dawn
  
  tl.to(sceneManager.textHBD.material, { opacity: 1, duration: 3 }, 33);
  tl.fromTo(sceneManager.textHBD.position, { z: 40, y: 14 }, { z: 20, y: 12, duration: 5, ease: 'power2.out' }, 33);
  
  tl.to(sceneManager.textLove.material, { opacity: 1, duration: 3 }, 36);
  tl.fromTo(sceneManager.textLove.position, { z: 45, y: 9 }, { z: 25, y: 7, duration: 5, ease: 'power2.out' }, 36);
  
  tl.add(() => {
    fireConfetti();
    audioManager.playConfettiSparkles();
  }, 33);

  tl.add(() => {
    // 1. Xuất hiện điểm sáng chói nhỏ lấp lánh ở giữa màn hình
    if (sceneManager.sparklingPoint) {
      sceneManager.sparklingPoint.visible = true;
      sceneManager.sparklingPoint.scale.set(0, 0, 0);
      gsap.to(sceneManager.sparklingPoint.scale, { x: 1, y: 1, z: 1, duration: 2.0, ease: 'back.out(2)' });
    }

    let isBlackHoleTriggered = false;
    let isWarpComplete = false;
    let blackHoleDwellTime = 0;

    // 2. Kích hoạt nhận diện ngón tay chỉ (hoặc xòe/nắm tay) cho Hố đen & Quả cầu ảnh (Hệ thống AI 2.0)
    setupHandInteraction(sceneManager.photoSphere, sceneManager.camera, audioManager, (gesture, x, y, dx, dy, _dwell, zoomDelta) => {
      // Khi điểm sáng đang xuất hiện và chưa kích hoạt hố đen:
      if (!isBlackHoleTriggered && sceneManager.sparklingPoint && sceneManager.sparklingPoint.visible) {
        // Vùng nhận diện rộng (70% màn hình) và chấp nhận bất kỳ cử chỉ tay nào hướng vào giữa
        const inCenterBox = Math.abs(x - 0.5) < 0.35 && Math.abs(y - 0.5) < 0.35;
        if (inCenterBox && gesture !== 'NONE') {
          blackHoleDwellTime += 16.6;
          updateDwellProgress(Math.min(1.0, blackHoleDwellTime / 300));

          if (blackHoleDwellTime >= 300) {
            isBlackHoleTriggered = true;
            updateDwellProgress(0);
            console.log("✨ CHẠM TAY VÀO VÌ SAO -> KÍCH HOẠT HỐ ĐEN GARGANTUA!");
            sceneManager.triggerBlackHoleSuction(() => {
              isWarpComplete = true;
            }, audioManager);
          }
        } else {
          // Trừ dần thay vì reset về 0 ngay lập tức tránh mất dwell do tay rung nhẹ
          blackHoleDwellTime = Math.max(0, blackHoleDwellTime - 10);
          updateDwellProgress(Math.min(1.0, blackHoleDwellTime / 300));
        }
      }

      // Sau khi vượt qua hố đen và Quả cầu ảnh đã hiển thị:
      if (isWarpComplete && sceneManager.photoSphere) {
        sceneManager.photoSphere.handleHandGesture(gesture, x, y, dx, dy, (ratio) => {
          updateDwellProgress(ratio);
        }, zoomDelta);
      }
    });

    // Sự kiện click/touch thủ công cho thiết bị không có camera
    const clickHandler = () => {
      if (!isBlackHoleTriggered && sceneManager.sparklingPoint && sceneManager.sparklingPoint.visible) {
        isBlackHoleTriggered = true;
        window.removeEventListener('click', clickHandler);
        sceneManager.triggerBlackHoleSuction(() => {
          isWarpComplete = true;
        }, audioManager);
      }
    };
    window.addEventListener('click', clickHandler);
  }, 39);
}

function fireConfetti() {
  const duration = 15000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 100, colors: ['#ffffff', '#ff7e5f', '#feb47b', '#ffd700'] };

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
  }, 250);
}

function animate() {
  requestAnimationFrame(animate);
  if (sceneManager) sceneManager.update();
}

// ==========================================
// ĐẠO DIỄN: HÀM ẨN HỖ TRỢ DEBUG (SKIP SCENE)
// ==========================================
window.skipToCake = () => {
    console.log("⏩ Bỏ qua Intro, chuyển đến cảnh Bánh Sinh Nhật...");
    master.seek(49);
    if (audioManager) audioManager.playCakeAppear();
};

window.skipToInkWash = () => {
    console.log("⏩ Bỏ qua thổi nến, tiến thẳng vào Sơn Thủy Nguyệt Hà...");
    if (window.act3Timeline) window.act3Timeline.kill();
    master.seek(56);
    if (audioManager) audioManager.transitionToInkWash();
    
    // Khóa và snap Camera về đúng vị trí chuẩn trước khi chuyển cảnh
    gsap.killTweensOf(sceneManager.camera.position);
    gsap.killTweensOf(sceneManager.camera.rotation);
    sceneManager.camera.position.set(0, 15, 40);
    sceneManager.camera.rotation.set(0, 0, 0);
    
    hasBlownCandles = false; // Reset lock
    blowCandles();
};

window.skipToDawn = () => {
    console.log("⏩ Chuyển thẳng đến màn bùng nổ cuối cùng (Dawn Finale)...");
    if(window.act3Timeline) {
        window.act3Timeline.seek(26);
        if (audioManager) audioManager.transitionToDawn();
    } else {
        master.seek(56);
        gsap.killTweensOf(sceneManager.camera.position);
        gsap.killTweensOf(sceneManager.camera.rotation);
        sceneManager.camera.position.set(0, 15, 40);
        sceneManager.camera.rotation.set(0, 0, 0);
        
        hasBlownCandles = false; // Reset lock
        blowCandles();
        setTimeout(() => {
          window.act3Timeline.seek(26);
          if (audioManager) audioManager.transitionToDawn();
        }, 50);
    }
};

window.skipToBlackHole = () => {
    console.log("⏩ Bỏ qua toàn bộ, nhảy thẳng đến Điểm sáng chói & Hố đen Gargantua...");
    window.skipToDawn();
    setTimeout(() => {
        let isBlackHoleTriggered = false;
        let isWarpComplete = false;
        let blackHoleDwellTime = 0;

        if (sceneManager && sceneManager.sparklingPoint) {
            sceneManager.sparklingPoint.visible = true;
            sceneManager.sparklingPoint.scale.set(1, 1, 1);
            if (sceneManager.stars) sceneManager.stars.visible = false;
            if (sceneManager.spaceStarfield) sceneManager.spaceStarfield.visible = true;
        }

        setupHandDetection((gesture, x, y, dx, dy, _dwell, zoomDelta) => {
            if (!isBlackHoleTriggered && sceneManager && sceneManager.sparklingPoint && sceneManager.sparklingPoint.visible) {
                const inCenterBox = Math.abs(x - 0.5) < 0.35 && Math.abs(y - 0.5) < 0.35;
                if (inCenterBox && gesture !== 'NONE') {
                    blackHoleDwellTime += 16.6;
                    updateDwellProgress(Math.min(1.0, blackHoleDwellTime / 300));
                    if (blackHoleDwellTime >= 300) {
                        isBlackHoleTriggered = true;
                        updateDwellProgress(0);
                        console.log("✨ CHẠM TAY VÀO VÌ SAO -> KÍCH HOẠT HỐ ĐEN GARGANTUA!");
                        sceneManager.triggerBlackHoleSuction(() => {
                            isWarpComplete = true;
                        }, audioManager);
                    }
                } else {
                    blackHoleDwellTime = Math.max(0, blackHoleDwellTime - 10);
                    updateDwellProgress(Math.min(1.0, blackHoleDwellTime / 300));
                }
            }

            if ((isWarpComplete || (sceneManager.photoSphere && sceneManager.photoSphere.group.visible)) && sceneManager.photoSphere) {
                sceneManager.photoSphere.handleHandGesture(gesture, x, y, dx, dy, (ratio) => updateDwellProgress(ratio), zoomDelta);
            }
        });
    }, 1000);
};

window.skipToPhotoSphere = () => {
    console.log("⏩ Nhảy thẳng đến Quả cầu ảnh Nguyệt Hà 3D...");
    window.skipToDawn();
    setTimeout(() => {
        if (sceneManager) {
            sceneManager.camera.position.set(0, 12, 36);
            sceneManager.camera.rotation.set(0, 0, 0);
            if (sceneManager.water) sceneManager.water.visible = false;
            if (sceneManager.timeTunnelGroup) sceneManager.timeTunnelGroup.visible = false;
            if (sceneManager.stars) sceneManager.stars.visible = false;
            if (sceneManager.spaceStarfield) sceneManager.spaceStarfield.visible = true;
            sceneManager.scene.background.setRGB(0.002, 0.004, 0.01);
            sceneManager.scene.fog.color.setRGB(0.002, 0.004, 0.01);
            if (sceneManager.photoSphere) sceneManager.photoSphere.show();
        }
        setupHandDetection((gesture, x, y, dx, dy, _dwell, zoomDelta) => {
            if (sceneManager && sceneManager.photoSphere) {
                sceneManager.photoSphere.handleHandGesture(gesture, x, y, dx, dy, (ratio) => updateDwellProgress(ratio), zoomDelta);
            }
        });
    }, 500);
};
