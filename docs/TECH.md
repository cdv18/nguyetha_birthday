# 🔧 Nguyệt Hà Birthday — Technical Documentation

> Tài liệu kỹ thuật chi tiết (Technical Doc) — Phiên bản 1.0.0

---

## 1. Kiến Trúc Hệ Thống

### 1.1 Sơ đồ Module

```
┌──────────────────────────────────────────────────────────────────┐
│                        index.html                                │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                     src/main.js                            │  │
│  │               (Timeline Director, Entry Point)             │  │
│  │                                                            │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐  │  │
│  │  │ gl/Scene.js  │  │  audio.js    │  │ canvas-confetti│  │  │
│  │  │ SceneManager │  │ AudioManager │  │   (npm pkg)    │  │  │
│  │  │  (1390 LOC)  │  │  (771 LOC)   │  └────────────────┘  │  │
│  │  │              │  │              │                        │  │
│  │  │  ┌─────────┐ │  │ Web Audio    │  ┌────────────────┐  │  │
│  │  │  │PhotoSph.│ │  │ API only     │  │interactions/   │  │  │
│  │  │  │(527 LOC)│ │  │ (no files)   │  │  mic.js (326)  │  │  │
│  │  │  └─────────┘ │  └──────────────┘  │  hand.js (381) │  │  │
│  │  └──────────────┘                     └────────────────┘  │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
         ▼                    ▼                    ▼
    Three.js 0.160       Web Audio API      MediaPipe CDN
    + PostProcessing     (AudioContext)      (FaceMesh, Hands)
    + Water module
```

### 1.2 Cấu trúc thư mục

```
nguyetha_birthday/
├── .github/workflows/
│   └── deploy.yml                  # GitHub Actions → GitHub Pages
├── public/
│   ├── favicon.png                 # 2,578,576 bytes
│   └── favicon.svg                 # 1,289 bytes
├── src/
│   ├── assets/nh/                  # 13 ảnh JPG (~41.4 MB)
│   ├── gl/
│   │   ├── Scene.js                # 1,390 lines — 54,912 bytes
│   │   └── PhotoSphere.js          # 527 lines — 19,317 bytes
│   ├── interactions/
│   │   ├── hand.js                 # 381 lines — 14,161 bytes
│   │   └── mic.js                  # 326 lines — 11,587 bytes
│   ├── audio.js                    # 771 lines — 29,002 bytes
│   ├── main.js                     # 347 lines — 14,396 bytes
│   └── style.css                   # 51 lines — 1,505 bytes
├── index.html                      # 34 lines — 1,393 bytes
├── package.json                    # 20 lines
├── vite.config.js                  # 9 lines
└── .gitignore                      # 31 lines
```

### 1.3 Thống kê code

| File | Lines | Bytes | % LOC |
|---|---|---|---|
| `gl/Scene.js` | 1,390 | 54,912 | 36.3% |
| `audio.js` | 771 | 29,002 | 20.2% |
| `gl/PhotoSphere.js` | 527 | 19,317 | 13.8% |
| `interactions/hand.js` | 381 | 14,161 | 10.0% |
| `main.js` | 347 | 14,396 | 9.1% |
| `interactions/mic.js` | 326 | 11,587 | 8.5% |
| `style.css` | 51 | 1,505 | 1.3% |
| `index.html` | 34 | 1,393 | 0.9% |
| **Tổng** | **3,827** | **146,273** | **100%** |

---

## 2. Tech Stack & Dependencies

### 2.1 NPM Packages

```json
{
  "devDependencies": {
    "vite": "^5.0.0"
  },
  "dependencies": {
    "gsap": "^3.12.5",
    "three": "^0.160.0",
    "canvas-confetti": "^1.9.2"
  }
}
```

### 2.2 Build System

- **Bundler**: Vite 5 (ES Module dev server + Rollup production build)
- **Module Type**: ES Modules (`"type": "module"`)
- **Base URL**: `./` (relative paths cho GitHub Pages)
- **Output**: `dist/`

