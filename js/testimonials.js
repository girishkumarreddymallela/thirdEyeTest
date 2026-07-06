export function initTestimonials() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;

  const updateSlidePosition = (index) => {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      updateSlidePosition(newIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let newIndex = currentIndex + 1;
      if (newIndex >= slides.length) newIndex = 0;
      updateSlidePosition(newIndex);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      updateSlidePosition(idx);
    });
  });

  let startX = 0;
  let endX = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  }, { passive: true });

  const handleSwipe = () => {
    const threshold = 50;
    if (startX - endX > threshold) {
      let newIndex = currentIndex + 1;
      if (newIndex >= slides.length) newIndex = 0;
      updateSlidePosition(newIndex);
    } else if (endX - startX > threshold) {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      updateSlidePosition(newIndex);
    }
  };
}
