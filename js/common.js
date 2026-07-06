export function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const startTime = performance.now();
    
    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const ease = progress * (2 - progress);
      const currentValue = Math.floor(ease * target);
      
      counter.innerText = currentValue.toLocaleString('en-US');
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString('en-US');
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(counter => observer.observe(counter));
}
