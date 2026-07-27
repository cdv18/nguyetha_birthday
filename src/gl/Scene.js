import * as THREE from 'three';
import gsap from 'gsap';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { PhotoSphere } from './PhotoSphere.js';

export class SceneManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#010205'); 
    this.scene.fog = new THREE.FogExp2('#010205', 0.002);

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
    this.clock = new THREE.Clock();
    
    this.stars = null;
    this.moon = null;
    this.water = null;
    this.shootingStars = [];
    this.cakeGroup = null;
    this.flameLight = null;
    this.flameMesh = null;
    
    this.starPositions = [];
    this.heartTargetPositions = [];
    this.composer = null;
    this.bloomPass = null;
    this.birdMats = []; 

    this.photoSphere = null;
    this.sparklingPoint = null;
    this.blackHoleGroup = null;
    this.accretionUniforms = null;
    this.accretionEmbers = null;
    this.lensingUniforms = null;
  }

  init(container) {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    container.appendChild(this.renderer.domElement);

    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
    
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85);
    this.bloomPass.threshold = 0.3; 
    this.bloomPass.strength = 1.2; 
    this.bloomPass.radius = 0.8;
    this.composer.addPass(this.bloomPass);

    this.createStars();
    this.createMoon();
    this.createWater(); 
    this.createShootingStars();
    
    this.createTextMeshes();
    this.createCake(); 
    this.createInkScene();

    this.photoSphere = new PhotoSphere(this.scene, this.camera);
    this.createSparklingLightPoint();
    this.createRealisticBlackHoleSingularity();
    this.createSpaceStarfield();

    this.camera.position.set(0, 5, 600); 
    
    window.addEventListener('resize', this.onResize.bind(this));
  }
  
  createTextSprite(message, font, size, color, spacing="0px", worldHeight=10) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (typeof context.letterSpacing !== 'undefined') {
      context.letterSpacing = spacing;
    }
    
    context.font = `${size}px "${font}"`;
    const textWidth = context.measureText(message).width;
    
    const w = THREE.MathUtils.ceilPowerOfTwo(textWidth + 100);
    const h = THREE.MathUtils.ceilPowerOfTwo(size * 2.5);
    
    canvas.width = w;
    canvas.height = h;
    
    if (typeof context.letterSpacing !== 'undefined') {
      context.letterSpacing = spacing;
    }
    context.font = `${size}px "${font}"`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    
    context.fillStyle = color;
    context.fillText(message, w / 2, h / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter; 
    
    const material = new THREE.MeshBasicMaterial({ 
      map: texture, 
      transparent: true, 
      opacity: 0, 
      side: THREE.DoubleSide, 
      blending: THREE.NormalBlending,
      depthWrite: false
    });
    
    const aspect = w / h;
    const geometry = new THREE.PlaneGeometry(worldHeight * aspect, worldHeight);
    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.userData = { message, font, size, color, spacing, writeProgress: 1.0 };
    return mesh;
  }

  updateTextSpriteWriting(mesh, progress) {
    const canvas = mesh.material.map.image;
    const context = canvas.getContext('2d');
    const { message, font, size, color, spacing } = mesh.userData;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    if (typeof context.letterSpacing !== 'undefined') {
      context.letterSpacing = spacing;
    }
    
    context.font = `${size}px "${font}"`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    
    // Simulate ink bleeding by adding a slight shadow
    context.shadowColor = color;
    context.shadowBlur = 2;
    context.fillStyle = color;
    
    context.save();
    // Clip from left to right to simulate writing
    context.beginPath();
    context.rect(0, 0, canvas.width * progress, canvas.height);
    context.clip();
    
    context.fillText(message, canvas.width / 2, canvas.height / 2);
    context.restore();
    
    mesh.material.map.needsUpdate = true;
  }

  updateTextSprite(mesh, message, font, size, color, spacing="0px") {
    const canvas = mesh.material.map.image;
    const context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    if (typeof context.letterSpacing !== 'undefined') {
      context.letterSpacing = spacing;
    }
    
    context.font = `${size}px "${font}"`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    
    context.fillStyle = color;
    context.fillText(message, canvas.width / 2, canvas.height / 2);
    
    mesh.material.map.needsUpdate = true;
  }

  createTextMeshes() {
    this.textName = this.createTextSprite("NGUYỆT HÀ", "Montserrat", 120, "#dddddf", "15px", 5); 
    this.textName.position.set(0, 7, 20);
    this.scene.add(this.textName);

    this.textYear = this.createTextSprite("05.08.2005", "Montserrat", 80, "#aaccff", "10px", 2.5); 
    this.textYear.position.set(0, 4, 20); 
    this.scene.add(this.textYear);

    this.whispers = [];
    const texts = [
      "Chúc mừng sinh nhật em, Nguyệt Hà.",
      "Tuổi 21 có thể sẽ nhiều chênh vênh...",
      "Cảm ơn em vì đã đến...",
      "...giống như ánh trăng dịu dàng soi xuống dòng sông.",
      "Dù thế nào đi nữa... Anh vẫn sẽ ở đây."
    ];
    texts.forEach(txt => {
      const mesh = this.createTextSprite(txt, "Montserrat", 80, "#ffeacc", "2px", 3);
      mesh.position.set(0, -1, 25); 
      this.scene.add(mesh);
      this.whispers.push(mesh);
    });

    this.textWish = this.createTextSprite("Hãy nhắm mắt... ước một điều... và thổi nhẹ nhé.", "Montserrat", 80, "#dddddf", "2px", 2.5);
    this.textWish.position.set(0, 6, 25);
    this.scene.add(this.textWish);

    this.textHBD = this.createTextSprite("HAPPY 21ST BIRTHDAY", "Montserrat", 80, "#ffffff", "20px", 4);
    this.textHBD.position.set(0, 12, 30);
    this.scene.add(this.textHBD);

    this.textLove = this.createTextSprite("ANH YÊU EM ❤️", "Montserrat", 90, "#ffd700", "15px", 3);
    this.textLove.position.set(0, 7, 30);
    this.scene.add(this.textLove);
  }

  createProceduralMountain(width, height, colorStr, seedOffset) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = colorStr;
    ctx.beginPath();
    ctx.moveTo(0, height);
    
    for (let x = 0; x <= width; x += 5) {
       const val = Math.sin((x + seedOffset) * 0.005) * 80 + Math.sin((x + seedOffset) * 0.02) * 20 + Math.sin((x + seedOffset) * 0.08) * 5;
       ctx.lineTo(x, height * 0.5 + val);
    }
    ctx.lineTo(width, height);
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0, depthWrite: false, blending: THREE.NormalBlending });
    const geo = new THREE.PlaneGeometry(300, 150);
    const mesh = new THREE.Mesh(geo, mat);
    return mesh;
  }

  createInkMoonTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    const centerX = 256;
    const centerY = 256;
    const radius = 180;
    
    for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
      const progress = angle / (Math.PI * 2); 
      const rOffset = Math.sin(angle * 12) * 4 + Math.sin(angle * 3) * 6; 
      const currentRadius = radius + rOffset;
      
      const x = centerX + Math.cos(angle) * currentRadius;
      const y = centerY + Math.sin(angle) * currentRadius;
      
      const size = 12 + Math.sin(angle * 8) * 4 - (progress * 6);
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(30, 30, 35, ${0.9 - progress * 0.5})`; 
      ctx.fill();
      
      if (Math.random() > 0.6) {
        ctx.beginPath();
        const splatterR = currentRadius + (Math.random() - 0.5) * 35;
        ctx.arc(centerX + Math.cos(angle) * splatterR, centerY + Math.sin(angle) * splatterR, Math.random() * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(40, 40, 45, ${Math.random() * 0.6})`;
        ctx.fill();
      }
    }
    
    const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    grad.addColorStop(0, "rgba(255, 250, 240, 0.6)");
    grad.addColorStop(0.8, "rgba(255, 250, 240, 0.2)");
    grad.addColorStop(1, "transparent");
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    return texture;
  }

  createSwallowBodyTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(25, 25, 30, 0.9)';
    ctx.shadowColor = 'rgba(25, 25, 30, 0.5)';
    ctx.shadowBlur = 4;

    ctx.beginPath();
    ctx.moveTo(32, 10); 
    ctx.quadraticCurveTo(45, 40, 32, 75); 
    ctx.lineTo(45, 115); 
    ctx.lineTo(32, 95);  
    ctx.lineTo(19, 115); 
    ctx.quadraticCurveTo(19, 40, 32, 10); 
    ctx.fill();
    
    return new THREE.CanvasTexture(canvas);
  }

  createSwallowWingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(25, 25, 30, 0.85)';
    ctx.shadowColor = 'rgba(25, 25, 30, 0.5)';
    ctx.shadowBlur = 4;

    ctx.beginPath();
    ctx.moveTo(10, 32); 
    ctx.quadraticCurveTo(40, 5, 115, 15); 
    ctx.quadraticCurveTo(80, 50, 10, 45); 
    ctx.fill();
    
    return new THREE.CanvasTexture(canvas);
  }

  createSingleBirdMesh() {
    const group = new THREE.Group();
    
    if (!this.swallowBodyTex) {
      this.swallowBodyTex = this.createSwallowBodyTexture();
      this.swallowBodyTex.minFilter = THREE.LinearFilter;
    }
    if (!this.swallowWingTex) {
      this.swallowWingTex = this.createSwallowWingTexture();
      this.swallowWingTex.minFilter = THREE.LinearFilter;
    }

    const bodyMat = new THREE.MeshBasicMaterial({ map: this.swallowBodyTex, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
    const wingMat = new THREE.MeshBasicMaterial({ map: this.swallowWingTex, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
    this.birdMats.push(bodyMat, wingMat);

    // Body (Head faces +Y)
    const bodyGeo = new THREE.PlaneGeometry(3, 6);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Right Wing (+X)
    const wingGeo = new THREE.PlaneGeometry(6, 3);
    wingGeo.translate(3, 0, 0); // Pivot at root
    const wingR = new THREE.Mesh(wingGeo, wingMat);
    wingR.position.set(0.5, 0.5, 0); 
    group.add(wingR);

    // Left Wing (-X)
    const wingL = new THREE.Mesh(wingGeo, wingMat);
    wingL.rotation.y = Math.PI; 
    wingL.position.set(-0.5, 0.5, 0);
    group.add(wingL);

    group.userData = { wingL, wingR };
    return group;
  }

  createInkBirds() {
    this.birds = new THREE.Group();
    
    for (let i = 0; i < 7; i++) {
      const bird = this.createSingleBirdMesh();
      
      // Rotate head to point left (-X)
      bird.rotation.z = Math.PI / 2;
      // Tilt to lie almost flat
      bird.rotation.x = -Math.PI / 2 + Math.PI/10;
      
      bird.position.set(
        Math.random() * 20 + 10,  
        Math.random() * 10 + 10,  
        Math.random() * 20 - 30   
      );
      
      bird.userData.speed = 0.2 + Math.random() * 0.1;
      bird.userData.flapSpeed = 12 + Math.random() * 6; 
      bird.userData.yOffset = Math.random() * Math.PI * 2;
      
      this.birds.add(bird);
    }
    this.birds.position.set(20, 0, 0); 
    this.scene.add(this.birds);
  }

  createPetalTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(32, 5);
    ctx.bezierCurveTo(55, 15, 60, 45, 32, 60);
    ctx.bezierCurveTo(4, 45, 9, 15, 32, 5);
    
    const grad = ctx.createLinearGradient(32, 5, 32, 60);
    grad.addColorStop(0, 'rgba(255, 180, 200, 1.0)');
    grad.addColorStop(0.5, 'rgba(255, 130, 170, 0.8)');
    grad.addColorStop(1, 'rgba(255, 200, 220, 0.4)');
    
    ctx.fillStyle = grad;
    ctx.fill();
    
    return new THREE.CanvasTexture(canvas);
  }

  createPetals() {
    this.petalsGroup = new THREE.Group();
    const tex = this.createPetalTexture();
    
    this.petalMat = new THREE.MeshBasicMaterial({ 
       map: tex, color: 0xffffff, transparent: true, opacity: 0, 
       side: THREE.DoubleSide, depthWrite: false, blending: THREE.NormalBlending 
    });
    
    const geo = new THREE.PlaneGeometry(1.2, 1.2);
    
    for (let i = 0; i < 150; i++) {
      const petal = new THREE.Mesh(geo, this.petalMat);
      petal.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 100 + 30,
        (Math.random() - 0.5) * 80
      );
      
      petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      
      petal.userData = {
        rx: (Math.random() - 0.5) * 0.1,
        ry: (Math.random() - 0.5) * 0.1,
        rz: (Math.random() - 0.5) * 0.1,
        vx: -0.05 - Math.random() * 0.08, 
        vy: -0.08 - Math.random() * 0.1  
      };
      
      this.petalsGroup.add(petal);
    }
    
    this.scene.add(this.petalsGroup);
  }

  createInkScene() {
    this.mountain1 = this.createProceduralMountain(1024, 512, "rgba(20, 25, 30, 0.9)", 0);
    this.mountain1.position.set(0, 15, -80);
    this.scene.add(this.mountain1);

    this.mountain2 = this.createProceduralMountain(1024, 512, "rgba(60, 65, 70, 0.6)", 1000);
    this.mountain2.position.set(-30, 10, -120);
    this.scene.add(this.mountain2);

    this.mountain3 = this.createProceduralMountain(1024, 512, "rgba(100, 105, 110, 0.4)", 2000);
    this.mountain3.position.set(30, 5, -160);
    this.scene.add(this.mountain3);

    const tex = this.createInkMoonTexture();
    this.inkMoon = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80), 
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, blending: THREE.NormalBlending, depthWrite: false })
    );
    this.inkMoon.position.set(0, 30, -100);
    this.scene.add(this.inkMoon);

    this.createInkBirds();
    this.createPetals();

    // Use "Dancing Script" (Calligraphy/Cursive), set up for drawing effect
    this.textPoem1 = this.createTextSprite("Năm tháng trôi như dòng thủy mặc,", "Dancing Script", 120, "#222222", "0px", 8);
    this.textPoem1.position.set(0, 25, 150); // Set high up and very far back for the epic dive
    this.textPoem1.material.opacity = 0;
    this.textPoem1.userData.writeProgress = 0;
    this.updateTextSpriteWriting(this.textPoem1, 0);
    this.scene.add(this.textPoem1);

    this.textPoem1Reflect = new THREE.Mesh(
      this.textPoem1.geometry,
      new THREE.MeshBasicMaterial({
        map: this.textPoem1.material.map,
        transparent: true, opacity: 0,
        side: THREE.DoubleSide, depthTest: false, blending: THREE.NormalBlending
      })
    );
    this.textPoem1Reflect.position.set(0, -12, 150); // Fake shallow reflection on water
    this.textPoem1Reflect.scale.y = -0.5; // Upside down & vertically squished like a water reflection
    this.textPoem1Reflect.renderOrder = 10;
    this.scene.add(this.textPoem1Reflect);

    this.textPoem2 = this.createTextSprite("Tâm an nhiên tĩnh tại tựa ngàn non.", "Dancing Script", 120, "#222222", "0px", 8);
    this.textPoem2.position.set(0, 10, 40); // Set closer to the mountains
    this.textPoem2.material.opacity = 0;
    this.textPoem2.userData.writeProgress = 0;
    this.updateTextSpriteWriting(this.textPoem2, 0);
    this.scene.add(this.textPoem2);

    this.textPoem2Reflect = new THREE.Mesh(
      this.textPoem2.geometry,
      new THREE.MeshBasicMaterial({
        map: this.textPoem2.material.map,
        transparent: true, opacity: 0,
        side: THREE.DoubleSide, depthTest: false, blending: THREE.NormalBlending
      })
    );
    this.textPoem2Reflect.position.set(0, -12, 40); 
    this.textPoem2Reflect.scale.y = -0.5; 
    this.textPoem2Reflect.renderOrder = 10;
    this.scene.add(this.textPoem2Reflect);
  }

  transitionToInkWash() {
    gsap.to(this.bloomPass, { strength: 0, duration: 4 });

    gsap.to(this.scene.background, { r: 0.91, g: 0.89, b: 0.85, duration: 5 }); 
    gsap.to(this.scene.fog.color, { r: 0.91, g: 0.89, b: 0.85, duration: 5 });
    
    if (this.stars) gsap.to(this.stars.material, { opacity: 0, duration: 4 });
    if (this.moon) gsap.to(this.moon.scale, { x: 0.01, y: 0.01, z: 0.01, duration: 4 });
    
    gsap.to(this.water.material.uniforms.waterColor.value, { r: 0.8, g: 0.82, b: 0.85, duration: 5 });
    gsap.to(this.water.material.uniforms.sunColor.value, { r: 1.0, g: 1.0, b: 1.0, duration: 5 });
    gsap.to(this.water.material.uniforms.distortionScale, { value: 1.0, duration: 5 }); 
    
    this.mountain3.position.y = -40;
    this.mountain2.position.y = -40;
    this.mountain1.position.y = -40;

    gsap.to(this.mountain3.material, { opacity: 1, duration: 4, delay: 1 });
    gsap.to(this.mountain3.position, { y: 5, duration: 7, delay: 1, ease: "power2.out" });

    gsap.to(this.mountain2.material, { opacity: 1, duration: 4, delay: 2 });
    gsap.to(this.mountain2.position, { y: 10, duration: 7, delay: 2, ease: "power2.out" });

    gsap.to(this.mountain1.material, { opacity: 1, duration: 4, delay: 3 });
    gsap.to(this.mountain1.position, { y: 15, duration: 7, delay: 3, ease: "power2.out" });
    
    gsap.to(this.inkMoon.material, { opacity: 1, duration: 5, delay: 4 });
    
    this.birdMats.forEach(mat => gsap.to(mat, { opacity: 1, duration: 3, delay: 3 }));
    this.birds.position.set(30, 0, 0); 
  }

  transitionToDawn() {
    gsap.to(this.bloomPass, { strength: 1.2, duration: 5 });
    gsap.to(this.scene.background, { r: 0.8, g: 0.3, b: 0.4, duration: 8, ease: "power2.inOut" });
    gsap.to(this.scene.fog.color, { r: 1.0, g: 0.53, b: 0.67, duration: 8 }); 
    
    gsap.to(this.mountain1.material, { opacity: 0, duration: 5 });
    gsap.to(this.mountain2.material, { opacity: 0, duration: 5 });
    gsap.to(this.mountain3.material, { opacity: 0, duration: 5 });
    gsap.to(this.inkMoon.material, { opacity: 0, duration: 5 });
    
    this.birdMats.forEach(mat => gsap.to(mat, { opacity: 0, duration: 3 }));
    gsap.to(this.petalMat, { opacity: 0, duration: 4 });

    if (this.stars) gsap.to(this.stars.material, { opacity: 0.9, duration: 5 });
    if (this.moon) gsap.to(this.moon.scale, { x: 1, y: 1, z: 1, duration: 5 });
    gsap.to(this.moon.material, { emissiveIntensity: 2.0, duration: 4 });

    gsap.to(this.water.material.uniforms.waterColor.value, { r: 0.004, g: 0.10, b: 0.18, duration: 8 });
    gsap.to(this.water.material.uniforms.sunColor.value, { r: 1, g: 0.5, b: 0.5, duration: 8 });
    gsap.to(this.water.material.uniforms.distortionScale, { value: 3.7, duration: 8 });
    
    const arr = this.stars.geometry.attributes.position.array;
    const startArr = new Float32Array(arr); 
    const targetArr = this.heartTargetPositions;
    const lerpObj = { p: 0 };
    
    gsap.to(lerpObj, {
      p: 1, duration: 8, ease: "power3.inOut",
      onUpdate: () => {
        for(let i=0; i<arr.length; i++) arr[i] = startArr[i] + (targetArr[i] - startArr[i]) * lerpObj.p;
        this.stars.geometry.attributes.position.needsUpdate = true;
      }
    });

    gsap.to(this.camera.position, { z: 120, y: 30, duration: 20, ease: "power1.out" }); 
  }
  
  createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, size: 0.3, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending
    });
    const colors = [];
    const color = new THREE.Color();
    for(let i = 0; i < 8000; i++) {
      const x = (Math.random() - 0.5) * 1200;
      const y = (Math.random() - 0.5) * 1200;
      const z = (Math.random() - 0.5) * 1200;
      this.starPositions.push(x, y, z);
      const mix = Math.random();
      if(mix > 0.8) color.setHex(0x88ccff);
      else if(mix > 0.6) color.setHex(0xffddaa);
      else color.setHex(0xffffff);
      colors.push(color.r, color.g, color.b);
      const t = Math.random() * Math.PI * 2;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
      const hz = (Math.random() - 0.5) * 20;
      this.heartTargetPositions.push(hx * 5, hy * 5 + 30, hz * 3 - 100);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.starPositions, 3));
    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    starMaterial.vertexColors = true;
    this.stars = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(this.stars);
  }

  createShootingStars() {
    const geo = new THREE.CylinderGeometry(0, 0.1, 10, 3);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
    for(let i=0; i<5; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(Math.random()*400 - 200, Math.random()*200 + 100, Math.random() * -200 - 50);
      mesh.rotation.z = -Math.PI / 4;
      mesh.rotation.x = Math.PI / 8;
      this.scene.add(mesh);
      this.shootingStars.push({ mesh, speed: Math.random() * 2 + 1 });
    }
  }
  
  createMoon() {
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.SphereGeometry(25, 64, 64);
    const texMap = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg');
    const material = new THREE.MeshStandardMaterial({ 
      map: texMap, emissive: 0x222233, emissiveIntensity: 0.5, roughness: 1.0, metalness: 0.0
    });
    this.moon = new THREE.Mesh(geometry, material);
    this.moon.position.set(0, 25, -50); 
    const haloGeometry = new THREE.SphereGeometry(26.5, 64, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x4a90e2, transparent: true, opacity: 0.15, side: THREE.BackSide, blending: THREE.AdditiveBlending
    });
    this.moon.add(new THREE.Mesh(haloGeometry, haloMaterial));
    const light = new THREE.DirectionalLight(0xffffff, 2.5);
    light.position.set(50, 50, 50);
    this.scene.add(light);
    const backLight = new THREE.PointLight(0x88ccff, 2, 200);
    backLight.position.set(-30, 20, -100);
    this.scene.add(backLight);
    this.scene.add(new THREE.AmbientLight(0x111122));
    this.scene.add(this.moon);
  }

  createWater() {
    const waterGeometry = new THREE.PlaneGeometry(2000, 2000);
    const loader = new THREE.TextureLoader();
    const waterNormals = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg', function(texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    });
    this.water = new Water(
      waterGeometry,
      {
        textureWidth: 512, textureHeight: 512, waterNormals: waterNormals,
        sunDirection: new THREE.Vector3(50, 50, 50).normalize(),
        sunColor: 0xffffff, waterColor: 0x011a2f, distortionScale: 3.7, fog: true
      }
    );
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.y = -10;
    this.scene.add(this.water);
  }

  createCake() {
    this.cakeGroup = new THREE.Group();
    this.cakeGroup.position.set(60, 40, 200); 
    const loader = new THREE.TextureLoader();
    const texMap = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg');
    const starGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const starMat = new THREE.MeshStandardMaterial({ 
      map: texMap, emissive: 0x333344, emissiveIntensity: 0.8, roughness: 0.5, metalness: 0.5
    });
    this.tinyMoon = new THREE.Mesh(starGeo, starMat);
    this.cakeGroup.add(this.tinyMoon);
    const candleGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.8, 8);
    const candleMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.9, roughness: 0.1 });
    const candle = new THREE.Mesh(candleGeo, candleMat);
    candle.position.set(0, 1.9, 0);
    this.cakeGroup.add(candle);
    this.flameLight = new THREE.PointLight(0xffaa00, 0, 100);
    this.flameLight.position.set(0, 2.4, 0);
    const flameGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
    this.flameMesh = new THREE.Mesh(flameGeo, flameMat);
    const coreGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
    this.flameCore = new THREE.Mesh(coreGeo, coreMat);
    this.flameMesh.add(this.flameCore);
    this.flameLight.add(this.flameMesh);
    this.cakeGroup.add(this.flameLight);
    this.scene.add(this.cakeGroup);
  }

  showCake() {
    gsap.to(this.cakeGroup.position, { x: 0, y: 12, z: 25, duration: 6, ease: "power2.out" });
    gsap.to(this.flameLight, { intensity: 4, duration: 2, delay: 4 });
    gsap.to(this.flameMesh.material, { opacity: 0.8, duration: 2, delay: 4 });
    gsap.to(this.flameCore.material, { opacity: 1.0, duration: 2, delay: 4 });
  }

  hideCake() {
    gsap.to(this.cakeGroup.position, { x: -20, y: 25, z: -50, duration: 4, ease: "power3.in" });
    gsap.to(this.cakeGroup.scale, { x: 0, y: 0, z: 0, duration: 4, ease: "power2.in" }); 
  }

  blowOutCandles() {
    gsap.to(this.flameLight, { intensity: 0, duration: 0.1 });
    gsap.to(this.flameMesh.scale, { x: 0, y: 0, z: 0, duration: 0.1 });
  }

  warpSpeed() {
    gsap.to(this.camera.position, { z: 40, duration: 6, ease: "power4.inOut" });
    gsap.to(this.camera, { fov: 110, duration: 3, ease: "power2.in", yoyo: true, repeat: 1, onUpdate: () => this.camera.updateProjectionMatrix() });
  }

  tiltDown() {
    gsap.to(this.camera.position, { y: -5, z: 60, duration: 4, ease: "sine.inOut" });
    gsap.to(this.camera.rotation, { x: -Math.PI / 12, duration: 4, ease: "sine.inOut" });
  }

  tiltUp() {
    gsap.to(this.camera.position, { y: 15, z: 40, duration: 4, ease: "sine.inOut" });
    gsap.to(this.camera.rotation, { x: 0, duration: 4, ease: "sine.inOut" });
  }
  
  update() {
    const t = this.clock.getElapsedTime();
    if (this.stars) this.stars.rotation.y = t * 0.005;
    if (this.moon) {
      this.moon.rotation.y = t * 0.05;
      this.moon.position.y = 25 + Math.sin(t * 0.5) * 1.5;
    }
    if (this.water) this.water.material.uniforms['time'].value += 1.0 / 60.0;
    
    // Animate Thủy Mặc Swallows
    if (this.birds && this.birdMats.length > 0 && this.birdMats[0].opacity > 0) {
      this.birds.position.x -= 0.3; 
      this.birds.children.forEach(bird => {
        bird.position.y += Math.sin(t * 2 + bird.userData.yOffset) * 0.02;
        
        const flapAngle = Math.sin(t * bird.userData.flapSpeed) * 0.6; 
        bird.userData.wingR.rotation.y = -flapAngle;
        bird.userData.wingL.rotation.y = Math.PI - flapAngle;
      });
    }

    if (this.petalsGroup && this.petalMat.opacity > 0) {
      this.petalsGroup.children.forEach(p => {
        p.position.x += p.userData.vx;
        p.position.y += p.userData.vy;
        
        p.rotation.x += p.userData.rx;
        p.rotation.y += p.userData.ry;
        p.rotation.z += p.userData.rz;
        
        if (p.position.y < -10) {
           p.position.y = 50 + Math.random() * 20;
           p.position.x = (Math.random() - 0.5) * 150;
        }
      });
    }

    if (this.shootingStars) {
      this.shootingStars.forEach(ss => {
        ss.mesh.position.x -= ss.speed;
        ss.mesh.position.y -= ss.speed * 0.5;
        if(ss.mesh.position.x < -300) {
          ss.mesh.position.x = 300 + Math.random()*200;
          ss.mesh.position.y = 100 + Math.random()*200;
        }
      });
    }
    
    if (this.cakeGroup) {
      this.tinyMoon.rotation.y = t * 0.5; 
      this.tinyMoon.rotation.x = t * 0.2;
      
      if (this.flameLight && this.flameLight.intensity > 0) {
        this.flameLight.intensity = 3 + Math.random() * 2.0;
        this.flameMesh.scale.setScalar(1.0 + Math.random() * 0.1);
        this.flameLight.position.x = (Math.random() - 0.5) * 0.05;
      }
    }

    if (this.photoSphere) {
      this.photoSphere.update(1.0 / 60.0);
    }
    if (this.sparklingPoint && this.sparklingPoint.visible) {
      this.sparklingPoint.rotation.y = t * 2.0;
      this.sparklingPoint.scale.setScalar(1.0 + Math.sin(t * 5.0) * 0.25);
    }
    if (this.spaceStarfield && this.spaceStarfield.visible) {
      this.spaceStarfield.rotation.y += 0.00015;
    }
    if (this.blackHoleGroup && this.blackHoleGroup.visible) {
      this.blackHoleGroup.rotation.y += 0.035;

      if (this.accretionUniforms) {
        this.accretionUniforms.uTime.value = t;
      }
      if (this.lensingUniforms) {
        this.lensingUniforms.uTime.value = t;
      }
      if (this.accretionEmbers) {
        this.accretionEmbers.rotation.y += 0.045;
        this.accretionEmbers.rotation.z -= 0.015;
      }
    }

    if (this.suctionStreamers && this.suctionStreamers.visible && this.suctionStreamers.geometry) {
      this.suctionStreamers.rotation.z += 0.03;
      const posAttr = this.suctionStreamers.geometry.attributes.position;
      if (posAttr && posAttr.array) {
        const arr = posAttr.array;
        const warpSpd = (typeof this.warpVelocity === 'number' && !isNaN(this.warpVelocity)) ? this.warpVelocity : 25.0;
        for (let i = 0; i < arr.length; i += 6) {
          arr[i + 2] += warpSpd;
          arr[i + 5] += warpSpd;
          if (arr[i + 2] > 100) {
            const l = arr[i + 2] - arr[i + 5];
            arr[i + 2] = -160;
            arr[i + 5] = -160 - l;
          }
        }
        posAttr.needsUpdate = true;
      }
    }
    
    if(this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }

  createSparklingLightPoint() {
    this.sparklingPoint = new THREE.Group();
    this.sparklingPoint.position.set(0, 12, 18); // Giữa màn hình chính diện camera
    this.sparklingPoint.visible = false;

    // Lõi sáng kim cương lấp lánh
    const coreGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.sparklingPoint.add(coreMesh);

    // Hào quang vàng chói lấp lánh xung quanh
    const haloGeo = new THREE.PlaneGeometry(8, 8);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffe680,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    this.sparklingPoint.add(haloMesh);

    this.scene.add(this.sparklingPoint);
  }

  createSpaceStarfield() {
    this.spaceStarfield = new THREE.Group();
    this.spaceStarfield.visible = false;

    // 1. 4500 Ngôi sao thiên văn thực tế với nhiệt độ/màu sắc thực (xanh lam, trắng kim cương, vàng Mặt Trời, cam đỏ)
    const starCount = 4500;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorHelper = new THREE.Color();
    for (let i = 0; i < starCount; i++) {
      const radius = 90 + Math.random() * 260;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const rand = Math.random();
      if (rand > 0.85) colorHelper.setHex(0x99ccff);
      else if (rand > 0.5) colorHelper.setHex(0xffffff);
      else if (rand > 0.25) colorHelper.setHex(0xffeea0);
      else colorHelper.setHex(0xffcc88);

      colors[i * 3] = colorHelper.r;
      colors[i * 3 + 1] = colorHelper.g;
      colors[i * 3 + 2] = colorHelper.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });

    this.spaceStarfield.add(new THREE.Points(starGeo, starMat));

    // 2. Lớp bụi tinh vân sâu thẳm tạo chiều sâu vũ trụ 3D
    const dustCount = 800;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 320;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 320;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x183366,
      size: 3.5,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    this.spaceStarfield.add(new THREE.Points(dustGeo, dustMat));

    this.scene.add(this.spaceStarfield);
  }

  createRealisticBlackHoleSingularity() {
    this.blackHoleGroup = new THREE.Group();
    this.blackHoleGroup.position.set(0, 12, 0); // Tâm hố đen ở (0, 12, 0)
    this.blackHoleGroup.visible = false;

    // 1. Event Horizon Sphere (Lõi đen tuyệt đối hút sạch ánh sáng)
    const horizonGeo = new THREE.SphereGeometry(5.2, 64, 64);
    const horizonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.blackHoleGroup.add(new THREE.Mesh(horizonGeo, horizonMat));

    // 2. Gravitational Einstein Halo (Hào quang Einstein siêu mềm bẻ cong ánh sáng - KHÔNG DÙNG HÌNH CẦU CỨNG!)
    const haloGeo = new THREE.PlaneGeometry(36, 36);
    this.lensingUniforms = {
      uTime: { value: 0 }
    };
    const haloMat = new THREE.ShaderMaterial({
      uniforms: this.lensingUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float dist = length(vUv - vec2(0.5)) * 2.0; // 0.0 ở tâm, 1.0 ở rìa
          // Bóng đen hố đen (Event Horizon shadow)
          float shadow = smoothstep(0.28, 0.31, dist);
          // Vòng sáng phô-tông hội tụ mãnh liệt tại rìa chân trời sự kiện
          float photonRing = exp(-pow((dist - 0.31) * 24.0, 2.0)) * 2.8;
          // Hào quang khí quyển tương đối tính lan tỏa siêu mềm ra ngoài không gian (Không có viền cứng)
          float softAtmosphere = exp(-(dist - 0.31) * 3.6) * smoothstep(0.25, 0.35, dist);

          vec3 goldenLight = vec3(1.0, 0.85, 0.35);
          vec3 cyanWarp = vec3(0.2, 0.88, 1.0);
          vec3 color = mix(goldenLight, cyanWarp, sin(uTime * 1.5) * 0.5 + 0.5);

          gl_FragColor = vec4(color, (photonRing + softAtmosphere * 0.85) * shadow);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.blackHoleGroup.add(new THREE.Mesh(haloGeo, haloMat));

    // 3. Đĩa bồi tụ plasma lỏng xoáy ốc (Relativistic Accretion Sheet - SIÊU MỀM, KHÔNG VIỀN CỨNG)
    const diskGeo = new THREE.RingGeometry(5.4, 38.0, 128, 64);
    this.accretionUniforms = {
      uTime: { value: 0 }
    };
    const diskMat = new THREE.ShaderMaterial({
      uniforms: this.accretionUniforms,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          float angle = atan(vPos.y, vPos.x);
          float radius = length(vPos.xy);

          // Hiệu ứng Doppler Beaming (Doppler Boost): bên tiến về phía ta sáng chói rực rỡ hơn bên ra xa
          float doppler = 1.0 + 0.72 * sin(angle - 0.4);

          // Các luồng khí plasma xoáy ốc thiên văn nhiều lớp mượt mà
          float w1 = sin(angle * 5.0 - radius * 0.9 - uTime * 5.0) * 0.5 + 0.5;
          float w2 = cos(angle * 11.0 - radius * 1.8 - uTime * 8.0) * 0.5 + 0.5;
          float w3 = sin(angle * 21.0 - radius * 0.4 - uTime * 12.0) * 0.5 + 0.5;
          float gasStreams = pow(w1 * 0.5 + w2 * 0.35 + w3 * 0.15, 1.3);

          // Phân tầng nhiệt độ: lõi siêu nhiệt trắng kim cương, giữa vàng hổ phách, rìa ngoài đỏ thẫm
          vec3 whitePlasma = vec3(1.0, 1.0, 1.0);
          vec3 amberPlasma = vec3(1.0, 0.68, 0.15);
          vec3 crimsonHalo = vec3(0.75, 0.12, 0.05);

          float mixVal = clamp((radius - 5.4) / 20.0, 0.0, 1.0);
          vec3 color = mix(whitePlasma, amberPlasma, mixVal);
          color = mix(color, crimsonHalo, pow(mixVal, 1.7));

          // Độ mờ vô cực theo hàm mũ exp: tuyệt đối KHÔNG CÓ VIỀN VÒNG TRÒN CỨNG
          float innerFade = smoothstep(5.4, 6.8, radius);
          float outerSoftFade = exp(-(radius - 6.5) * 0.135);
          float alpha = gasStreams * innerFade * outerSoftFade * doppler;

          gl_FragColor = vec4(color, alpha * 0.95);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const accretionDisk = new THREE.Mesh(diskGeo, diskMat);
    accretionDisk.rotation.x = Math.PI / 2.55;
    accretionDisk.rotation.y = 0.15;
    this.blackHoleGroup.add(accretionDisk);

    // 4. Vòng quang tương đối tính bẻ cong qua đỉnh hố đen (Warped Polar Light Arch - Chuẩn Interstellar)
    const archGeo = new THREE.PlaneGeometry(28, 28);
    const archMat = new THREE.ShaderMaterial({
      uniforms: this.lensingUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          vec2 c = vUv - vec2(0.5);
          float dist = length(c) * 2.0;
          float angle = atan(c.y, c.x);

          // Vòng sáng phía trên và phía dưới bị bẻ cong bởi trọng lực hố đen
          float topArch = exp(-pow((dist - 0.42) * 12.0, 2.0)) * smoothstep(0.0, 0.8, sin(angle));
          float bottomArch = exp(-pow((dist - 0.46) * 10.0, 2.0)) * smoothstep(0.0, 0.8, -sin(angle)) * 0.6;

          vec3 archColor = vec3(1.0, 0.78, 0.25);
          float alpha = (topArch + bottomArch) * smoothstep(0.28, 0.34, dist);
          gl_FragColor = vec4(archColor, alpha * 0.85);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const polarArch = new THREE.Mesh(archGeo, archMat);
    polarArch.position.z = -0.5; // Nằm sau ranh giới Event Horizon
    this.blackHoleGroup.add(polarArch);

    // 5. Hệ thống 12.000 hạt bụi plasma xoáy lốc bồi tụ mềm 3D (Keplerian Accretion Vortex Embers)
    const emberCount = 12000;
    const emberGeo = new THREE.BufferGeometry();
    const emberPos = new Float32Array(emberCount * 3);
    const emberColors = new Float32Array(emberCount * 3);
    const emberSizes = new Float32Array(emberCount);
    const colHelper = new THREE.Color();

    for (let i = 0; i < emberCount; i++) {
      const radius = 6.0 + Math.pow(Math.random(), 0.7) * 32.0;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * (radius * 0.28);

      emberPos[i * 3] = radius * Math.cos(angle);
      emberPos[i * 3 + 1] = height;
      emberPos[i * 3 + 2] = radius * Math.sin(angle);

      emberSizes[i] = 1.2 + Math.random() * 3.8;

      const rand = Math.random();
      if (radius < 9.0) colHelper.setHex(0xffffff);       // Trắng kim cương siêu nhiệt
      else if (radius < 17.0) colHelper.setHex(0xffaa22); // Vàng cam hổ phách
      else if (rand > 0.5) colHelper.setHex(0xdd3300);    // Đỏ thẫm viền ngoài
      else colHelper.setHex(0x00eef0);                    // Cyan dịch chuyển tương đối tính

      emberColors[i * 3] = colHelper.r;
      emberColors[i * 3 + 1] = colHelper.g;
      emberColors[i * 3 + 2] = colHelper.b;
    }

    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    emberGeo.setAttribute('color', new THREE.BufferAttribute(emberColors, 3));
    emberGeo.setAttribute('size', new THREE.BufferAttribute(emberSizes, 1));

    const emberMat = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float glow = exp(-dist * dist * 16.0);
          float core = smoothstep(0.5, 0.0, dist);
          gl_FragColor = vec4(vColor, (glow * 0.75 + core * 0.25) * 0.95);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.accretionEmbers = new THREE.Points(emberGeo, emberMat);
    this.accretionEmbers.rotation.x = Math.PI / 2.55;
    this.blackHoleGroup.add(this.accretionEmbers);

    this.scene.add(this.blackHoleGroup);

    // 5. Hệ thống 2500 vệt sáng hạt không gian lướt qua phía sau và hai bên camera (Warp Suction Streamers)
    // TẠO CẢM GIÁC CAMERA ĐANG LAO VÀO BÊN TRONG (HÚT VÀO) CHỨ KHÔNG PHẢI HỐ ĐEN BAY ĐẾN TA
    const streamCount = 2500;
    const streamGeo = new THREE.BufferGeometry();
    const streamPos = new Float32Array(streamCount * 2 * 3);
    const streamColors = new Float32Array(streamCount * 2 * 3);
    const cHelper = new THREE.Color();

    for (let i = 0; i < streamCount; i++) {
      const rad = 3.5 + Math.pow(Math.random(), 0.7) * 42;
      const ang = Math.random() * Math.PI * 2;
      const x = rad * Math.cos(ang);
      const y = rad * Math.sin(ang);
      const zStart = 80 - Math.random() * 160; // Phân bố quanh và phía trước camera
      const len = 10 + Math.random() * 28; // Độ dài vệt sáng khi lướt qua

      streamPos[i * 6] = x;
      streamPos[i * 6 + 1] = y + 12; // Tăng y+12 tương ứng tầm mắt camera
      streamPos[i * 6 + 2] = zStart;

      streamPos[i * 6 + 3] = x;
      streamPos[i * 6 + 4] = y + 12;
      streamPos[i * 6 + 5] = zStart - len;

      const rVal = Math.random();
      if (rVal > 0.75) cHelper.setHex(0x00ffff); // Cyan
      else if (rVal > 0.4) cHelper.setHex(0xffffff); // White
      else if (rVal > 0.2) cHelper.setHex(0xffaa22); // Amber
      else cHelper.setHex(0x5588ff);                 // Blue

      for (let j = 0; j < 2; j++) {
        streamColors[i * 6 + j * 3] = cHelper.r;
        streamColors[i * 6 + j * 3 + 1] = cHelper.g;
        streamColors[i * 6 + j * 3 + 2] = cHelper.b;
      }
    }

    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPos, 3));
    streamGeo.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));

    const streamMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    this.suctionStreamers = new THREE.LineSegments(streamGeo, streamMat);
    this.suctionStreamers.visible = false;
    this.scene.add(this.suctionStreamers);

    // 6. Hiệu ứng Vụ Nổ Sinh Ra Hố Đen (Singularity Birth Flash & Shockwave) - Xóa bỏ cảm giác xuất hiện thô
    this.birthFlashGroup = new THREE.Group();
    this.birthFlashGroup.position.set(0, 12, 0);
    this.birthFlashGroup.visible = false;

    const flashGeo = new THREE.SphereGeometry(1, 32, 32);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });
    this.birthFlashCore = new THREE.Mesh(flashGeo, flashMat);
    this.birthFlashGroup.add(this.birthFlashCore);

    const shockGeo = new THREE.TorusGeometry(2, 0.4, 32, 64);
    const shockMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    this.birthShockwave = new THREE.Mesh(shockGeo, shockMat);
    this.birthShockwave.rotation.x = Math.PI / 2.7;
    this.birthFlashGroup.add(this.birthShockwave);

    this.scene.add(this.birthFlashGroup);
  }

  triggerBlackHoleSuction(onWarpComplete, audioManager) {
    if (this.sparklingPoint) this.sparklingPoint.visible = false;

    // 0. Tắt ngay hiệu ứng lóe sáng rực rỡ (bloom) và màu rực hồng của màn trước, chuyển nền về đen sâu vũ trụ
    if (this.bloomPass) {
      gsap.to(this.bloomPass, { strength: 0.35, threshold: 0.65, radius: 0.4, duration: 2.5 });
    }
    gsap.to(this.scene.background, { r: 0.0005, g: 0.001, b: 0.002, duration: 2.0, ease: 'power2.inOut' });
    gsap.to(this.scene.fog.color, { r: 0.0005, g: 0.001, b: 0.002, duration: 2.0, ease: 'power2.inOut' });

    // 0. Ẩn sao trái tim cũ, chuyển toàn bộ không gian về nền đen sâu thẳm
    if (this.stars) this.stars.visible = false;

    // 1. Hiệu ứng Vụ Nổ Sinh Ra Hố Đen (Singularity Birth Flash & Shockwave) - Xóa bỏ sự thô cứng khi xuất hiện
    if (this.birthFlashGroup) {
      this.birthFlashGroup.visible = true;
      this.birthFlashCore.scale.set(0.1, 0.1, 0.1);
      this.birthFlashCore.material.opacity = 1.0;
      this.birthShockwave.scale.set(0.2, 0.2, 0.2);
      this.birthShockwave.material.opacity = 0.9;

      gsap.to(this.birthFlashCore.scale, { x: 25, y: 25, z: 25, duration: 1.4, ease: 'power2.out' });
      gsap.to(this.birthFlashCore.material, { opacity: 0, duration: 1.4, ease: 'power2.out' });
      gsap.to(this.birthShockwave.scale, { x: 20, y: 20, z: 20, duration: 1.6, ease: 'power2.out' });
      gsap.to(this.birthShockwave.material, { opacity: 0, duration: 1.6, ease: 'power2.out', onComplete: () => {
        this.birthFlashGroup.visible = false;
      }});
    }

    // 2. Kích hoạt Hố Đen Chân Thực mượt mà sau ánh chớp sinh ra
    if (this.blackHoleGroup) {
      this.blackHoleGroup.visible = true;
      this.blackHoleGroup.scale.set(0.1, 0.1, 0.1);
      gsap.to(this.blackHoleGroup.scale, {
        x: 2.2,
        y: 2.2,
        z: 2.2,
        duration: 2.6,
        ease: 'power2.out'
      });
    }

    // 3. Kích hoạt hệ thống 2500 hạt không gian lướt qua phía sau camera (TẠO CẢM GIÁC HÚT VÀO BÊN TRONG CHỨ KHÔNG PHẢI HỐ ĐEN BAY ĐẾN)
    if (this.suctionStreamers) {
      this.suctionStreamers.visible = true;
      this.warpVelocity = 25.0;
    }

    if (audioManager && typeof audioManager.playBlackHoleSuction === 'function') {
      audioManager.playBlackHoleSuction();
    }

    console.log("🌌 HỐ ĐEN VŨ TRỤ XUẤT HIỆN: Ánh chớp sinh ra uy nghi, ban đầu từ từ chậm bị hút vào sau mới lao nhanh!");

    // 4. Hút toàn bộ chữ, bánh sinh nhật, chim, mặt trăng vào tâm Hố đen (0, 12, 0)
    // Dùng ease: 'power3.in' để ĐÚNG YÊU CẦU: ban đầu chậm từ từ, sau gia tốc cực mạnh
    const objectsToSuck = [
      this.textHBD, this.textLove, this.cakeGroup, this.moon, this.birds
    ].filter(Boolean);

    objectsToSuck.forEach((obj, idx) => {
      // Khi bị lực hấp dẫn nuốt chửng, vật thể xoáy vào tâm hố đen (0, 12, 0)
      gsap.to(obj.position, {
        x: 0,
        y: 12,
        z: 0,
        duration: 2.8,
        delay: idx * 0.06,
        ease: 'power3.in' // BAN ĐẦU CHẬM TỪ TỪ, SAU LAO NHANH VÀO TÂM
      });
      // Xoáy tròn theo lực hấp dẫn
      gsap.to(obj.rotation, {
        x: "+=3.14",
        y: "+=6.28",
        z: "+=3.14",
        duration: 2.8,
        delay: idx * 0.06,
        ease: 'power3.in'
      });
      // Thu nhỏ dần về (0, 0, 0) khi lọt qua ranh giới Chân trời sự kiện - tuyệt đối KHÔNG BỊ BẸT NGANG HAY TO HƠN HỐ ĐEN
      gsap.to(obj.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2.8,
        delay: idx * 0.06,
        ease: 'power3.in',
        onComplete: () => {
          obj.visible = false;
        }
      });
    });

    if (this.water) {
      gsap.to(this.water.position, {
        y: -150,
        duration: 2.8,
        ease: 'power2.in',
        onComplete: () => {
          this.water.visible = false;
        }
      });
    }

    // 5. Người xem (Camera) bị hút: BAN ĐẦU CHẬM TỪ TỪ, SAU LAO NHANH thẳng qua Chân trời sự kiện
    setTimeout(() => {
      if (audioManager && typeof audioManager.playBlackHoleWarp === 'function') {
        audioManager.playBlackHoleWarp();
      }
    }, 1200);

    // Hiệu ứng bẻ cong trường nhìn FOV (Gravitational Lensing Warp)
    gsap.to(this.camera, {
      fov: 98,
      duration: 3.4,
      ease: 'power3.in',
      onUpdate: () => this.camera.updateProjectionMatrix()
    });

    // Rung lắc nhẹ góc nhìn camera (Gravitational Buffeting) do gia tốc hút cực lớn
    gsap.to(this.camera.rotation, {
      z: 0.08,
      duration: 1.7,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut'
    });

    console.log("🚀 HÚT GÓC NHÌN CAMERA VÀO TRONG HỐ ĐEN: Vệt sáng lướt qua hai bên và phía sau tạo cảm giác lao tới!");
      
    // Camera bị lực hấp dẫn hút từ vị trí hiện tại xuyên thẳng qua tâm Hố đen (z = 0) sang phía sau (z = -45)
    gsap.to(this.camera.position, {
      x: 0,
      y: 12,
      z: -45,
      duration: 3.5,
      ease: 'power3.in', // BAN ĐẦU CHẬM TỪ TỪ, SAU LAO NHANH
      onComplete: () => {
        // Trả FOV về bình thường khi bước sang Vũ trụ Kỷ niệm Quả cầu ảnh
        this.camera.fov = 60;
        this.camera.updateProjectionMatrix();

        // Đặt camera vào tâm không gian Quả cầu ảnh 3D (z = 36)
        this.camera.position.set(0, 12, 36);
        this.camera.rotation.set(0, 0, 0);
        if (this.blackHoleGroup) this.blackHoleGroup.visible = false;
        if (this.suctionStreamers) this.suctionStreamers.visible = false;
        if (this.birthFlashGroup) this.birthFlashGroup.visible = false;
        if (this.water) this.water.visible = false;
        if (this.stars) this.stars.visible = false;
        if (this.spaceStarfield) this.spaceStarfield.visible = true;
        objectsToSuck.forEach(obj => { if (obj) obj.visible = false; });

        // Nền trời sao đen thẳm sâu huyền bí cho Quả cầu ảnh 3D
        this.scene.background.setRGB(0.001, 0.002, 0.005);
        this.scene.fog.color.setRGB(0.001, 0.002, 0.005);
        if (this.bloomPass) this.bloomPass.strength = 0.4;

        if (this.photoSphere) this.photoSphere.show();
        if (onWarpComplete) onWarpComplete();
      }
    });
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if(this.composer) this.composer.setSize(window.innerWidth, window.innerHeight);
  }
}
