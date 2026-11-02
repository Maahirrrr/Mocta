/**
 * Mocta Studio — Interaction & Comprehensive Animation Engine
 * Features:
 * - Scroll reveal with IntersectionObserver
 * - Magnetic micro-interaction on CTA buttons
 * - Mobile responsive navigation menu toggle
 * - Letter splitting & interactive hover on footer signoff
 * - Quick contact dock toggle on mobile
 * - Interactive single-open accordion for FAQ
 * - Asynchronous inquiry form submission
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-triggered Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 2. Magnetic Micro-Interaction on Primary Buttons (Desktop)
  if (window.matchMedia('(pointer: fine)').matches) {
    const magneticButtons = document.querySelectorAll('.hx-btn, .button, .re-circle, .hx-path-go');
    magneticButtons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // 3. Mobile Navigation Menu Enhancement
  const mast = document.querySelector('.mast');
  if (mast) {
    const menuToggle = mast.querySelector('.menu-toggle');
    const nav = mast.querySelector('nav');
    
    if (menuToggle && nav) {
      mast.dataset.enhanced = 'true';
      menuToggle.hidden = false;

      const setMenu = (open) => {
        mast.classList.toggle('menu-open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.innerHTML = open 
          ? 'Close <span aria-hidden="true">−</span>' 
          : 'Menu <span aria-hidden="true">+</span>';
      };

      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        setMenu(!isOpen);
      });

      // Close menu on link click
      nav.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
          setMenu(false);
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
          setMenu(false);
        }
      });

      // Close menu on click outside
      document.addEventListener('click', (e) => {
        if (!mast.contains(e.target)) {
          setMenu(false);
        }
      });

      window.matchMedia('(min-width: 901px)').addEventListener('change', () => {
        setMenu(false);
      });
    }
  }

  // 4. Letter Splitting and Physics Hover on Oversized Signoff
  document.querySelectorAll('.ed-signoff').forEach((signoff) => {
    const word = signoff.firstChild;
    if (!word || word.nodeType !== 3) return;
    
    const text = word.textContent.trim();
    const letters = [...text].map((ch, i) => {
      const s = document.createElement('span');
      s.className = 'mo-letter';
      s.style.setProperty('--i', i);
      s.textContent = ch;
      return s;
    });

    word.replaceWith(...letters);
    const dot = signoff.querySelector(':scope > span:not(.mo-letter)');
    if (dot) {
      dot.classList.add('mo-letter');
      dot.style.setProperty('--i', letters.length);
    }

    if (window.matchMedia('(pointer: fine)').matches) {
      signoff.querySelectorAll('.mo-letter').forEach((l) => {
        l.addEventListener('pointerenter', () => {
          l.classList.add('is-lift');
          clearTimeout(l._t);
          l._t = setTimeout(() => l.classList.remove('is-lift'), 650);
        });
      });
    }
  });

  // 5. Scroll Dock Toggle on Mobile
  const dock = document.querySelector('.hx-dock');
  if (dock) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        dock.classList.add('is-on');
      } else {
        dock.classList.remove('is-on');
      }
    }, { passive: true });
  }

  // 6. Interactive Contact Form Submission
  const form = document.querySelector('#contact-form');
  const successNotice = document.querySelector('#form-success');
  if (form && successNotice) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }

      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Submit Inquiry <svg class="ui-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18 18 6M6 6h12v12"/></svg>';
        }
        successNotice.style.display = 'block';
        successNotice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 700);
    });
  }

  // 7. Accordion Single-Open Functionality
  const faqItems = document.querySelectorAll('.hx-faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
});
