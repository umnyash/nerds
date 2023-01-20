const initRange = (range) => {
  const changeEvent = new Event('change', { bubbles: true });

  const buttonMin = range.querySelector('.range__button[data-type="min"]');
  const buttonMax = range.querySelector('.range__button[data-type="max"]');
  const halfButtonWidth = buttonMin.offsetWidth / 2;

  buttonMin.style.left = '0%';
  buttonMax.style.left = '100%';

  let rangeStart = 0;
  let rangeWidth = 0;
  let rangeEnd = 0
  let buttonMinPosition = 0;
  let buttonMaxPosition = 0;
  let dragStartX = 0;
  let activeButton = null;
  let activeButtonStartPosition = 0;

  const setScale = (min, max) => {
    range.style.setProperty('--button-min-position', `${min}%`);
    range.style.setProperty('--button-max-position', `${max}%`);
  };

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
    activeButton.style.left = `${position}%`;

    let buttonMinValue = parseInt(buttonMin.style.left, 10);
    let buttonMaxValue = parseInt(buttonMax.style.left, 10);

    if (activeButton === buttonMin && buttonMinValue > buttonMaxValue) {
      buttonMaxValue = buttonMinValue;
      buttonMax.style.left = `${buttonMaxValue}%`;
    }

    if (activeButton === buttonMax && buttonMaxValue < buttonMinValue) {
      buttonMinValue = buttonMaxValue;
      buttonMin.style.left = `${buttonMinValue}%`;
    }

    setScale(buttonMinValue, buttonMaxValue);

    range.dispatchEvent(changeEvent);
  };

  const dragButton = (evt) => {
    const shift = evt.clientX - dragStartX;
    setButtonPosition(calcButtonPosition(shift));
  };

  const endDragButton = () => {
    document.removeEventListener('mousemove', dragButton);
    document.removeEventListener('mouseup', endDragButton);
    activeButton.classList.remove('range__button--active');
  };

  const startDragButton = (evt) => {
    activeButton = evt.target;
    rangeStart = range.getBoundingClientRect().x;
    rangeWidth = range.getBoundingClientRect().width;
    rangeEnd = rangeStart + rangeWidth;
    buttonMinPosition = rangeStart - halfButtonWidth;
    buttonMaxPosition = rangeEnd - halfButtonWidth;
    dragStartX = evt.clientX;
    activeButtonStartPosition = activeButton.getBoundingClientRect().x;
    activeButton.classList.add('range__button--active');

    if (!evt.key) {
      document.addEventListener('mousemove', dragButton);
      document.addEventListener('mouseup', endDragButton);
    }
  };

  buttonMin.addEventListener('mousedown', startDragButton);
  buttonMax.addEventListener('mousedown', startDragButton);

  buttonMin.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowRight') {
      evt.preventDefault();
      startDragButton(evt);
      const shift = 1;
      setButtonPosition(calcButtonPosition(shift));
    }

    if (evt.key === 'ArrowLeft') {
      evt.preventDefault();
      startDragButton(evt);
      const shift = -1;
      setButtonPosition(calcButtonPosition(shift));
    }
  })

  buttonMax.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowRight') {
      evt.preventDefault();
      startDragButton(evt);
      const shift = 1;
      setButtonPosition(calcButtonPosition(shift));
    }

    if (evt.key === 'ArrowLeft') {
      evt.preventDefault();
      startDragButton(evt);
      const shift = -1;
      setButtonPosition(calcButtonPosition(shift));
    }
  })
};

export { initRange };
