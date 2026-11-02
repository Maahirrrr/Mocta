document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Interaction
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close all others
      accordionItems.forEach(i => {
        i.classList.remove('open');
        const content = i.querySelector('.accordion-content');
        content.style.maxHeight = null;
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Open first accordion item by default
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add('open');
    const firstContent = accordionItems[0].querySelector('.accordion-content');
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
  }

  // 2. Interactive ROI / Cost Calculator
  const optButtons = document.querySelectorAll('.opt-btn');
  const addPsychology = document.getElementById('addPsychology');
  const addAi = document.getElementById('addAiIntegration');
  const addRush = document.getElementById('addRush');
  const totalDisplay = document.getElementById('totalEstimate');
  const timelineDisplay = document.getElementById('timelineEstimate');

  let baseCost = 249;
  let baseDays = 5;

  function updateEstimate() {
    let currentCost = baseCost;
    let currentDays = baseDays;

    if (addAi && addAi.checked) {
      currentCost += parseInt(addAi.dataset.cost || 0);
      currentDays += parseInt(addAi.dataset.days || 0);
    }

    if (addRush && addRush.checked) {
      currentCost += parseInt(addRush.dataset.cost || 0);
      currentDays = Math.max(3, currentDays + parseInt(addRush.dataset.days || 0));
    }

    totalDisplay.textContent = `$${currentCost}`;
    timelineDisplay.textContent = `Estimated Delivery: ${currentDays} - ${currentDays + 2} Days`;
  }

  optButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      optButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      baseCost = parseInt(btn.dataset.cost || 249);
      baseDays = parseInt(btn.dataset.days || 5);
      updateEstimate();
    });
  });

  if (addAi) addAi.addEventListener('change', updateEstimate);
  if (addRush) addRush.addEventListener('change', updateEstimate);

  // 3. Contact Form Submission simulation
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Inquiry...';

      setTimeout(() => {
        submitBtn.classList.add('hidden');
        successMsg.classList.remove('hidden');
        contactForm.reset();
      }, 900);
    });
  }

  // 4. Smooth Anchor Link Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
