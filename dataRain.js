
const canvas = document.getElementById("dataRain");
const ctx = canvas.getContext("2d");

const FONT_SIZE = 14;
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+-<>/{}[]";

const streams = [];

let width;
let height;
let columns;
let lastTime = 0;

function randomChar() {
    return CHARACTERS[
        Math.floor(Math.random() * CHARACTERS.length)
    ];
}

// Create a falling stream
function createStream(x, startAnywhere = false) {
    const length = Math.floor(Math.random() * 15) + 5;

    return {
        x,
        y: startAnywhere
            ? Math.random() * height
            : -Math.random() * height,
        speed: 35 + Math.random() * 85,
        length,
        chars: Array.from({ length }, randomChar),
        previousStep: 0
    };
}

// Resize canvas
function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    columns = Math.ceil(width / FONT_SIZE);

    streams.length = 0;

    for (let i = 0; i < columns; i++) {
        // Leave some gaps between streams
        if (Math.random() > 0.35) {
            streams.push(createStream(i * FONT_SIZE, true));
        }
    }

    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, width, height);
}

window.addEventListener("resize", resize);
resize();

// Draw animation
function animate(timestamp) {
    const delta = Math.min((timestamp - lastTime) / 1000 || 0, 0.05);
    lastTime = timestamp;

    // Fade previous frames to create trails
    ctx.fillStyle = "rgba(5, 5, 5, 1)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${FONT_SIZE}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (const stream of streams) {

        stream.y += stream.speed * delta;

        // Change characters as the stream advances
        const currentStep = Math.floor(stream.y / FONT_SIZE);

        if (currentStep !== stream.previousStep) {
            stream.chars.pop();
            stream.chars.unshift(randomChar());
            stream.previousStep = currentStep;
        }

        // Reset after leaving the screen
        if (stream.y - stream.length * FONT_SIZE > height) {
            stream.y = -Math.random() * height;
            stream.speed = 35 + Math.random() * 85;
            stream.length = Math.floor(Math.random() * 15) + 5;
            stream.chars = Array.from(
            { length: stream.length },
            randomChar
            );
        }

        // Draw each character in the stream
        for (let i = 0; i < stream.length; i++) {

            const charY = stream.y - i * FONT_SIZE;

            if (charY < 0 || charY > height) continue;

            const fade = 1 - i / stream.length;

            // Mostly muted gray, occasional orange
            const orange = i === 0 || Math.random() < 0.025;

            if (orange) {
                ctx.fillStyle = `rgba(255, 129, 40, ${fade * 0.9})`;
                ctx.shadowColor = "#ff8128";
                ctx.shadowBlur = i === 0 ? 9 : 4;
            } else {
                ctx.fillStyle = `rgba(150, 155, 160, ${fade * 0.35})`;
                ctx.shadowBlur = 0;
            }

            ctx.fillText(
                stream.chars[i],
                stream.x,
                charY
            );
        }
    }

    ctx.shadowBlur = 0;

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
