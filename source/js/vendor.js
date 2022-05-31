// Swiper 7.4.1
import Swiper from './vendor/swiper';
// import './vendor/swiper-old';

const trainersSwiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.trainers__swiper-next-btn',
    prevEl: '.trainers__swiper-prev-btn',
  },
  loop: true,
  // watchOverflow: true,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

export {trainersSwiper};
