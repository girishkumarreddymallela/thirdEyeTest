export function initJourney() {
  const nodes = document.querySelectorAll('.timeline-node');
  if (nodes.length === 0) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nodes.forEach((node, index) => {
          setTimeout(() => {
            node.classList.add('revealed');
          }, index * 120);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const wrapper = document.querySelector('.timeline-wrapper');
  if (wrapper) {
    observer.observe(wrapper);
  }

  const leftBtn = document.querySelector('.nav-btn-left');
  const rightBtn = document.querySelector('.nav-btn-right');
  const track = document.querySelector('.timeline-track');

  if (wrapper && leftBtn && rightBtn) {
    const getScrollAmount = () => {
      const card = wrapper.querySelector('.timeline-node');
      const gap = track ? parseFloat(getComputedStyle(track).gap) : 48;
      return card ? (card.clientWidth + gap) : 300;
    };

    const updateNavButtons = () => {
      const scrollLeft = wrapper.scrollLeft;
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      
      leftBtn.disabled = scrollLeft <= 10;
      rightBtn.disabled = scrollLeft >= maxScroll - 10;
    };

    leftBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    wrapper.addEventListener('scroll', updateNavButtons);
    window.addEventListener('resize', updateNavButtons);

    setTimeout(updateNavButtons, 200);
  }
}
