const button = document.querySelector('.contacts-card__button');

const initContactsCardButton = (cb) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    cb(evt);
  })
};

export { initContactsCardButton };
