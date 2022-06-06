// Swiper 7.4.1
import Swiper from './vendor/swiper';

const trainersSwiper = new Swiper('.trainers__swiper', {
  navigation: {
    nextEl: '.trainers__swiper-next-btn',
    prevEl: '.trainers__swiper-prev-btn',
  },
  loop: true,
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

const reviewsSwiper = new Swiper('.reviews__swiper', {
  navigation: {
    nextEl: '.reviews__swiper-next-btn',
    prevEl: '.reviews__swiper-prev-btn',
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 80,
});

export {trainersSwiper, reviewsSwiper};
