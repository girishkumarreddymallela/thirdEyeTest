export function initHowItWorksAnimation() {
  const cards = document.querySelectorAll('.step-card');
  if (cards.length === 0) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('revealed');
          }, index * 250);
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const flowContainer = document.querySelector('.flow-container');
  if (flowContainer) {
    observer.observe(flowContainer);
  }
}
