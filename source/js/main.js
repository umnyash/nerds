import { initSlider } from './slider.js';
import { initModal } from './modal.js';
import { initRange } from './range.js';
import { initNumberRange } from './number-range.js';

const modal = document.querySelector('.modal');
if (modal) {
  const setModal = initModal(modal);
  document.querySelectorAll('[data-modal-content]').forEach(setModal);
}

document.querySelectorAll('.slider').forEach(initSlider);
document.querySelectorAll('.range').forEach(initRange);
document.querySelectorAll('.number-range').forEach(initNumberRange);
