const initSlider = (slider) => {
  let currentSlideNumber = 0;

  const slides = slider.querySelectorAll('.slider__item');
  const slideButtonsWrapper = slider.querySelector('.slider__slides-buttons');
  const slideButtons = slideButtonsWrapper.querySelectorAll('.slider__slide-button');

  const changeSlide = (newSlideNumber) => {
    slides[currentSlideNumber].classList.remove('slider__item--current');
    slideButtons[currentSlideNumber].classList.remove('slider__slide-button--current');
    currentSlideNumber = newSlideNumber;
    slides[currentSlideNumber].classList.add('slider__item--current');
    slideButtons[currentSlideNumber].classList.add('slider__slide-button--current');
  };

  slideButtonsWrapper.addEventListener('click', ({target}) => {
    const button = target.closest('.slider__slide-button');
    if (!button) {
      return;
    }
    changeSlide(button.dataset.number);
  });
};

export { initSlider };
