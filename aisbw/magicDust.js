const canvas = document.getElementById("magicDust");
const ctx = canvas.getContext("2d");

const PARTICLE_DENSITY = 0.00025;
let PARTICLE_COUNT;
const particles = [];

let width;
let height;
let lastTime = 0;

const mouse = {
    x: -1000,
    y: -1000,
    radius: 75
};

window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener("mouseout", (event) => {
    if (!event.relatedTarget) {
        mouse.x = -1000;
        mouse.y = -1000;
    }
});

// Create a particle
function createParticle(randomY = true) {
    return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : height + 10,

        radius: Math.random() * 1.8 + 0.5,

        speedX: (Math.random() - 0.5) * 12,
        speedY: -(Math.random() * 10 + 3),
        velocityX: 0,
        velocityY: 0,

        opacity: 0,
        targetOpacity: Math.random() * 0.5 + 0.15,

        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 2 + 1,

        fadingOut: false
        
    };
}

// Resize canvas
function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    PARTICLE_COUNT = Math.floor(
        width * height * PARTICLE_DENSITY
    );

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Only create particles if we don't have enough
    // Add new particles
    while (particles.length < PARTICLE_COUNT) {
        particles.push(createParticle());
    }

    // Mark excess particles for removal
    let excess = particles.length - PARTICLE_COUNT;

    for (let i = particles.length - 1; i >= 0 && excess > 0; i--) {
        if (!particles[i].fadingOut) {
            particles[i].fadingOut = true;
            excess--;
        }
    }
    for (const p of particles) {
        p.x = Math.min(p.x, width);
        p.y = Math.min(p.y, height);
    }
}

window.addEventListener("resize", resize);
resize();

// Animate particles
function animate(timestamp) {
    const delta = Math.min((timestamp - lastTime) / 1000 || 0, 0.05);
    lastTime = timestamp;

    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {

        const fadeSpeed = 0.5 * delta;

        if (p.fadingOut) {
            p.opacity = Math.max(0, p.opacity - fadeSpeed);
        } else {
            p.opacity = Math.min(
                p.targetOpacity,
                p.opacity + fadeSpeed
            );
        }
        // Movement
        p.x += p.speedX * delta;
        p.y += p.speedY * delta;

        // Gentle floating movement
        p.phase += p.twinkleSpeed * delta;

        const twinkle = Math.sin(p.phase) * 0.25;
        const alpha = Math.max(0, p.opacity + twinkle);

        // Wrap particles around the screen
        if (p.y < -10) {
            Object.assign(p, createParticle(false));
        }

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw glowing particle
        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(201, 169, 110, ${alpha})`;

        ctx.shadowColor = "#c9a96e";
        ctx.shadowBlur = p.radius * 5;

        ctx.fill();

        // Cursor interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {

            const force = (1 - distance / mouse.radius) * 1000;

            p.velocityX += (dx / distance) * force * delta;
            p.velocityY += (dy / distance) * force * delta;
        }

        // Gradually reduce the extra velocity
        p.velocityX *= Math.pow(0.95, delta * 60);
        p.velocityY *= Math.pow(0.95, delta * 60);

        // Apply movement
        p.x += (p.speedX + p.velocityX) * delta;
        p.y += (p.speedY + p.velocityY) * delta;
            }

    ctx.shadowBlur = 0;

    
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
