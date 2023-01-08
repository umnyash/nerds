import { initSlider } from './slider.js';
import { initModal } from './modal.js';

const modal = document.querySelector('.modal');
if (modal) {
  const setModal = initModal(modal);
  document.querySelectorAll('[data-modal-content]').forEach(setModal);
}

document.querySelectorAll('.slider').forEach(initSlider);
