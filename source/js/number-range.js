const initNumberRange = (numberRange) => {
  const range = numberRange.querySelector('.range');
  const minField = numberRange.querySelector('.number-range__min .number-field__control');
  const maxField = numberRange.querySelector('.number-range__max .number-field__control');
  const rangeLimit = maxField.max;

  const setRangeValue = (type, value) => {
    range.dataset[`${type}Value`] = value / rangeLimit * 100;
    range.style.setProperty(`--button-${type}-position`, `${range.dataset[`${type}Value`]}%`);
  };

  const setFieldsValueFromRange = () => {
    minField.value =  Math.round(rangeLimit * range.dataset.minValue / 100);
    maxField.value =  Math.round(rangeLimit * range.dataset.maxValue / 100);
  };

  const adjustFieldValue = (field) => {
    if (+field.value < +field.min) {
      field.value = field.min;
    }

    if (+field.value > +field.max) {
      field.value = field.max;
    }
  };

  minField.addEventListener('input', () => {
    adjustFieldValue(minField);

    if (+minField.value > +maxField.value) {
      maxField.value = minField.value;
      setRangeValue('max', maxField.value);
    }
    setRangeValue('min', minField.value);
  });

  maxField.addEventListener('input', () => {
    adjustFieldValue(maxField);

    if (+maxField.value < +minField.value) {
      minField.value = maxField.value;
      setRangeValue('min', minField.value);
    }
    setRangeValue('max', maxField.value);
  });

  range.addEventListener('change', () => {
    setFieldsValueFromRange();
  });

  setRangeValue('min', minField.value);
  setRangeValue('max', maxField.value);
};

export { initNumberRange };
