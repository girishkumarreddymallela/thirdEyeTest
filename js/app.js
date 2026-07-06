import { initCounters } from './common.js';
import { initTagCycling } from './hero.js';
import { initHowItWorksAnimation } from './how-it-works.js';
import { initIdeaExplorer } from './idea-explorer.js';
import { initJourney } from './journey.js';
import { initManufacturing } from './manufacturing.js';
import { initFunding } from './funding.js';
import { initTestimonials } from './testimonials.js';
import { initSubscribe } from './subscribe.js';
import { initRoulette } from './roulette.js';

document.addEventListener('DOMContentLoaded', () => {
  initCounters();
  initTagCycling();
  initHowItWorksAnimation();
  initIdeaExplorer();
  initJourney();
  initManufacturing();
  initFunding();
  initTestimonials();
  initSubscribe();
  initRoulette();
});
