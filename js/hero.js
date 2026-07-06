export function initTagCycling() {
  const allTags = [
    'Manufacturing',
    'Funding',
    'Market Research',
    'Legal Setup',
    'Product Design',
    'Growth Hacking'
  ];
  
  const tagElements = document.querySelectorAll('.floating-tag');
  let activeTags = [];
  
  if (tagElements.length > 0) {
    activeTags = Array.from(tagElements).map(el => el.querySelector('.tag-text').innerText.trim());

    const getInactiveTag = () => {
      const inactive = allTags.filter(t => !activeTags.includes(t));
      if (inactive.length === 0) return null;
      return inactive[Math.floor(Math.random() * inactive.length)];
    };

    setInterval(() => {
      if (window.innerWidth > 768) {
        const randomIndex = Math.floor(Math.random() * tagElements.length);
        const element = tagElements[randomIndex];
        const textNode = element.querySelector('.tag-text');
        
        element.style.opacity = '0';
        element.style.transform = 'scale(0.85) translateY(10px)';
        
        setTimeout(() => {
          const nextTag = getInactiveTag();
          if (nextTag) {
            activeTags[randomIndex] = nextTag;
            textNode.innerText = nextTag;
          }
          element.style.opacity = '1';
          element.style.transform = '';
        }, 450);
      }
    }, 4500);
  }

  const mobileBadge = document.querySelector('.mobile-badge-container');
  if (mobileBadge) {
    let currentMobileIndex = 0;
    
    // Set initial tag to match the index
    const initialText = mobileBadge.querySelector('.tag-text').innerText.trim();
    const foundIndex = allTags.indexOf(initialText);
    if (foundIndex !== -1) {
      currentMobileIndex = foundIndex;
    }

    setInterval(() => {
      if (window.innerWidth <= 768) {
        mobileBadge.style.opacity = '0';
        mobileBadge.style.transform = 'scale(0.9) translateY(-10px)';
        
        setTimeout(() => {
          currentMobileIndex = (currentMobileIndex + 1) % allTags.length;
          mobileBadge.querySelector('.tag-text').innerText = allTags[currentMobileIndex];
          
          mobileBadge.style.opacity = '1';
          mobileBadge.style.transform = '';
        }, 400);
      }
    }, 3500);
  }
}
