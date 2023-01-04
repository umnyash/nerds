const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc'
};

const isEscEvent = (evt) => {
  return evt.key === Keys.ESCAPE || evt.key === Keys.ESC;
};

export { isEscEvent };
