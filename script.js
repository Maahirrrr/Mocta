document.addEventListener('DOMContentLoaded', () => {
  // 1. Rotating Words in Hero
  const words = ['startups', 'creators', 'founders', 'builders', 'products'];
  let wordIndex = 0;
  const rotatingWordEl = document.getElementById('rotatingWord');

  if (rotatingWordEl) {
    setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      rotatingWordEl.style.opacity = '0';
      rotatingWordEl.style.transform = 'translateY(8px)';
      
      setTimeout(() => {
        rotatingWordEl.textContent = words[wordIndex];
        rotatingWordEl.style.opacity = '1';
        rotatingWordEl.style.transform = 'translateY(0)';
      }, 200);
    }, 2800);
  }

  // 2. Interactive Morphing Button Simulation
  const morphButton = document.getElementById('morphButton');
  const morphText = document.getElementById('morphText');
  let isAudited = false;

  if (morphButton && morphText) {
    morphButton.addEventListener('click', () => {
      if (!isAudited) {
        morphText.textContent = 'Analyzing...';
        morphButton.classList.add('scale-95');
        setTimeout(() => {
          morphText.textContent = '✓ Ready to Launch';
          morphButton.classList.remove('scale-95');
          morphButton.classList.add('bg-primary', 'text-black');
          isAudited = true;
        }, 900);
      } else {
        morphText.textContent = 'Audit Website';
        morphButton.classList.remove('bg-primary', 'text-black');
        isAudited = false;
      }
    });
  }

  // 3. Interactive Knob Dial Simulation
  const knobInput = document.getElementById('knobInput');
  const knobDisplay = document.getElementById('knobDisplay');
  const knobPointer = document.getElementById('knobPointer');
  const knobLabel = document.getElementById('knobLabel');

  if (knobInput && knobDisplay && knobPointer && knobLabel) {
    knobInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      knobDisplay.textContent = val;
      knobLabel.textContent = `${val} DAYS TO LAUNCH`;
      
      // Calculate rotation angle: 5 days = -120deg, 30 days = 120deg
      const percent = (val - 5) / (30 - 5);
      const angle = -120 + percent * 240;
      knobPointer.style.transform = `rotate(${angle}deg) translateY(-54px)`;
    });
  }

  // 4. Navbar Sticky State
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('bg-[#101010]/85', 'backdrop-blur-md', 'border-white/10', 'py-3');
      navbar.classList.remove('border-transparent', 'py-5');
    } else {
      navbar.classList.remove('bg-[#101010]/85', 'backdrop-blur-md', 'border-white/10', 'py-3');
      navbar.classList.add('border-transparent', 'py-5');
    }
  });

  // 5. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 6. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && submitBtn && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Details...';

      setTimeout(() => {
        submitBtn.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        contactForm.reset();
      }, 700);
    });
  }

  // 7. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
});
