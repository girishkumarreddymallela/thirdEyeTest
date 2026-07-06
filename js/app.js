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

function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');

  function close() {
    btn.classList.remove('open');
    nav.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay.addEventListener('click', close);

  nav.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', close));
}

document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
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
