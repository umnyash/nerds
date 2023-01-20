const initNumberRange = (numberRange) => {
  const inputEvent = new Event('input', { bubbles: true });

  const range = numberRange.querySelector('.range');
  const rangeMinButton = range.querySelector('.range__button[data-type="min"]');
  const rangeMaxButton = range.querySelector('.range__button[data-type="max"]');
  const minField = numberRange.querySelector('.number-field__control[data-type="min"]');
  const maxField = numberRange.querySelector('.number-field__control[data-type="max"]');
  const rangeLimit = maxField.max;

  const setRangeButton = (button, value) => {
    button.style.left = `${value / rangeLimit * 100}%`;
    range.style.setProperty(`--button-${button.dataset.type}-position`, button.style.left);
  };

  const setFieldValueFromRange = (field, button) => {
    field.value = String(rangeLimit * parseInt(button.style.left, 10) / 100);
  };

  setRangeButton(rangeMinButton, minField.value);
  setRangeButton(rangeMaxButton, maxField.value);

  minField.addEventListener('input', () => {
    if (+minField.value > +maxField.value) {
      maxField.value = minField.value;
      setRangeButton(rangeMaxButton, maxField.value);
    }
    setRangeButton(rangeMinButton, minField.value);
  });

  maxField.addEventListener('input', () => {
    if (+maxField.value < +minField.value) {
      minField.value = maxField.value;
      setRangeButton(rangeMinButton, minField.value);
    }
    setRangeButton(rangeMaxButton, maxField.value);
  });

  range.addEventListener('change', () => {
    setFieldValueFromRange(minField, rangeMinButton);
    setFieldValueFromRange(maxField, rangeMaxButton);
  })
};

export { initNumberRange };
