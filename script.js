document.addEventListener('DOMContentLoaded', () => {
  // Accessible Accordion Implementation
  const faqEntries = document.querySelectorAll('.faq-entry');

  faqEntries.forEach(entry => {
    const toggle = entry.querySelector('.faq-toggle');
    const collapse = entry.querySelector('.faq-collapse');

    if (toggle && collapse) {
      toggle.addEventListener('click', () => {
        const isActive = entry.classList.contains('active');

        // Close all other entries
        faqEntries.forEach(other => {
          other.classList.remove('active');
          const otherCollapse = other.querySelector('.faq-collapse');
          if (otherCollapse) otherCollapse.style.maxHeight = null;
        });

        // Expand clicked entry
        if (!isActive) {
          entry.classList.add('active');
          collapse.style.maxHeight = collapse.scrollHeight + 'px';
        }
      });
    }
  });

  // Expand the first FAQ entry by default
  if (faqEntries.length > 0) {
    const firstEntry = faqEntries[0];
    const firstCollapse = firstEntry.querySelector('.faq-collapse');
    if (firstCollapse) {
      firstEntry.classList.add('active');
      firstCollapse.style.maxHeight = firstCollapse.scrollHeight + 'px';
    }
  }

  // Project Inquiry Form Submission
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && submitBtn && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Project Details...';

      setTimeout(() => {
        submitBtn.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        contactForm.reset();
      }, 700);
    });
  }

  // Smooth Navigation Anchor Scrolling
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
      }
    });
  });
});
