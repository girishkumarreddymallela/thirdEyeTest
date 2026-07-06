# 10,000 Ideas — One Destination

A visually stunning, full-featured single-page business ecosystem website built with pure HTML, CSS, and Vanilla JS. The platform covers idea discovery, business planning, manufacturing, funding, and company building — all in one long-scroll experience.

**Live Demo:** https://third-eye-test.vercel.app/
**Repository:** https://github.com/girishkumarreddymallela/thirdEyeTest

---

## What the Platform Does

10,000 Ideas is a dark editorial luxury SPA that guides aspiring founders from raw idea to funded company. It includes:

- Animated hero with floating category tags and a live counter
- Stats bar with scroll-triggered count-up animations and an infinite industry ticker
- 3-step "How It Works" flow with a curved SVG connector
- Interactive idea explorer with client-side filtering by industry, capital scale, and business model
- 8-stage horizontal journey roadmap with hover popovers
- Manufacturing hub with 6 partner category cards
- Funding ecosystem with a 3-column layout and a JS-powered funding calculator
- Featured Idea of the Week editorial spotlight
- Industry verticals in an asymmetric masonry grid
- Founder testimonials carousel
- Newsletter subscribe section with success state
- Sticky scroll-aware navigation with hamburger menu on mobile
- Floating "Idea Roulette" FAB that surfaces a random idea in a modal

---

## Tech Stack

| Layer   | Choice                                                       |
| ------- | ------------------------------------------------------------ |
| Markup  | Semantic HTML5                                               |
| Styling | CSS3 — custom properties, grid, flexbox, keyframe animations |
| Logic   | Vanilla ES6+ with ES Modules                                 |
| Fonts   | Google Fonts — Playfair Display + DM Sans                    |
| Images  | picsum.photos placeholder images                             |
| Hosting | Vercel (free tier)                                           |

---

## Project Structure

```
10000-ideas/
├── index.html
├── css/
│   ├── theme.css          # Design tokens — colors, fonts, transitions
│   ├── common.css         # Navbar, buttons, section dividers, shared utilities
│   ├── hero.css
│   ├── stats.css
│   ├── how-it-works.css
│   ├── idea-explorer.css
│   ├── journey.css
│   ├── manufacturing.css
│   ├── funding.css
│   ├── featured.css
│   ├── verticals.css
│   ├── testimonials.css
│   ├── subscribe.css
│   ├── footer.css
│   └── roulette.css
├── js/
│   ├── app.js             # Entry point — imports and initialises all modules
│   ├── common.js          # Shared logic — counter animation, IntersectionObserver
│   ├── hero.js
│   ├── how-it-works.js
│   ├── idea-explorer.js
│   ├── journey.js
│   ├── manufacturing.js
│   ├── funding.js
│   ├── testimonials.js
│   ├── subscribe.js
│   └── roulette.js
└── README.md
```

---

## AI Tools Used

**Primary tool:** Anti gravity

Anti gravity was used throughout the entire development cycle — from scaffolding the design system to debugging layout issues and refactoring the codebase into a modular architecture.

---

## Important Prompts Used

### 1. Design System Foundation

> "Use web search and as per the design direction mentioned in requirement.md, build a `theme.css` with CSS variables which acts as centralized design system

---

### 2. Base Layout and Background

> "Now move to step 1 — build the base page background. Apply the obsidian background from theme.css, add a subtle CSS grid overlay pattern.

---

### 3. Hero Section

> "Build the hero section as per step 2 in the requirements. Giant headline with animated counter, subheadline, two CTA buttons (primary amber and ghost outline), floating animated tags cycling through Manufacturing / Funding / Market Research / Legal Setup / Product Design / Growth Hacking on the left and right of the headline.

### 4. Modular Architecture Refactor

> "I noticed the code is not using a modular approach. Refactor the codebase: `theme.css` should contain only design tokens. Every section gets its own CSS file inside `/css/`. Shared styles like navbar and buttons go into `common.css`. On the JS side, `app.js` is the entry point that imports everything. Section-specific logic lives in its own file under `/js/`. Shared utilities like the counter animation go into `common.js`. Do not change any visual output — only restructure."

---

### 5. Diagonal Section Dividers

> "The requirement specifies that sections should not be separated by plain horizontal lines. Add diagonal SVG dividers between each section. Alternate the slant direction (top-left to bottom-right, then reverse) so the page has a dynamic, editorial flow. "

---

### 6. Journey Timeline with Hover Popovers

> "Build the 8-stage horizontal journey roadmap. Stages: Ideation → Validation → Business Plan → Manufacturing → Legal & IP → Seed Funding → Launch → Scale & Exit. Each stage has a phase number, icon, title, short description, and a Learn More link.

### 6.1 chnage Ui for timeline

> "please add highlighted hover effect at each stage and also display the pop over below for neat layout instead of clutterness

---

### 7. Mobile Hamburger Navigation

> "Implement a working hamburger menu for mobile screens. On screens below 768px, hide the nav links and show a hamburger icon. Clicking it slides in a full-height panel from the right with the nav links. Add a dark overlay behind the panel. Clicking any nav link or the overlay closes the menu. Animate the hamburger icon into an X when open."

---

### 8. Floating Tags Gold Border Fix

> "In the hero section on desktop, the floating tags currently only show a gold border on hover. Make the gold border always visible in the default state as well. Keep the hover glow effect but remove the border-color change since it's already gold by default."

## How to Run Locally

No build step required.

```bash
git clone https://github.com/girishkumarreddymallela/thirdEyeTest
cd 10000-ideas
```

Open `index.html` directly in a browser, or use a local server to avoid ES module CORS restrictions:
