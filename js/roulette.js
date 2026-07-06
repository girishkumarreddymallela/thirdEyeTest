const ROULETTE_IDEAS = [
  {
    title: "Smart IoT Soil Sensors",
    industry: "AgriTech",
    investment: "Low Cost",
    pitch: "Deploy automated, battery-powered soil moisture and pH probe grids to schedule precision irrigation via localized SMS alerts."
  },
  {
    name: "Solar Cold Storage Container",
    title: "Solar Cold Storage Hubs",
    industry: "AgriTech",
    investment: "Medium Cost",
    pitch: "Modular, solar-powered refrigeration vaults placed near village markets to store fresh produce and prevent post-harvest spoilage."
  },
  {
    title: "AI Wound Diagnostic Scan",
    industry: "HealthTech",
    investment: "Low Cost",
    pitch: "Mobile app that scans skin burns and surgical wounds to detect early bacterial infections using localized mobile computer vision."
  },
  {
    title: "Biomass Village Gasifier",
    industry: "Clean Energy",
    investment: "High Cost",
    pitch: "Convert agricultural stubble and crop residue into clean, localized village electricity using localized gasification generator nodes."
  },
  {
    title: "Vernacular IT Apprenticeships",
    industry: "EdTech",
    investment: "Low Cost",
    pitch: "Simulated tech job portals teaching hardware repair and network configuration in regional languages for rural youth."
  },
  {
    title: "Millet Energy Superfood Bars",
    industry: "D2C Brands",
    investment: "Low Cost",
    pitch: "Gluten-free premium snack bars leveraging ancient grains and packaged inside 100% home-compostable seaweed wraps."
  },
  {
    title: "Micro-Sorting Waste Robot",
    industry: "AI & Automation",
    investment: "Medium Cost",
    pitch: "Low-cost robotic arms powered by edge-AI cameras to separate recyclable grades directly at local landfill bays."
  },
  {
    title: "Bamboo Structural Beams",
    industry: "Construction",
    investment: "Medium Cost",
    pitch: "Engineered building supports and pillars manufactured from treated local bamboo to replace carbon-intensive steel foundations."
  },
  {
    title: "Hemp activewear range",
    industry: "Fashion & Apparel",
    title: "Hemp-Fiber Activewear",
    industry: "Fashion & Apparel",
    investment: "Low Cost",
    pitch: "Breathable, sweat-wicking sportswear range utilizing sustainable industrial hemp fibers sourced from organic farmer collectives."
  },
  {
    title: "Solar Last-Mile E-Cargo Bikes",
    industry: "Mobility",
    investment: "Medium Cost",
    pitch: "Heavy-duty electric cargo bikes fitted with regenerative hub motors and solar canopy covers to run zero-emission local package delivery."
  }
];

export function initRoulette() {
  const fabBtn = document.querySelector('.roulette-fab');
  const modal = document.querySelector('.roulette-modal');
  const closeBtn = document.querySelector('.roulette-close-btn');
  const ctaBtn = document.querySelector('.roulette-cta');
  
  const mTitle = document.querySelector('.roulette-card-title');
  const mPitch = document.querySelector('.roulette-card-pitch');
  const mInd = document.getElementById('roulette-ind-val');
  const mInv = document.getElementById('roulette-inv-val');

  if (!fabBtn || !modal || !closeBtn || !mTitle || !mPitch || !mInd || !mInv) return;

  fabBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * ROULETTE_IDEAS.length);
    const idea = ROULETTE_IDEAS[randomIndex];

    mTitle.textContent = idea.title;
    mPitch.textContent = idea.pitch;
    mInd.textContent = idea.industry;
    mInv.textContent = idea.investment;

    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  });

  // Close modal functions
  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  };

  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      closeModal();
    });
  }
}
