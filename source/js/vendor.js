// Swiper 7.4.1
import Swiper from './vendor/swiper';

const trainersSwiper = new Swiper('.trainers__swiper', {
  navigation: {
    nextEl: '.trainers__swiper-next-btn',
    prevEl: '.trainers__swiper-prev-btn',
  },
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  on: {
    afterInit() {
      setTabindex(this);
    },

    keyPress(swiper, keyCode) {
      if (keyCode === 9 || keyCode === 32 || keyCode === 37 || keyCode === 39) {
        clearTabindex();
        setTabindex(this);
      }
    },

    slideChange() {
      let currentSlide = document.querySelector('.swiper-slide-active');
      if (this.slides[0] !== currentSlide) {
        clearTabindex();
        setTabindex(this);
      }
    },
  },
});

function clearTabindex() {
  const allOverlays = document.querySelectorAll('.trainers__overlay[tabindex]');
  allOverlays.forEach((el) => el.removeAttribute('tabIndex'));
}

function setTabindex(swiper) {
  const activeSlideOverlay = document.querySelector('.swiper-slide-active .trainers__overlay');
  activeSlideOverlay.tabIndex = '0';

  let currentSlide = document.querySelector('.swiper-slide-active');
  const tabbedCount = swiper.params.slidesPerView;

  if (tabbedCount > 0) {
    for (let i = 0; i < tabbedCount - 1; i++) {
      currentSlide = currentSlide.nextElementSibling;
      const overlay = currentSlide.querySelector('.trainers__overlay');
      overlay.tabIndex = '0';
    }
  }
}

const reviewsSwiper = new Swiper('.reviews__swiper', {
  navigation: {
    nextEl: '.reviews__swiper-next-btn',
    prevEl: '.reviews__swiper-prev-btn',
  },
  slidesPerView: 1,
  spaceBetween: 80,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  on: {
    afterInit() {
      const activeSlide = document.querySelector('.swiper-slide-active.reviews__slide');
      activeSlide.tabIndex = '0';
    },

    keyPress(swiper, keyCode) {
      if (keyCode === 9 || keyCode === 32 || keyCode === 37 || keyCode === 39) {
        const oldActiveSlide = document.querySelector('.reviews__slide[tabindex]');
        oldActiveSlide.removeAttribute('tabIndex');
        const activeSlide = document.querySelector('.swiper-slide-active.reviews__slide');
        activeSlide.tabIndex = '0';
      }
    },

    slideChange() {
      const oldActiveSlide = document.querySelector('.reviews__slide[tabindex]');
      oldActiveSlide.removeAttribute('tabIndex');
      const activeSlide = document.querySelector('.swiper-slide-active.reviews__slide');
      activeSlide.tabIndex = '0';
    },
  },
});

export {trainersSwiper, reviewsSwiper};
