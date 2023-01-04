import { isEscEvent } from "./util.js";

const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.modal__close');
const focusableElements = modal.querySelectorAll('input, textarea, a, button, [tabindex]');
let opener;

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const returnFocus = () => {
  focusableElements[0].focus();
};

const openModal = (evt) => {
  opener = evt.target;
  const bodyWidth = document.body.clientWidth;

  modal.classList.add('modal--open');
  document.body.classList.add('page__body--no-scroll');
  document.addEventListener('keydown', onModalEscKeydown);
  focusableElements[focusableElements.length - 1].addEventListener('blur', returnFocus);
  focusableElements[1].focus();

  if (document.body.clientWidth > bodyWidth) {
    document.body.style.paddingRight = document.body.clientWidth - bodyWidth + 'px';
  }
};

const closeModal = (evt) => {
  modal.classList.remove('modal--open');
  document.body.classList.remove('page__body--no-scroll');
  document.removeEventListener('keydown', onModalEscKeydown);
  focusableElements[focusableElements.length - 1].removeEventListener('blur', returnFocus);

  document.body.style.paddingRight = '0';

  opener.focus();
};

closeButton.addEventListener('click', closeModal);

export { openModal };
