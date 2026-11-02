document.addEventListener('DOMContentLoaded', () => {
  // Watermelon UI Accordion Interaction
  const accordionButtons = document.querySelectorAll('.accordion-btn');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all accordion items
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.accordion-icon').forEach(i => {
        i.textContent = '+';
        i.classList.remove('rotate-45');
      });

      // Toggle clicked item
      if (!isOpen) {
        content.classList.remove('hidden');
        icon.textContent = '×';
        icon.classList.add('rotate-45');
      }
    });
  });

  // Open the first item by default
  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) {
    const firstContent = firstItem.querySelector('.accordion-content');
    const firstIcon = firstItem.querySelector('.accordion-icon');
    if (firstContent && firstIcon) {
      firstContent.classList.remove('hidden');
      firstIcon.textContent = '×';
      firstIcon.classList.add('rotate-45');
    }
  }

  // Watermelon UI Form Submission Simulation
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && submitBtn && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Inquiry...';

      setTimeout(() => {
        submitBtn.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        contactForm.reset();
      }, 700);
    });
  }

  // Smooth Scrolling for Anchors
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
