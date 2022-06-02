// Swiper 7.4.1
import Swiper from './vendor/swiper';

const trainersSwiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.trainers__swiper-next-btn',
    prevEl: '.trainers__swiper-prev-btn',
  },
  loop: true,
  // watchOverflow: true,
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
});

export {trainersSwiper};