```js
// vite.config.js
export default defineConfig({
  base: './',
  build: { outDir: 'dist' }
})
```

### 2.3 External Runtime Dependencies (CDN, Dynamic Load)

| Library | CDN URL | Loaded khi |
|---|---|---|
| `@mediapipe/face_mesh` | `cdn.jsdelivr.net/npm/@mediapipe/face_mesh/` | ACT 2 — Thổi nến |
| `@mediapipe/hands` | `cdn.jsdelivr.net/npm/@mediapipe/hands/` | ACT 5 — Photo Sphere |
| `@mediapipe/camera_utils` | `cdn.jsdelivr.net/npm/@mediapipe/camera_utils/` | Cùng face_mesh/hands |

### 2.4 Remote Textures

| Texture | Source URL |
|---|---|
| Moon | `https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg` |
| Water Normals | `https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg` |

### 2.5 Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
```

---

## 3. Module: SceneManager (`src/gl/Scene.js`)

### 3.1 Class `SceneManager`

**Kích thước**: 1,390 lines | **Import**: Three.js, GSAP, EffectComposer, UnrealBloomPass, Water, PhotoSphere

#### Constructor Properties

```js
this.scene           // THREE.Scene (background: #010205, FogExp2)
this.camera          // PerspectiveCamera (fov=60, near=0.1, far=3000)
this.renderer        // WebGLRenderer (antialias: false, ACES Filmic, exposure: 1.2)
this.clock           // THREE.Clock
this.stars           // THREE.Points (8000 particles)
this.moon            // THREE.Mesh (SphereGeometry r=25)
this.water           // Water module (2000x2000 plane)
this.shootingStars   // Array<{mesh, speed}> (5 items)
this.cakeGroup       // THREE.Group (tiny moon + candle + flame)
this.flameLight      // THREE.PointLight
this.flameMesh       // THREE.Mesh (flame sphere)
this.composer        // EffectComposer
this.bloomPass       // UnrealBloomPass
this.birdMats        // Array<Material> (bird body + wing materials)
this.photoSphere     // PhotoSphere instance
this.sparklingPoint  // THREE.Group (light point)
this.blackHoleGroup  // THREE.Group (full black hole system)
this.accretionUniforms  // Shader uniforms
this.accretionEmbers    // THREE.Points (12000 particles)
this.lensingUniforms    // Shader uniforms
```

#### Initialization (`init(container)`)

```
Renderer setup (pixel ratio cap 2, ACES tone mapping)
    → EffectComposer + RenderPass + UnrealBloomPass
    → createStars() → 8000 points + heart morph targets
    → createMoon() → sphere + halo + lights
    → createWater() → Water module + normals texture
    → createShootingStars() → 5 cones
    → createTextMeshes() → all text sprites
    → createCake() → moon ball + candle + flame
    → createInkScene() → mountains + ink moon + birds + petals + poems
    → PhotoSphere(scene, camera)
    → createSparklingLightPoint()
    → createRealisticBlackHoleSingularity()
    → createSpaceStarfield()
    → Camera initial position (0, 5, 600)
```

#### Text Sprite System

```js
createTextSprite(message, font, size, color, spacing, worldHeight)
// Canvas2D → CanvasTexture → PlaneGeometry → MeshBasicMaterial (transparent, depthWrite: false)
// Power-of-two canvas dimensions, centered text

updateTextSprite(mesh, message, font, size, color, spacing)
// Re-render text on existing canvas texture

