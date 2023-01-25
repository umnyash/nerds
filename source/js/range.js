const initRange = (range) => {
  const changeEvent = new Event('change', { bubbles: true });

  const buttonMin = range.querySelector('.range__button--min');
  const buttonMax = range.querySelector('.range__button--max');
  const halfButtonWidth = buttonMin.offsetWidth / 2;

  let rangeStart = 0;
  let rangeWidth = 0;
  let rangeEnd = 0
  let buttonMinPosition = 0;
  let buttonMaxPosition = 0;
  let dragStartX = 0;
  let activeButton = null;
  let activeButtonStartPosition = 0;

  const calcButtonPosition = (shift) => {
    let position = activeButtonStartPosition + shift;

    if (position < buttonMinPosition) {
      position = buttonMinPosition;
    } else if (position > buttonMaxPosition) {
      position = buttonMaxPosition;
    }

    const positionOnRangeInPercent = (position - buttonMinPosition) / rangeWidth * 100;
    return positionOnRangeInPercent;
  }

  const setButtonPosition = (position) => {
    if (activeButton === buttonMin) {
      range.dataset.minValue = position;
      range.style.setProperty('--button-min-position', `${range.dataset.minValue}%`);

      if (+range.dataset.minValue > +range.dataset.maxValue) {
        range.dataset.maxValue = range.dataset.minValue;
        range.style.setProperty('--button-max-position', `${range.dataset.maxValue}%`);
      }
    }

    if (activeButton === buttonMax) {
      range.dataset.maxValue = position;
      range.style.setProperty('--button-max-position', `${range.dataset.maxValue}%`);

      if (+range.dataset.maxValue < +range.dataset.minValue) {
        range.dataset.minValue = range.dataset.maxValue;
        range.style.setProperty('--button-min-position', `${range.dataset.minValue}%`)
      }
    }

    range.dispatchEvent(changeEvent);
  };

  const dragButton = (evt) => {
    const clientX = evt.clientX || evt.touches[0].clientX;
    const shift = clientX - dragStartX;
    setButtonPosition(calcButtonPosition(shift));
  };

  const endDragButton = () => {
    document.removeEventListener('mousemove', dragButton);
    document.removeEventListener('mouseup', endDragButton);

    document.removeEventListener('touchmove', dragButton);
    document.removeEventListener('touchend', endDragButton);

    activeButton.classList.remove('range__button--active');
  };

  const startDragButton = (evt) => {
    activeButton = evt.target;
    rangeStart = range.getBoundingClientRect().x;
    rangeWidth = range.getBoundingClientRect().width;
    rangeEnd = rangeStart + rangeWidth;
    buttonMinPosition = rangeStart - halfButtonWidth;
    buttonMaxPosition = rangeEnd - halfButtonWidth;
    activeButtonStartPosition = activeButton.getBoundingClientRect().x;

    if (!evt.key) {
      activeButton.classList.add('range__button--active');
      dragStartX = evt.clientX || evt.touches[0].clientX;

      document.addEventListener('mousemove', dragButton);
      document.addEventListener('mouseup', endDragButton);

      document.addEventListener('touchmove', dragButton);
      document.addEventListener('touchend', endDragButton);
    }

    console.log(evt)
    console.log(evt.clientX)
  };

  const onButtonKeydown = (evt) => {
    let shift = 1;

    if (evt.key === 'ArrowRight') {
      evt.preventDefault();
    }

    if (evt.key === 'ArrowLeft') {
      evt.preventDefault();
      shift *= -1;
    }

    startDragButton(evt);
    setButtonPosition(calcButtonPosition(shift));
  };

  buttonMin.addEventListener('mousedown', startDragButton);
  buttonMax.addEventListener('mousedown', startDragButton);

  buttonMin.addEventListener('touchstart', startDragButton);
  buttonMax.addEventListener('touchstart', startDragButton);

  buttonMin.addEventListener('keydown', onButtonKeydown);
  buttonMax.addEventListener('keydown', onButtonKeydown);
};

export { initRange };
