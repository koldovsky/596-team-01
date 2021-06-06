const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 6,
        spaceBetween: 5
      }
    }
  });