import { isEscEvent, getFocusableElements } from "./util.js";

const initModal = (modal) => {
  const closeButton = modal.querySelector('.modal__close');
  const modalContent = modal.querySelector('.modal__content');
  const modalFocusStops = modal.querySelectorAll('.modal__focus-stop')
  let focusableElements = [];
  let opener = null;

  const focusFirst = () => {
    focusableElements[0].focus();
  };

  const focusLast = () => {
    focusableElements[focusableElements.length - 1].focus();
  };

  const openModal = (content) => {
    const bodyWidth = document.body.clientWidth;

    modalContent.appendChild(content);

    modal.classList.add('modal--open');
    document.body.classList.add('page__body--no-scroll');

    if (document.body.clientWidth > bodyWidth) {
      document.body.style.paddingRight = `${document.body.clientWidth - bodyWidth}px`;
    }

    document.addEventListener('keydown', onModalEscKeydown);

    focusableElements = getFocusableElements(modal.querySelector('.modal__inner'));
    focusableElements[0].focus();
    modalFocusStops[0].addEventListener('focus', focusLast);
    modalFocusStops[1].addEventListener('focus', focusFirst);
  };

  const closeModal = () => {
    document.querySelector('.modal--open').classList.remove('modal--open');
    document.body.classList.remove('page__body--no-scroll');
    document.removeEventListener('keydown', onModalEscKeydown);

    document.body.style.paddingRight = '0';

    opener.focus();

    modalFocusStops[0].removeEventListener('focus', focusLast);
    modalFocusStops[1].removeEventListener('focus', focusFirst);

    modalContent.innerHTML = '';
  };

  const onModalEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  closeButton.addEventListener('click', closeModal);

  const setModal = (content) => {
    content.remove();
    const contentName = content.dataset.modalContent;

    content.classList.add(`modal__${contentName}`);
    const buttons = document.querySelectorAll(`[data-modal-open=${contentName}]`);

    buttons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
        openModal(content);
        opener = evt.target.closest('[data-modal-open]');
      });
    });
  }

  return setModal;
};

export { initModal };
