// ====================================
// ADVANCED ANIMATIONS
// ====================================

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initAdvancedAnimations();
  initParticleEffect();
  initFloatingElements();
  initHoverEffects();
  initProgressBars();
  initTextAnimations();
});

// ====================================
// ADVANCED SCROLL ANIMATIONS
// ====================================
function initAdvancedAnimations() {
  // Create intersection observer for better performance
  const observerOptions = {
    threshold: [0.1, 0.3, 0.7],
    rootMargin: '-50px 0px'
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.animation;
        const delay = element.dataset.delay || 0;

        setTimeout(() => {
          triggerAnimation(element, animationType);
        }, delay);
      }
    });
  }, observerOptions);

  // Observe all elements with animation data attributes
  document.querySelectorAll('[data-animation]').forEach(el => {
    animationObserver.observe(el);
  });

  // Add animation attributes to elements
  addAnimationAttributes();
}

function addAnimationAttributes() {
  // Hero elements
  document.querySelector('.hero-title')?.setAttribute('data-animation', 'slideInUp');
  document.querySelector('.hero-subtitle')?.setAttribute('data-animation', 'fadeIn');
  document.querySelector('.hero-description')?.setAttribute('data-animation', 'slideInUp');
  document.querySelector('.hero-buttons')?.setAttribute('data-animation', 'slideInUp');
  document.querySelector('.profile-card')?.setAttribute('data-animation', 'zoomIn');

  // Section elements
  document.querySelectorAll('.section-title').forEach(el => {
    el.setAttribute('data-animation', 'slideInDown');
  });

  document.querySelectorAll('.section-subtitle').forEach(el => {
    el.setAttribute('data-animation', 'fadeIn');
  });

  // Skills
  document.querySelectorAll('.skill-category').forEach((el, index) => {
    el.setAttribute('data-animation', 'slideInUp');
    el.setAttribute('data-delay', index * 200);
  });

  // Projects
  document.querySelectorAll('.project-card').forEach((el, index) => {
    el.setAttribute('data-animation', 'zoomIn');
    el.setAttribute('data-delay', index * 150);
  });

  // Stats
  document.querySelectorAll('.stat-item').forEach((el, index) => {
    el.setAttribute('data-animation', 'bounceIn');
    el.setAttribute('data-delay', index * 100);
  });
}

function triggerAnimation(element, animationType) {
  element.style.animationFillMode = 'both';
  element.style.animationDuration = '0.8s';
  element.style.animationTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

  switch (animationType) {
    case 'fadeIn':
      element.style.animation = 'fadeIn 0.8s ease-out forwards';
      break;
    case 'slideInUp':
      element.style.animation = 'slideInUp 0.8s ease-out forwards';
      break;
    case 'slideInDown':
      element.style.animation = 'slideInDown 0.8s ease-out forwards';
      break;
    case 'slideInLeft':
      element.style.animation = 'slideInLeft 0.8s ease-out forwards';
      break;
    case 'slideInRight':
      element.style.animation = 'slideInRight 0.8s ease-out forwards';
      break;
    case 'zoomIn':
      element.style.animation = 'zoomIn 0.8s ease-out forwards';
      break;
    case 'bounceIn':
      element.style.animation = 'bounceIn 1s ease-out forwards';
      break;
    case 'rotateIn':
      element.style.animation = 'rotateIn 0.8s ease-out forwards';
      break;
  }
}

// ====================================
// PARTICLE EFFECT
// ====================================
function initParticleEffect() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Create canvas for particles
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  hero.appendChild(canvas);

  let particles = [];

  function resizeCanvas() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: `hsla(220, 60%, 70%, ${Math.random() * 0.3 + 0.1})`
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }
  }

  function updateParticles() {
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });

    // Draw connections
    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(74, 144, 226, ${0.1 - distance / 1000})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });
  }

  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  initParticles();
  animate();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
}

// ====================================
// FLOATING ELEMENTS
// ====================================
function initFloatingElements() {
  const floatingElements = document.querySelectorAll('.neumorphism');

  floatingElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-5px) rotateX(5deg) rotateY(5deg)';
      element.style.transition = 'transform 0.3s ease';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
  });
}

