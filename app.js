$(function () {
  /* Fixed Header */
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    let scrollPos = $(window).scrollTop();

    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });

  /* burger menu */
  // обработчик на меню
  $(".burger").on("click", function (e) {
    $(".nav").toggleClass("nav--active");
  });
  // если клик вне области меню = закрыть меню
  $(document).on("click", function (e) {
    if (
      $(e.target).closest(".nav").length == 0 &&
      $(".nav").hasClass("nav--active") &&
      $(e.target).closest(".burger").length == 0
    ) {
      $(".nav").toggleClass("nav--active");
    }
  });
  // если клик на ссылку внутри меню = закрыть меню
  $(".nav__link").on("click", function (e) {
    $(".nav").toggleClass("nav--active");
  });

  /* Reviews slider:
    https://kenwheeler.github.io/slick/ */
  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});