updateTextSpriteWriting(mesh, progress)
// Ink writing effect: clip-rect from left→right based on progress (0→1)
```

#### Procedural Textures (Canvas2D)

| Texture | Method | Size | Technique |
|---|---|---|---|
| Mountain silhouette | `createProceduralMountain()` | 1024×512 | Multi-frequency sine wave contour |
| Ink Moon | `createInkMoonTexture()` | 512×512 | Brush strokes loop + splatter + radial gradient |
| Swallow Body | `createSwallowBodyTexture()` | 64×128 | Quadratic curves + shadow |
| Swallow Wing | `createSwallowWingTexture()` | 128×64 | Quadratic curves + shadow |
| Cherry Petal | `createPetalTexture()` | 64×64 | Bezier curve + linear gradient |

#### GLSL Custom Shaders (3 total)

**Shader 1: Gravitational Lensing Halo** (PlaneGeometry 36×36)
```glsl
// Uniforms: uTime
// Photon ring: exp(-pow((dist - 0.31) * 24.0, 2.0)) * 2.8
// Soft atmosphere: exp(-(dist - 0.31) * 3.6) * smoothstep(0.25, 0.35, dist)
// Color: mix(gold, cyan) oscillating with sin(uTime * 1.5)
// Blending: Additive, transparent, no depthWrite
```

**Shader 2: Accretion Disk** (RingGeometry 5.4→38.0, 128×64 segments)
```glsl
// Uniforms: uTime
// Doppler Beaming: 1.0 + 0.72 * sin(angle - 0.4)
// 3-layer spiral gas: sin(5θ), cos(11θ), sin(21θ) with radius+time modulation
// Temperature gradient: white → amber → crimson based on radius
// Fade: smoothstep inner + exponential outer (NO hard edge)
// Rotation: x = PI/2.55, y = 0.15
```

**Shader 3: Polar Light Arch** (PlaneGeometry 28×28)
```glsl
// Top arch: exp(-pow((dist - 0.42) * 12.0, 2.0)) * smoothstep(sin(angle))
// Bottom arch: similar, weaker (0.6x), offset radius (0.46)
// Color: gold (1.0, 0.78, 0.25)
```

#### Black Hole System (`createRealisticBlackHoleSingularity()`)

```
blackHoleGroup (Group, position: 0,12,0)
├── Event Horizon (SphereGeometry r=5.2, pure black)
├── Lensing Halo (PlaneGeometry 36×36, ShaderMaterial #1)
├── Accretion Disk (RingGeometry 5.4→38, ShaderMaterial #2, tilted)
├── Polar Light Arch (PlaneGeometry 28×28, ShaderMaterial #3)
└── Accretion Embers (Points, 12000 particles, custom vertex/fragment shader)

suctionStreamers (LineSegments, 2500 lines, separate from group)

birthFlashGroup (Group, position: 0,12,0)
├── Flash Core (SphereGeometry r=1, white Additive)
└── Shockwave (TorusGeometry r=2, cyan Additive)
```

#### Particle Systems

| System | Count | Type | Update |
|---|---|---|---|
| Stars | 8,000 | Points (PointsMaterial, vertex colors) | Slow Y rotation |
| Space Starfield | 4,500 + 800 dust | Points (PointsMaterial, vertex colors + Additive) | Slow Y rotation |
| Accretion Embers | 12,000 | Points (ShaderMaterial, vertex colors + sizes) | Y + Z rotation |
| Suction Streamers | 2,500 | LineSegments (vertex colors, Additive) | Z position += warpVelocity, wrap |
| Shooting Stars | 5 | Mesh (CylinderGeometry) | X/Y position animation |
| Cherry Petals | 150 | Mesh (PlaneGeometry) | X/Y position + XYZ rotation |

#### Scene Transitions

| Transition | Method | Key Changes |
|---|---|---|
| **→ Ink Wash** | `transitionToInkWash()` | Bloom→0, bg→parchment, stars fade, moon shrink, water color, mountains rise, ink moon fade in, birds appear |
| **→ Dawn** | `transitionToDawn()` | Bloom→1.2, bg→sunset, mountains/birds/petals fade out, stars→heart morph, moon glow, camera pullback z→120 |
| **→ Black Hole** | `triggerBlackHoleSuction()` | Bloom→0.35, bg→deep black, birth flash, BH scale in, streamers on, objects spiral-sucked (power3.in), camera warp through, FOV→98°, then reset to PhotoSphere |

#### Update Loop (`update()`)

```
Per frame:
  stars.rotation.y += 0.005t
  moon.rotation.y += 0.05t, position.y oscillation
  water time uniform increment
  birds: position + wing flap animation (conditional)
  petals: position + rotation (conditional, wrap Y)
  shooting stars: position animation (wrap X)
  cake: moon rotation + flame flicker (conditional)
  photoSphere.update()
  sparklingPoint: rotation + scale pulse (conditional)
  spaceStarfield: slow rotation (conditional)
  blackHoleGroup: rotation + shader uniforms + embers rotation (conditional)
  suctionStreamers: Z position warp + wrap (conditional)
  composer.render() or renderer.render()
```

---

## 4. Module: CinematicAudioManager (`src/audio.js`)

### 4.1 Architecture

```
                              ┌──────────────────┐
                              │   Oscillators    │
                              │   (sine, saw,    │
                              │   triangle)      │
                              └────────┬─────────┘
                                       │
                              ┌────────▼─────────┐
                              │  BiquadFilter    │
                              │  (lowpass, LFO)  │
                              └────────┬─────────┘
                                       │
            ┌──────────────────────────┼──────────────────────┐
            │                          │                      │
   ┌────────▼─────────┐      ┌────────▼─────────┐   ┌───────▼──────┐
   │    Gain Node      │      │   Reverb Bus     │   │  Noise Buffer│
   └────────┬─────────┘      │ (Delay L 0.28s   │   │ (Pink/White) │
            │                 │  Delay R 0.42s   │   └───────┬──────┘
            │                 │  Feedback 0.35   │           │
            │                 │  LP Filter 1600) │           │
            │                 └────────┬─────────┘           │
            │                          │                      │
   ┌────────▼──────────────────────────▼──────────────────────▼──┐
   │                  DynamicsCompressor                         │
   │  (threshold: -18dB, knee: 30, ratio: 4, attack: 5ms,       │
   │   release: 250ms)                                           │
   └────────────────────────┬────────────────────────────────────┘
                            │
                   ┌────────▼─────────┐
                   │   Master Gain    │
                   │   (0.88)         │
                   └────────┬─────────┘
                            │
                   ┌────────▼─────────┐
                   │   Destination    │
                   │   (Speakers)     │
                   └──────────────────┘
```

### 4.2 Scene State Machine

```
none → space → inkwash → dawn
```

Each transition fades out previous ambient and starts new score.

### 4.3 Sound Palette

| Sound | Method | Duration | Technique |
|---|---|---|---|
| Star Click Glow | `playStarClickGlow()` | 1.8s | Whoosh + Dmaj Rhodes |
| Moon Approach | `playMoonApproachWhoosh()` | 6.0s | Pink noise sweep 120→980→250Hz + Sub 42→92→48Hz |
| Camera Whoosh | `playCameraWhoosh(dur, int, dir)` | 2-6s | Noise + filter sweep + sub glide |
| Warp Whoosh | `playWarpWhoosh()` | 3.2s | Whoosh + sub drop 140→32Hz |
| Title Chime | `playTitleChime()` | 4.0s | Dmaj7 Rhodes (D3,F#3,A3,C#4) |
| Year Count | `startYearCount()` / `stopYearCount()` | loop/4.5s | Warm pulse 200ms + resolution swell |
| Whispers (×5) | `playWhisper(i)` | 4.2s | 5 different warm chord inversions |
| Cake Approach | `playCakeApproachWhoosh()` | 6.0s | Whoosh + triangle glow hum |
| Candle Blow | `playCandleBlow()` | 4.0s | White noise puff + fade chord |
| Ink Wash Score | `startInkWashCinematicScore()` | continuous | Quartal pad (D3,A3,D4,G4) + LFO |
| Dive Whoosh | `startInkWashDiveWhoosh()` | 21s | Sustained rush + ridge LFO 0.18Hz |
| Poem Chimes (×2) | `playPoemChime(i)` | 4.5-5.0s | Different chord inversions |
| Dawn Transition | `transitionToDawn()` | 14s auto-fade | D Major wide pad + sunrise filter |
| Confetti Sparkles | `playConfettiSparkles()` | 6.0s | 5-voice Rhodes chord |
| BH Suction | `playBlackHoleSuction()` | 6.0s | Sawtooth rumble + suction whoosh |
| BH Warp | `playBlackHoleWarp()` | 6.0s | Ultra whoosh + 5-voice chord |
| Photo Open | `playPhotoSphereOpen()` | 3.0s | High Rhodes + mini whoosh |
| Photo Close | `playPhotoSphereClose()` | 2.5s | Soft Rhodes |
| Photo Enlarge | `playPhotoEnlarge()` | 4.5s | 5-voice Rhodes + whoosh |

### 4.4 Core Sound Builders

```js
playCinematicRhodes(freqs[], time, volume, decay)
// Triangle oscillators → lowpass (freq*3.2 → freq*1.3 in 0.5s) → gain envelope → compressor + reverb

playWarmPulse(freq, time, volume, duration)
// Sine → lowpass 380Hz → gain envelope → compressor

createNoiseBuffer(type, duration)
// type='white': Math.random()*2-1
// type='pink': Paul Kellet 7-variable filtered algorithm
```

---

## 5. Module: PhotoSphere (`src/gl/PhotoSphere.js`)

### 5.1 Asset Loading

```js
const photoUrlsMap = import.meta.glob('/src/assets/nh/*', { eager: true, query: '?url', import: 'default' });
const photoUrls = Object.values(photoUrlsMap);
// Vite handles bundling all 13 images automatically
```

### 5.2 State Machine

```
          OPEN_PALM              POINTING (1s dwell)
SPHERE ─────────────→ GALLERY ────────────────────→ FULLVIEW
  ↑                      │                              │
  │      FIST             │         FIST/OPEN_PALM/ESC  │
  └──────────────────────┘              │               │
  ↑                                     └───────────────┘
  │              FIST/OPEN_PALM/ESC (previousState=SPHERE)
  └─────────────────────────────────────────────────────┘
```

### 5.3 Layout Algorithms

**Fibonacci Sphere** (SPHERE mode):
```js
const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio
y = 1 - (i / (count-1)) * 2;             // -1 to 1
radiusAtY = sqrt(1 - y*y);
theta = phi * i;
position = (cos(θ)*radiusAtY*R, y*R, sin(θ)*radiusAtY*R);
```

**Gallery** (GALLERY mode):
```js
spacing = 11.5;
galleryX = (i - (count-1)/2) * spacing;
position = (galleryX, 0, 15);
```

### 5.4 Card Structure

```
cardGroup (Group)
├── frameMesh (PlaneGeometry 9.6×6.8, cyan wireframe, opacity 0.15)
└── photoMesh (PlaneGeometry 9.2×6.4, texture, transparent)
    userData: { index, spherePos, sphereRot, galleryPos, cardGroup, frameMesh }
```

### 5.5 Interaction: Zoom to Cursor

```js
zoomAtCursor(cursorX, cursorY, zoomDelta):
  NDC = cursor * 2 - 1
  Raycaster.setFromCamera(NDC, camera)
  targetPos = camera.position + rayDirection * step
  Clamp: z ∈ [15, 48], x ∈ [-18, 18], y ∈ [0, 24]
  GSAP tween camera.position (0.4s)
```

---

## 6. Module: Blow Detection (`src/interactions/mic.js`)

### 6.1 MediaPipe FaceMesh Pipeline

```
getUserMedia(video 320×240) → <video> element → FaceMesh.send({image}) per frame
    → onResults: 478 landmarks → lip pucker detection:
        faceWidth = dist(landmark[234], landmark[454])
        mouthWidth = dist(landmark[61], landmark[291])
        mouthHeight = dist(landmark[13], landmark[14])
        puckerRatio = mouthWidth / faceWidth
        oShapeRatio = mouthHeight / mouthWidth
        IF puckerRatio < 0.285 AND oShapeRatio > 0.235:
            puckerFrameCount++ (need 3 consecutive)
```

### 6.2 Microphone Wind Detection

```
getUserMedia(audio) → AudioContext → AnalyserNode (FFT 1024, smoothing 0.8)
    → ScriptProcessor (2048 samples):
        getByteFrequencyData → average
        IF average > 38: TRIGGER
```

### 6.3 UI: Glassmorphism HUD

```css
/* Smart Blow HUD */
position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
background: rgba(12, 18, 36, 0.82);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.22);
border-radius: 50px;
/* Contains: cam LED + text, divider, mic LED + text, divider, skip button */
```

---

## 7. Module: Hand Gesture (`src/interactions/hand.js`)

### 7.1 MediaPipe Hands Pipeline

```
getUserMedia(video 640×480) → <video> → Hands.send({image}) per frame
    → onResults: 21 landmarks → gesture classification:
        → Cursor position: landmark[8] (index finger tip), mirror X
        → Smoothing: pos = prev*0.7 + raw*0.3
        → Pinch zoom: Δ(dist(landmark[4], landmark[8])) * 40
```

### 7.2 Gesture Classification Algorithm

```js
classifyHandGesture(landmarks):
  dist(a,b) = hypot(a.x-b.x, a.y-b.y)

  // Priority 0: PINCH_GRAB
  IF dist(thumb[4], index[8]) < 0.12
     AND (dist(thumb[4], middle[12]) < 0.15 OR dist(index[8], middle[12]) < 0.10):
    RETURN 'PINCH_GRAB'

  // Finger extension check: tip-to-wrist > pip-to-wrist * 1.25
  indexExt  = dist(tip[8],  wrist[0]) > dist(pip[6],  wrist[0]) * 1.25
  middleExt = dist(tip[12], wrist[0]) > dist(pip[10], wrist[0]) * 1.25
  ringExt   = dist(tip[16], wrist[0]) > dist(pip[14], wrist[0]) * 1.25
  pinkyExt  = dist(tip[20], wrist[0]) > dist(pip[18], wrist[0]) * 1.25

  IF all extended: RETURN 'OPEN_PALM'
  IF only index:   RETURN 'POINTING'
  IF none extended: RETURN 'FIST'
  IF index extended: RETURN 'POINTING' // fallback
  RETURN 'NONE'
```

### 7.3 Mouse/Keyboard Fallback

| Input | Mapped Gesture | Details |
|---|---|---|
| Mouse move | POINTING | Cursor follows mouse position |
| Mouse drag (hold) | PINCH_GRAB | Click+hold = grab/rotate |
| Scroll wheel | Zoom | deltaY → ±1.2 zoomDelta |
| Key `1` | POINTING | — |
| Key `2` | PINCH_GRAB | — |
| Key `3` | OPEN_PALM | — |
| Key `4` | FIST | — |

### 7.4 UI: Holographic Cursor

```
cursor (fixed, z-index: 100000)
├── SVG ring (r=18, stroke white 2px)
│   └── Dwell progress circle (r=18, stroke cyan 3px, dasharray 113)
├── Core dot (16×16, cyan, box-shadow cyan+blue glow)
└── Gesture badge (absolute bottom, black bg, rounded pill)
```

---

## 8. CSS Architecture (`src/style.css`)

### 8.1 Design Tokens

```css
:root {
  --space-black: #010205;
  --moon-white: #fdfbf7;
  --font-body: 'Playfair Display', serif;  /* declared but Montserrat used in practice */
  --font-ui: 'Montserrat', sans-serif;
}
```

### 8.2 Layout Structure

```
body, html (100vw × 100vh, overflow: hidden, user-select: none)
├── #canvas-container (absolute, z-index: 1, 100vw × 100vh)
│   └── <canvas> (Three.js WebGL)
└── #app (absolute, z-index: 10, pointer-events: none)
    └── .ui-layer (absolute, flex center)
        └── .star-container (pointer-events: auto)
            ├── .breathing-star (4×4px, animation: breathe 3s)
            └── .hint-text (Montserrat 14px, uppercase, letter-spacing 4px)
```

---

## 9. CI/CD Pipeline

### 9.1 GitHub Actions Workflow

**File**: `.github/workflows/deploy.yml`

```yaml
Trigger: push to main/master
Runner: ubuntu-latest
Steps:
  1. actions/checkout@v4
  2. actions/setup-node@v4 (node 20)
  3. npm install
  4. npm run build (vite build → dist/)
  5. peaceiris/actions-gh-pages@v3 (deploy dist/ to gh-pages branch)
```

**Permissions**: `contents: write`

---

## 10. Performance

### 10.1 Rendering Optimizations

| Optimization | Implementation |
|---|---|
| Pixel ratio cap | `Math.min(window.devicePixelRatio, 2)` |
| Antialiasing disabled | `antialias: false` |
| GPU preference | `powerPreference: "high-performance"` |
| Tone mapping | `THREE.ACESFilmicToneMapping`, exposure 1.2 |
| Texture filter | `THREE.LinearFilter` (no mipmaps for canvas textures) |
| Depth write | Disabled for all transparent/additive materials |
| Conditional updates | Bird/petal/BH animations only run when visible (opacity > 0) |
| Post-processing | Single bloom pass (no SSAO, no DOF) |

### 10.2 Memory Considerations

| Category | Estimate |
|---|---|
| Photo textures (13 × ~4MP) | ~200 MB GPU (uncompressed RGBA) |
| Particle buffers | ~2 MB |
| Canvas textures (text, mountains, birds, petals, ink moon) | ~10 MB |
| Three.js scene graph | ~5 MB |
| AudioContext buffers | ~2 MB |

### 10.3 Network

| Resource | Size | Load Strategy |
|---|---|---|
| JS bundle (Vite) | ~300 KB (gzip) | Immediate |
| Photo assets | ~41 MB | Immediate (Vite import.meta.glob eager) |
| Remote textures | ~1 MB | Async (TextureLoader) |
| MediaPipe models | ~5-10 MB | Lazy CDN (only when needed) |
| Google Fonts | ~100 KB | Preconnect + async CSS |

> **Warning**: Ảnh ~41MB loaded eager sẽ chặn render ban đầu. Cần chuyển sang lazy loading hoặc nén ảnh.

---

## 11. Known Technical Debt

| # | Issue | Severity | Suggestion |
|---|---|---|---|
| 1 | Ảnh 41MB loaded eager qua `import.meta.glob` | 🔴 High | Lazy load + resize images to 1920px max |
| 2 | Favicon.png 2.5MB | 🟡 Medium | Compress to <100KB |
| 3 | `ScriptProcessorNode` deprecated | 🟡 Medium | Migrate to `AudioWorkletNode` |
| 4 | No error boundary for WebGL context loss | 🟡 Medium | Add `webglcontextlost` handler |
| 5 | CSS variable `--font-body` declared as Playfair but Montserrat used everywhere | 🟢 Low | Fix declaration or remove |
| 6 | `loadScript()` duplicated in both `mic.js` and `hand.js` | 🟢 Low | Extract to shared utility |
| 7 | No loading progress indicator for photos | 🟢 Low | Add loading bar/percentage |
| 8 | Debug `skipTo*` functions exposed in production | 🟢 Low | Guard with `if (import.meta.env.DEV)` |
