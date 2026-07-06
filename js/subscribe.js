export function initSubscribe() {
  const form = document.querySelector('.subscribe-form');
  const successPanel = document.querySelector('.subscribe-success');

  if (!form || !successPanel) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('.subscribe-input');
    if (!emailInput || !emailInput.value.trim()) return;

    form.style.opacity = '0';
    form.style.transform = 'scale(0.95)';
    form.style.pointerEvents = 'none';

    setTimeout(() => {
      form.style.display = 'none';
      successPanel.classList.add('active');
    }, 300);
  });
}
