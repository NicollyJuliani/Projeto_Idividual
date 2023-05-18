var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:3,
    loop: true,
    loopFillGroupdWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nexEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  