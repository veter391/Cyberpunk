const swiper = new Swiper('.swiper', {
  loop:true,
  autoplay: {
    delay:3000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


// custom checkbox is checked
const checkbox = document.querySelector('.checkbox__input'),
      customCheckbox = document.querySelector('.checkbox__custom');

checkbox.addEventListener('click', ()=> {
  if(checkbox.checked == true) {
    customCheckbox.classList.add('active');
  } else {
    customCheckbox.classList.remove('active');
  }
});

// glich hero effect
const heroInfoBtn = document.querySelector('.hero-info__btn'),
      heroSlide = document.querySelector('.hero__slider');

heroInfoBtn.onmouseover = () => {
  heroSlide.classList.add('slider-glich');
};
heroInfoBtn.onmouseout = () => {
  heroSlide.classList.remove('slider-glich');
};
