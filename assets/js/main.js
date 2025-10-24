// ====================================
// MAIN JAVASCRIPT FUNCTIONALITY
// ====================================

document.addEventListener('DOMContentLoaded', function () {
  // Enable JavaScript animations
  document.body.classList.add('js-animations');

  // Initialize all functions
  initLoader();
  initNavigation();
  initScrollEffects();
  initContactForm();
  initBackToTop();
  initTypingEffect();
  initSmoothScrolling();
  initParallaxEffect();
  loadCVLink();

  console.log('Portfolio loaded successfully!');
});

// ====================================
// LOADER
// ====================================
function initLoader() {
  const loader = document.getElementById('loader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      // Remove loader from DOM after animation
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 1000);
  });
}

// ====================================
// NAVIGATION
// ====================================
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active navigation link
  window.addEventListener('scroll', () => {
    updateActiveNavLink();
  });

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }
}

// ====================================
// SCROLL EFFECTS
// ====================================
function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  animatedElements.forEach(el => observer.observe(el));

  // Add animation classes to elements
  addAnimationClasses();
}

function addAnimationClasses() {
  // Hero section animations
  document.querySelector('.hero-text')?.classList.add('slide-in-left');
  document.querySelector('.hero-image')?.classList.add('slide-in-right');

  // About section animations
  document.querySelector('.about-text')?.classList.add('slide-in-left');
  document.querySelector('.about-stats')?.classList.add('slide-in-right');

  // Skills animations
  document.querySelectorAll('.skill-category').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.animationDelay = `${index * 0.2}s`;
  });

  // Projects animations
  document.querySelectorAll('.project-card').forEach((el, index) => {
    el.classList.add('scale-in');
    el.style.animationDelay = `${index * 0.1}s`;
  });

  // Contact animations
  document.querySelector('.contact-info')?.classList.add('slide-in-left');
  document.querySelector('.contact-form-container')?.classList.add('slide-in-right');
}

// ====================================
// CONTACT FORM
// ====================================
function initContactForm() {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      // Simulate form submission (replace with your actual form handler)
      await simulateFormSubmission(data);

      // Show success message
      showNotification('Message sent successfully!', 'success');
      form.reset();

    } catch (error) {
      // Show error message
      showNotification('Failed to send message. Please try again.', 'error');
      console.error('Form submission error:', error);
    } finally {
      // Reset button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

async function simulateFormSubmission(data) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Log form data (replace with actual submission logic)
  console.log('Form submitted:', data);

  // You can integrate with services like:
  // - EmailJS
  // - Formspree
  // - Netlify Forms
  // - Your own backend API
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4ade80' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    removeNotification(notification);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    removeNotification(notification);
  }, 5000);
}

function removeNotification(notification) {
  notification.style.transform = 'translateX(100%)';
  setTimeout(() => {
    notification.remove();
  }, 300);
}

// ====================================
// BACK TO TOP BUTTON
// ====================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');

  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ====================================
// TYPING EFFECT
// ====================================
function initTypingEffect() {
  const subtitle = document.querySelector('.hero-subtitle');
  if (!subtitle) return;

  const text = subtitle.textContent;
  const roles = ['Flutter Developer', 'Mobile App Developer', 'Cross-Platform Developer', 'UI/UX Enthusiast'];
  let currentRole = 0;
  let currentChar = 0;
  let isDeleting = false;

  subtitle.textContent = '';

  function typeEffect() {
    const currentText = roles[currentRole];

    if (isDeleting) {
      subtitle.textContent = currentText.substring(0, currentChar - 1);
      currentChar--;
    } else {
      subtitle.textContent = currentText.substring(0, currentChar + 1);
      currentChar++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentChar === currentText.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentRole = (currentRole + 1) % roles.length;
      typeSpeed = 500; // Pause before starting new word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Start typing effect after a short delay
  setTimeout(typeEffect, 1000);
}

// ====================================
// SMOOTH SCROLLING
// ====================================
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ====================================
// PARALLAX EFFECT
// ====================================
function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// ====================================
// UTILITY FUNCTIONS
// ====================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get scroll percentage
function getScrollPercentage() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = scrollTop / (docHeight - winHeight);
  return Math.min(scrollPercent * 100, 100);
}

// Animate counter numbers
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);

    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// Initialize counter animations when stats come into view
function initCounterAnimations() {
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.textContent);
        entry.target.textContent = '0';
        animateCounter(entry.target, target);
        entry.target.classList.add('counted');
      }
    });
  });

  stats.forEach(stat => observer.observe(stat));
}

// Initialize counter animations
setTimeout(initCounterAnimations, 1000);

// ====================================
// PERFORMANCE OPTIMIZATIONS
// ====================================

// Optimize scroll events
window.addEventListener('scroll', throttle(() => {
  // Add any scroll-based functionality here
}, 16));

// Optimize resize events
window.addEventListener('resize', debounce(() => {
  // Add any resize-based functionality here
}, 250));

// Preload images
function preloadImages() {
  const images = [
    'assets/images/profile.jpg',
    'assets/images/real-convert.jpg',
    'assets/images/task-manager.jpg',
    'assets/images/mosque-finder.jpg',
    'assets/images/crafty-bay.jpg',
    'assets/images/sentiment-analysis.jpg',
    'assets/images/step-indicator.jpg'
  ];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize image preloading
setTimeout(preloadImages, 2000);

// ====================================
// CV DOWNLOAD LINK
// ====================================
function loadCVLink() {
  const cvBtn = document.getElementById('cvDownloadBtn');
  if (!cvBtn) return;

  // Load CV link from localStorage or use default
  const cvLink = localStorage.getItem('cvLink') || 'https://cdn.jsdelivr.net/gh/the-razib/personal_profile/cv/Md-Razib-CV-16-09-25.pdf';
  cvBtn.href = cvLink;
}

// ====================================
// IMAGE MODAL FUNCTIONALITY
// ====================================

function openImageModal(imageSrc, caption) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');

  modal.style.display = 'block';
  modalImage.src = imageSrc;
  modalCaption.textContent = caption;

  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';

  // Add fade-in animation
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 10);
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');

  // Add fade-out animation
  modal.style.opacity = '0';

  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeImageModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        closeImageModal();
      }
    });
  }
});