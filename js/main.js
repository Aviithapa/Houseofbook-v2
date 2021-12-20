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

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
