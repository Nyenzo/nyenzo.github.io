/* Application Initialization */
document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.querySelector('.typed');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed(typedElement, {
            strings: ["Data Scientist", "Software Engineer", "Web Developer"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false
        });

        sr.reveal('.hero-content', { delay: 200 });
        sr.reveal('.hero-image', { delay: 400 });
        sr.reveal('.section-header', { delay: 200 });
        sr.reveal('.skill-category', { interval: 200 });
        sr.reveal('.portfolio-item', { interval: 200 });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
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

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    const skillBars = document.querySelectorAll('.skill-level');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 100);
                skillObserver.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formAction = contactForm.getAttribute('action');
            const formMethod = contactForm.getAttribute('method') || 'POST';
            try {
                const res = await fetch(formAction, {
                    method: formMethod,
                    headers: { 'Accept': 'application/json' },
                    body: formData
                });
                if (res.ok) {
                    // Show thank you message
                    const thankYou = document.createElement('div');
                    thankYou.className = 'thank-you-message';
                    thankYou.innerHTML = '<h3>Thank you!</h3><p>Your message has been sent successfully. I will get back to you soon.</p>';
                    thankYou.style.opacity = 0;
                    contactForm.parentNode.replaceChild(thankYou, contactForm);
                    setTimeout(() => { thankYou.style.transition = 'opacity 0.7s'; thankYou.style.opacity = 1; }, 50);
                } else {
                    alert('Sorry, there was a problem sending your message. Please try again later.');
                }
            } catch (err) {
                alert('Sorry, there was a problem sending your message. Please try again later.');
            }
        });
    }

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Project info for modal
    const projectDetails = {
      aivestor: {
        title: 'Aivestor - AI Investment Advisor',
        description: `<p>Aivestor AI is an advanced investment advisory system that combines machine learning, sentiment analysis, and economic indicators to provide intelligent stock market predictions and portfolio recommendations. It achieved over 90% accuracy on real-world data.</p>`,
        features: [
          'Personalized investment advice',
          'Real-time market data integration',
          'Sentiment analysis from news and social media',
          'Portfolio optimization',
          'Comprehensive backtesting'
        ],
        tech: [
          'Python (scikit-learn, pandas, NumPy)',
          'APIs: Alpha Vantage, FRED',
          'Frontend: React.js',
          'Backend: Flask'
        ]
      },
      tradingbot: {
        title: 'Algorithmic Trading Bot',
        description: `<p>My algorithmic trading bot combines technical analysis with machine learning to predict market movements in forex and gold markets. It operates during East Africa Time market hours and integrates multiple data sources for comprehensive analysis.</p>`,
        features: [
          'Automated trading for forex and gold',
          'Technical indicators: Moving Averages, RSI, MACD, Bollinger Bands, Volume',
          'Real-time data collection and analysis',
          'Machine learning-based predictions',
          'Backtesting and performance tracking'
        ],
        tech: [
          'Python (TA-Lib, pandas, scikit-learn)',
          'APIs: yfinance, Alpha Vantage',
          'Deployment: Custom scripts, cloud hosting'
        ]
      },
      tule: {
        title: 'Tule Initiative Website',
        description: `<p>The Tule Initiative is a community-driven website I built using Next.js. It features server-side rendering for better SEO, dynamic content integration with Firebase, and includes an admin dashboard for community management.</p>`,
        features: [
          'Community-driven content management',
          'Admin dashboard for moderators',
          'Server-side rendering for SEO',
          'Dynamic content with Firebase',
          'Responsive, modern UI'
        ],
        tech: [
          'Next.js (React)',
          'Firebase (database, auth)',
          'HTML5, CSS3, JavaScript'
        ]
      }
    };

    function openProjectModal(projectKey) {
      const modal = document.getElementById('project-modal');
      const body = modal.querySelector('.modal-body');
      const info = projectDetails[projectKey];
      if (!info) return;
      body.innerHTML = `
        <h2>${info.title}</h2>
        ${info.description}
        <h3>Features</h3>
        <ul>${info.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <h3>Tech Stack</h3>
        <ul>${info.tech.map(t => `<li>${t}</li>`).join('')}</ul>
      `;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      modal.focus();
      // Trap focus
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length) focusable[0].focus();
      // Save opener for focus return
      modal._opener = document.activeElement;
    }

    function closeProjectModal() {
      const modal = document.getElementById('project-modal');
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (modal._opener) modal._opener.focus();
    }

    document.querySelectorAll('.more-info-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const project = this.getAttribute('data-project');
        openProjectModal(project);
      });
    });
    const modal = document.getElementById('project-modal');
    if (modal) {
      // Close on overlay or close button
      modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
          closeProjectModal();
        }
      });
      // ESC key closes modal
      modal.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeProjectModal();
        }
      });
    }

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

/* Utilities */
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

/* Smooth Scroll */
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
