const FOCUSABLE_ELEMENT_SELECTORS = [
	'a[href]',
	'area[href]',
	'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
	'button:not([disabled]):not([aria-hidden])',
  'summary:not([disabled]):not([aria-hidden])',
	'iframe',
	'object',
	'embed',
	'[contenteditable]',
	'[tabindex]:not([tabindex^="-"])'
];

const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc'
};

const getFocusableElements = (block) => {
  return block.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS.join());
};

const isEscEvent = (evt) => {
  return evt.key === Keys.ESCAPE || evt.key === Keys.ESC;
};

export { isEscEvent, getFocusableElements };
