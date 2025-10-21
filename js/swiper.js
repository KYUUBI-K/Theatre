const thumbsSwiper = new Swiper(".thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesProgress: true,
  simulateTouch: false,
});
const mainSwiper = new Swiper(".main-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
  watchSlidesProgress: true,
  simulateTouch: false,
});

const productionSwiper = new Swiper(".productions__swiper-slider", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".production__slider__next",
    prevEl: ".production__slider__prev",
  },
  breakpoints: {
    1440: { slidesPerView: 4 },
    993: { slidesPerView: 1.56 },
    768: { slidesPerView: 1.55 },
    576: { slidesPerView: 1.15 },
    320: { slidesPerView: 1 },
  },
});

const partnersSwiper = new Swiper(".partners__swiper-slider", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".partners__slider__next",
    prevEl: ".partners__slider__prev",
  },

  breakpoints: {
    1440: { spaceBetween: 28, slidesPerView: 4 },
    993: { spaceBetween: 27, slidesPerView: 2.52 },
    768: { spaceBetween: 28, slidesPerView: 2.52 },
    576: { slidesPerView: 1.79 },
    320: {
      slidesPerView: 1,
    },
  },
});
