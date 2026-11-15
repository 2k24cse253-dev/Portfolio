/* ========================================
   VARSHINIE A. R. - PREMIUM PORTFOLIO JS
   Real-time interactions, scroll effects & animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initProjectCards();
    initMobileMenu();
    initScrollIndicator();
    initParallax();
    initCursor();
    initTextReveal();
    initStatsCounter();
});

/* ========================================
   NAVIGATION
   ======================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* ========================================
   MOBILE MENU
   ======================================== */
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

/* ========================================
   SCROLL ANIMATIONS (GSAP)
   ======================================== */
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.from('.hero-badge', {
        scrollTrigger: { trigger: '.hero', start: 'top top' },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.name', {
        scrollTrigger: { trigger: '.hero', start: 'top top' },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.title', {
        scrollTrigger: { trigger: '.hero', start: 'top top' },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        scrollTrigger: { trigger: '.hero', start: 'top top' },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('.hero-actions', {
        scrollTrigger: { trigger: '.hero', start: 'top top' },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.hero-location', {
        scrollTrigger: { trigger: '.hero', start: 'top top' },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal, .section-header, .about-text, .about-resume, .skill-category, .timeline-item, .project-card, .achievement-card, .contact-info, .contact-form');

    revealElements.forEach((element, index) => {
        element.classList.add('reveal');

        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
}

/* ========================================
   SKILL BARS ANIMATION
   ======================================== */
function initSkillBars() {
    const skillProgress = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillProgress.forEach(progress => {
        observer.observe(progress);
    });
}

/* ========================================
   CONTACT FORM
   ======================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.background = 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.opacity = '1';
                    btn.style.background = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
}

/* ========================================
   PROJECT CARDS 3D HOVER
   ======================================== */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

/* ========================================
   SCROLL INDICATOR
   ======================================== */
function initScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.querySelector('.hero').appendChild(indicator);

    // Hide after scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            indicator.style.opacity = '0';
        } else {
            indicator.style.opacity = '1';
        }
    });
}

/* ========================================
   PARALLAX EFFECT
   ======================================== */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-visual, .profile-card-3d');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.3;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

/* ========================================
   CUSTOM CURSOR
   ======================================== */
function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.7)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'rgba(212, 175, 55, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

/* ========================================
   TEXT REVEAL ANIMATION
   ======================================== */
function initTextReveal() {
    const textElements = document.querySelectorAll('.name, .title, .section-title');

    textElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.borderRight = '2px solid var(--primary-color)';

        let i = 0;
        const typeInterval = setInterval(() => {
            el.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    el.style.borderRight = 'none';
                }, 1000);
            }
        }, 50);
    });
}

/* ========================================
   STATS COUNTER
   ======================================== */
function initStatsCounter() {
    // This can be extended if stats are added
}

/* ========================================
   ACTIVE NAV LINK ON SCROLL
   ======================================== */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});