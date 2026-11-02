/**
 * Mocta Studio — Interaction & Enhancement Scripts
 * Inspired by endcap.design interactions:
 * - Mobile responsive navigation menu toggle
 * - Smooth FAQ details accordions
 * - Letter rise-in on oversized footer signoff
 * - Contact inquiry submission handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Enhancement
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

      // Close menu on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
          setMenu(false);
        }
      });

      // Close menu on outside click
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

  // 2. Letter Splitting on Footer Signoff
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

  // 3. Scroll Dock Toggle on Mobile
  const dock = document.querySelector('.hx-dock');
  if (dock) {
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 120) {
        dock.classList.add('is-on');
      } else {
        dock.classList.remove('is-on');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // 4. Contact Form Handling
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

  // 5. Single Open Accordion (Optional Clean Polish)
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
