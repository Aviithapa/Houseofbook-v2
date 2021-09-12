$(document).ready(function () {
  $(".sub-menu ").hover(function () {
    $(this).children(".side-block").stop(true, false, true).slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-right fa-caret-left");
  });
});

$(document).ready(function () {
  $(".myslider").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    dotsData: true,
    autoplay: true,
    autoplayTimeout: 3000,
  });
  $(".productslider").owlCarousel({
    items: 7,
    nav: false,
    dots: true,
    dotsData: true,
    autoplay: true,
    autoplayTimeout: 8000,
  });
});
