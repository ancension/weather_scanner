
document.addEventListener('DOMContentLoaded', () => {
  const form       = document.getElementById('weather-form');
  const modal      = document.getElementById('modal');
  const phases     = Array.from(document.querySelectorAll('.modal-phase'));
  let currentIndex = 0;
  let phaseTimer;

  function showPhase(idx) {
    modal.style.display = 'flex';
    phases.forEach((el, i) => el.classList.toggle('active', i === idx));
  }

  function startCycle() {
    showPhase(currentIndex);
    phaseTimer = setInterval(() => {
      currentIndex++;
      if (currentIndex < phases.length) {
        showPhase(currentIndex);
        // stop after showing last phase
        if (currentIndex === phases.length - 1) {
          clearInterval(phaseTimer);
        }
      }
    }, 6000);
  }

  function stopCycle() {
    clearInterval(phaseTimer);
    modal.style.display = 'none';
    currentIndex = 0;
  }

  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      stopCycle();
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    // fetch weather here and update #weather-result if needed
    startCycle();
  });
});