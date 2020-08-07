let slides = document.querySelectorAll('.result__slider-item');
let buttons = document.querySelectorAll('.result__slider-button');
let toggle = document.querySelector('.result__slider-toggle');

for (let button of buttons) {
  button.addEventListener('click', function (evt) {
    if (!button.classList.contains('result__slider-button--current')) {
      for (let slide of slides) {
        slide.classList.toggle('result__slider-item--current');
      }
      for (let button of buttons) {
        button.classList.toggle('result__slider-button--current');
      }
      toggle.classList.toggle('result__slider-toggle--right');
    } else {
      evt.preventDefault();
    }
  })
}
