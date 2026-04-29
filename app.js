// ── Particle Background ──
(function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const COUNT = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.5,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
            alpha: Math.random() * 0.4 + 0.1,
        };
    }

    function init() {
        resize();
        particles = Array.from({ length: COUNT }, createParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
            ctx.fill();
        }

        // Draw faint connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    init();
    draw();
})();

// ── Screen Navigation ──
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ── Build Career Cards ──
function renderCareerCards() {
    const grid = document.getElementById('career-grid');
    grid.innerHTML = '';

    CAREERS.forEach((career, index) => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Select ${career.title}`);
        card.style.setProperty('--card-color', career.color);
        card.style.setProperty('--card-glow', career.color + '20');
        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `
      <span class="card-icon" aria-hidden="true">${career.icon}</span>
      <p class="card-title">${career.title}</p>
      <p class="card-hint">${career.milestones.length} milestones · ${career.skills.length} skills</p>
    `;

        card.addEventListener('click', () => openJourney(career));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openJourney(career);
            }
        });

        grid.appendChild(card);
    });
}

// ── Open Journey ──
function openJourney(career) {
    const root = document.documentElement;
    root.style.setProperty('--tl-color', career.color);

    document.getElementById('journey-icon').textContent = career.icon;
    document.getElementById('journey-title').textContent = `Your ${career.title} Journey`;
    document.getElementById('journey-quote').textContent = career.quote;

    // Build timeline
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    career.milestones.forEach((m, i) => {
        const item = document.createElement('div');
        item.className = 'tl-item';
        item.setAttribute('role', 'listitem');
        item.innerHTML = `
      <span class="tl-dot" aria-hidden="true">${m.icon}</span>
      <p class="tl-year">${m.year}</p>
      <h3 class="tl-title">${m.title}</h3>
      <p class="tl-desc">${m.description}</p>
    `;
        timeline.appendChild(item);

        // Staggered reveal
        setTimeout(() => item.classList.add('visible'), 200 + i * 150);
    });

    // Build skills
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';

    career.skills.forEach((skill, i) => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        tag.style.borderColor = career.color + '60';
        skillsList.appendChild(tag);

        const delay = 200 + career.milestones.length * 150 + i * 100;
        setTimeout(() => tag.classList.add('visible'), delay);
    });

    showScreen('journey');

    // Scroll to top of journey content
    document.getElementById('journey').scrollTop = 0;
}

// ── Event Listeners ──
document.getElementById('btn-start').addEventListener('click', () => {
    showScreen('careers');
});

document.getElementById('btn-back').addEventListener('click', () => {
    showScreen('careers');
});

document.getElementById('btn-restart').addEventListener('click', () => {
    showScreen('careers');
});

// ── Init ──
renderCareerCards();
