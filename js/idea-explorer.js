const IDEAS_DATA = [
  {
    id: 1,
    name: "AI-Powered Crop Disease Detector",
    industry: "AgriTech",
    investment: "$8,500",
    investmentLevel: "bootstrap",
    type: "SaaS",
    difficulty: "easy",
    description: "Mobile app using computer vision to diagnose crop infections in real-time and recommend organic treatments to rural farmers."
  },
  {
    id: 2,
    name: "Bamboo Packaging Manufacturing",
    industry: "Clean Energy",
    investment: "$45,000",
    investmentLevel: "sme",
    type: "Manufacturing",
    difficulty: "medium",
    description: "Eco-friendly manufacturing setup utilizing locally-sourced bamboo fibers to create fully biodegradable shipping containers."
  },
  {
    id: 3,
    name: "Hyperlocal Dark Kitchen Network",
    industry: "Food & Beverage",
    investment: "$25,000",
    investmentLevel: "sme",
    type: "Service",
    difficulty: "medium",
    description: "Plug-and-play culinary hubs helping local chefs launch food brands without commercial real estate overhead."
  },
  {
    id: 4,
    name: "Solar Lantern Subscription for Rural India",
    industry: "Clean Energy",
    investment: "$6,200",
    investmentLevel: "bootstrap",
    type: "Product",
    difficulty: "easy",
    description: "Pay-as-you-go micro-solar charging grids supplying clean and affordable lighting packages to off-grid communities."
  },
  {
    id: 5,
    name: "3D-Printed Prosthetics Lab",
    industry: "HealthTech",
    investment: "$120,000",
    investmentLevel: "vc",
    type: "Manufacturing",
    difficulty: "hard",
    description: "Premium healthcare facility designing and printing dynamic, customized bionic limbs at a fraction of standard market costs."
  },
  {
    id: 6,
    name: "Vernacular EdTech for Tier-3 Cities",
    industry: "EdTech",
    investment: "$15,000",
    investmentLevel: "sme",
    type: "SaaS",
    difficulty: "medium",
    description: "Localized learning management platform offering skill-based coding and vocational courses in native regional languages."
  },
  {
    id: 7,
    name: "Autonomous E-Waste Recycling Hubs",
    industry: "AI & Automation",
    investment: "$180,000",
    investmentLevel: "vc",
    type: "Service",
    difficulty: "hard",
    description: "Automated collection kiosks utilizing machine learning sorting arms to identify and recover precious metals from old electronics."
  },
  {
    id: 8,
    name: "Biodegradable Pineapple Fiber Shoes",
    industry: "Fashion & Apparel",
    investment: "$55,000",
    investmentLevel: "sme",
    type: "Product",
    difficulty: "medium",
    description: "D2C footwear brand crafting stylish, premium sneakers using eco-friendly fibers sourced from pineapple crop waste."
  },
  {
    id: 9,
    name: "Low-Code CRM for Local Retailers",
    industry: "SaaS",
    investment: "$4,500",
    investmentLevel: "bootstrap",
    type: "SaaS",
    difficulty: "easy",
    description: "A super-lightweight Whatsapp-integrated customer dashboard helping corner shops manage inventory and digital orders."
  },
  {
    id: 10,
    name: "Electric Rickshaw Battery Swap Network",
    industry: "Mobility",
    investment: "$140,000",
    investmentLevel: "vc",
    type: "Service",
    difficulty: "medium",
    description: "Clean energy swap stations helping transit operators exchange depleted rickshaw batteries in under 60 seconds."
  },
  {
    id: 11,
    name: "Artisanal Spice Micro-Franchise",
    industry: "Food & Beverage",
    investment: "$7,500",
    investmentLevel: "bootstrap",
    type: "Franchise",
    difficulty: "easy",
    description: "Empowering micro-entrepreneurs with modular spice-blending carts and branded organic supply chains."
  },
  {
    id: 12,
    name: "SaaS Cargo Compliance Auditor",
    industry: "Import-Export",
    investment: "$35,000",
    investmentLevel: "sme",
    type: "SaaS",
    difficulty: "medium",
    description: "Automated custom audit engine helping exporters prepare shipping paperwork and comply with maritime customs regulations."
  }
];

export function initIdeaExplorer() {
  const gridContainer = document.querySelector('.ideas-grid');
  if (!gridContainer) return;

  const selectIndustry = document.getElementById('filter-industry');
  const selectInvestment = document.getElementById('filter-investment');
  const selectType = document.getElementById('filter-type');

  const handleFilterChange = () => {
    gridContainer.style.opacity = '0.5';
    gridContainer.style.transform = 'translateY(10px)';
    gridContainer.style.transition = 'all 0.25s ease';

    setTimeout(() => {
      const activeIndustry = selectIndustry.value;
      const activeInvestment = selectInvestment.value;
      const activeType = selectType.value;

      const filtered = IDEAS_DATA.filter(idea => {
        const matchesIndustry = activeIndustry === 'all' || idea.industry.toLowerCase() === activeIndustry.toLowerCase();
        const matchesInvestment = activeInvestment === 'all' || idea.investmentLevel === activeInvestment;
        const matchesType = activeType === 'all' || idea.type.toLowerCase() === activeType.toLowerCase();

        return matchesIndustry && matchesInvestment && matchesType;
      });

      renderGridElements(filtered, gridContainer);

      gridContainer.style.opacity = '1';
      gridContainer.style.transform = 'translateY(0)';
    }, 250);
  };

  if (selectIndustry) selectIndustry.addEventListener('change', handleFilterChange);
  if (selectInvestment) selectInvestment.addEventListener('change', handleFilterChange);
  if (selectType) selectType.addEventListener('change', handleFilterChange);

  renderGridElements(IDEAS_DATA, gridContainer);
}

function renderGridElements(ideas, container) {
  container.innerHTML = '';

  if (ideas.length === 0) {
    container.innerHTML = `
      <div class="ideas-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <h3>No Ideas Match Your Filters</h3>
        <p>Try broadening your criteria or reset the filters to start exploring again.</p>
      </div>
    `;
    return;
  }

  ideas.forEach((idea, index) => {
    const card = document.createElement('div');
    card.className = 'idea-card';
    card.style.animationDelay = `${index * 80}ms`;

    card.innerHTML = `
      <div class="idea-card-header">
        <span class="industry-tag">${idea.industry}</span>
        <span class="difficulty-badge difficulty-${idea.difficulty.toLowerCase()}">${idea.difficulty}</span>
      </div>
      <div>
        <h3 class="idea-name">${idea.name}</h3>
        <p class="idea-desc">${idea.description}</p>
      </div>
      <div class="idea-card-footer">
        <div class="investment-info">
          <span class="investment-label">Est. Investment</span>
          <span class="investment-value">${idea.investment}</span>
        </div>
        <a href="#journey" class="explore-btn">
          Explore <span>&rarr;</span>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}
