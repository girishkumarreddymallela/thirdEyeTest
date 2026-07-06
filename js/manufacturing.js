export function initManufacturing() {
  const cards = document.querySelectorAll('.manufacturing-card');
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
          }, index * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const grid = document.querySelector('.manufacturing-grid');
  if (grid) {
    observer.observe(grid);
  }
}
