
const canvasBG = document.getElementById("signalBackground");
const ctxBG = canvasBG.getContext("2d");

let width;
let height;
let lastTime = 0;
let elapsed = 0;

const waves = [];
const staticParticles = [];

const WAVE_COUNT = 5;
const STATIC_DENSITY = 0.00012;


// Random number helper
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Create waveform
function createWave(index) {
    return {
        amplitude: random(15, 45),
        frequency: random(0.006, 0.025),
        speed: random(0.3, 1.2),
        phase: random(0, Math.PI * 2),

        opacity: random(0.02, 0.06),
        offset: index * 35,

        distortion: random(2, 9),
        secondaryFrequency: random(0.02, 0.06),

        thickness: random(0.7, 1.8)
    };
}

// Create static particle
function createStatic() {
    return {
        x: random(0, width),
        y: random(0, height),
        size: random(0.5, 1.5),
        opacity: random(0.05, 0.5),
        flicker: random(1, 5)
    };
}

// Resize canvasBG
function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvasBG.width = width * dpr;
    canvasBG.height = height * dpr;

    ctxBG.setTransform(dpr, 0, 0, dpr, 0, 0);

    staticParticles.length = 0;

    const particleCount = Math.floor(
        width * height * STATIC_DENSITY
    );

    for (let i = 0; i < particleCount; i++) {
        staticParticles.push(createStatic());
    }
}

for (let i = 0; i < WAVE_COUNT; i++) {
    waves.push(createWave(i));
}

window.addEventListener("resize", resize);
resize();

// Draw waveform
function drawWaves() {
    const centerY = height / 2;

    for (const wave of waves) {

        ctxBG.beginPath();

        for (let x = 0; x <= width; x += 2) {

            // Main waveform
            const mainWave =
                Math.sin(
                    x * wave.frequency +
                    elapsed * wave.speed +
                    wave.phase
                ) * wave.amplitude;

            // Secondary waveform creates interference
            const interference =
                Math.sin(
                    x * wave.secondaryFrequency -
                    elapsed * wave.speed * 1.8
                ) * wave.distortion;

            // Combine both waveforms
            const y =
                centerY +
                mainWave +
                interference +
                wave.offset;

            if (x === 0) {
                ctxBG.moveTo(x, y);
            } else {
                ctxBG.lineTo(x, y);
            }
        }

        // Glow layer
        ctxBG.strokeStyle =
            `rgba(180, 195, 170, ${wave.opacity * 0.25})`;

        ctxBG.lineWidth = wave.thickness * 5;
        ctxBG.stroke();

        // Main waveform
        ctxBG.strokeStyle =
            `rgba(180, 195, 170, ${wave.opacity})`;

        ctxBG.lineWidth = wave.thickness;
        ctxBG.stroke();
    }
}

// Draw radio static
function drawStatic() {
    for (const particle of staticParticles) {

        const flicker =
            Math.abs(Math.sin(elapsed * particle.flicker));

        ctxBG.fillStyle =
            `rgba(180, 195, 170, ${particle.opacity * flicker})`;

        ctxBG.fillRect(
            particle.x,
            particle.y,
            particle.size,
            particle.size
        );
    }
}

// Animation
function animate(timestamp) {
    const delta = Math.min(
        (timestamp - lastTime) / 1000 || 0,
        0.05
    );

    lastTime = timestamp;
    elapsed += delta;

    ctxBG.clearRect(0, 0, width, height);

    drawWaves();
    drawStatic();

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
