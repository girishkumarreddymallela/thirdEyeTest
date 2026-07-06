const CALCULATOR_MATRIX = {
  "saas-ideation": {
    title: "Bootstrapping & Early Angel Grants",
    desc: "For early-stage SaaS ventures, focus on building a low-cost MVP. Bootstrapping combined with micro-grants keeps you fully dilution-free while you validate your core value proposition.",
    routes: ["Bootstrapping", "Micro-grants", "Founder Capital"]
  },
  "saas-validation": {
    title: "Angel Networks & Incubator Funding",
    desc: "Since you have an early MVP, angel syndicates and startup incubators offer the perfect scale of capital ($25K-$100K) to prove product-market fit and start acquiring users.",
    routes: ["Angel Investors", "Startup Incubators", "Pre-Seed Funds"]
  },
  "saas-scaling": {
    title: "Venture Capital & Revenue-Based Finance",
    desc: "With proven recurring revenue, institutional VC rounds (Seed/Series A) and non-dilutive Revenue-Based Financing will fuel your user acquisition and engineering hires.",
    routes: ["Venture Capital", "Revenue-Based Finance", "Growth Debt"]
  },
  "product-ideation": {
    title: "Govt Schemes & State Innovation Grants",
    desc: "Hardware and physical product ideation requires tooling capital. Indian schemes like Startup India Seed Fund or BIRAC are built to support initial prototyping without equity dilution.",
    routes: ["Startup India", "BIRAC Grant", "SIDBI Loan"]
  },
  "product-validation": {
    title: "Hardware Accelerators & Angel Syndicates",
    desc: "Now that you have a working prototype, hardware-focused accelerators and angel syndicates can fund your initial pilot production run and supplier molds.",
    routes: ["Hardware Accelerators", "Angel Networks", "Crowdfunding (Kickstarter)"]
  },
  "product-scaling": {
    title: "VC Seed Funding & Working Capital Loans",
    desc: "Scaling inventory demands large checks. Institutional VC Seed rounds paired with SIDBI bank capital guarantee schemes will finance container orders and factory expansions.",
    routes: ["Venture Capital", "MSME Credit Schemes", "Sourcing Partners"]
  },
  "service-ideation": {
    title: "Bootstrapping & MUDRA Loans",
    desc: "Agencies and local service ventures require minimal initial capital. Bootstrap the first clients yourself, or leverage low-interest government MUDRA Shishu loans for office equipment.",
    routes: ["Bootstrapping", "MUDRA Shishu Loan", "Client Pre-payments"]
  },
  "service-validation": {
    title: "MSME Business Loans & Working Capital",
    desc: "To expand your team or execute larger client contracts, leverage commercial MSME working capital loans and collateral-free banking lines.",
    routes: ["CGTMSE MSME Loans", "SIDBI Capital", "Invoice Factoring"]
  },
  "service-scaling": {
    title: "Strategic Partnerships & Franchise Models",
    desc: "Scaling service ventures benefit from micro-franchises or strategic corporate partnerships that distribute your capabilities under co-branded contracts.",
    routes: ["Strategic Partnerships", "Franchise Expansion", "Corporate Joint Ventures"]
  }
};

export function initFunding() {
  const selectType = document.getElementById('calc-biz-type');
  const selectStage = document.getElementById('calc-biz-stage');
  const resultCard = document.querySelector('.calculator-result');

  if (!selectType || !selectStage || !resultCard) return;

  const handleCalculatorChange = () => {
    resultCard.style.opacity = '0';
    resultCard.style.transform = 'scale(0.98)';
    resultCard.style.transition = 'all 0.25s ease';

    setTimeout(() => {
      const type = selectType.value;
      const stage = selectStage.value;
      const matrixKey = `${type}-${stage}`;
      const data = CALCULATOR_MATRIX[matrixKey];

      if (data) {
        const badgesMarkup = data.routes.map(route => `<span class="result-badge">${route}</span>`).join('');

        resultCard.innerHTML = `
          <span class="result-label">Recommended Route</span>
          <h4 class="result-title">${data.title}</h4>
          <p class="result-desc">${data.desc}</p>
          <div class="result-badges">
            ${badgesMarkup}
          </div>
        `;
      }

      resultCard.style.opacity = '1';
      resultCard.style.transform = 'scale(1)';
    }, 250);
  };

  selectType.addEventListener('change', handleCalculatorChange);
  selectStage.addEventListener('change', handleCalculatorChange);

  handleCalculatorChange();
}