// ====================================
// HOVER EFFECTS
// ====================================
function initHoverEffects() {
  // Project cards hover effect
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
      card.style.boxShadow = '0 20px 40px rgba(200, 217, 240, 0.4)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '';
    });
  });

  // Skill category hover effects
  document.querySelectorAll('.skill-category').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      const icon = skill.querySelector('.skill-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(360deg)';
        icon.style.transition = 'transform 0.5s ease';
      }
    });

    skill.addEventListener('mouseleave', () => {
      const icon = skill.querySelector('.skill-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });

  // Button hover effects
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px) scale(1.05)';
      btn.style.boxShadow = '0 10px 25px rgba(74, 144, 226, 0.3)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)';
      btn.style.boxShadow = '';
    });
  });
}

// ====================================
// PROGRESS BARS
// ====================================
function initProgressBars() {
  // Create skill progress indicators
  const skillCategories = document.querySelectorAll('.skill-category');

  skillCategories.forEach(category => {
    const skillList = category.querySelector('ul');
    if (!skillList) return;

    const skills = skillList.querySelectorAll('li');
    skills.forEach((skill, index) => {
      // Add progress bar to each skill
      const progressContainer = document.createElement('div');
      progressContainer.className = 'skill-progress';
      progressContainer.innerHTML = `
                <div class="skill-progress-bar">
                    <div class="skill-progress-fill" data-progress="${85 + Math.random() * 15}"></div>
                </div>
            `;
      skill.appendChild(progressContainer);
    });
  });

  // Animate progress bars when they come into view
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressFill = entry.target;
        const progress = progressFill.dataset.progress;

        setTimeout(() => {
          progressFill.style.width = progress + '%';
        }, Math.random() * 500);
      }
    });
  });

  document.querySelectorAll('.skill-progress-fill').forEach(fill => {
    progressObserver.observe(fill);
  });
}

// ====================================
// TEXT ANIMATIONS
// ====================================
function initTextAnimations() {
  // Animate text letter by letter
  function animateText(element, delay = 50) {
    const text = element.textContent;
    element.innerHTML = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `all 0.5s ease ${index * delay}ms`;
      element.appendChild(span);

      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
    });
  }

  // Apply text animation to section titles
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        animateText(entry.target);
        entry.target.classList.add('animated');
      }
    });
  });

  document.querySelectorAll('.section-title').forEach(title => {
    textObserver.observe(title);
  });
}

// ====================================
// CURSOR TRAIL EFFECT
// ====================================
function initCursorTrail() {
  const trail = [];
  const trailLength = 10;

  // Create trail elements
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i / trailLength};
            transform: scale(${1 - i / trailLength});
            transition: opacity 0.3s ease, transform 0.3s ease;
        `;
    document.body.appendChild(dot);
    trail.push(dot);
  }

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateTrail() {
    for (let i = trail.length - 1; i > 0; i--) {
      trail[i].style.left = trail[i - 1].style.left;
      trail[i].style.top = trail[i - 1].style.top;
    }

    trail[0].style.left = mouseX + 'px';
    trail[0].style.top = mouseY + 'px';

    requestAnimationFrame(updateTrail);
  }

  updateTrail();
}

// Initialize cursor trail on desktop only
if (window.innerWidth > 768) {
  initCursorTrail();
}

// ====================================
// 3D TILT EFFECT
// ====================================
function init3DTilt() {
  document.querySelectorAll('.neumorphism-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -10;
      const rotateY = (x - centerX) / centerX * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// Initialize 3D tilt effect
init3DTilt();

// ====================================
// CSS ANIMATIONS DEFINITIONS
// ====================================
const animationStyles = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3) translateY(-30px);
    }
    50% {
        opacity: 1;
        transform: scale(1.05) translateY(-10px);
    }
    70% {
        transform: scale(0.9) translateY(0);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes rotateIn {
    from {
        opacity: 0;
        transform: rotate(-360deg) scale(0.8);
    }
    to {
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
}

.skill-progress {
    margin-top: 8px;
}

.skill-progress-bar {
    width: 100%;
    height: 4px;
    background: var(--shadow-dark);
    border-radius: 2px;
    overflow: hidden;
}

.skill-progress-fill {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: 2px;
    width: 0%;
    transition: width 1s ease-out;
}

@media (prefers-reduced-motion: reduce) {
    .cursor-trail {
        display: none;
    }
    
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
