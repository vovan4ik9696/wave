$(function () {

  $(".menu a, .logo, .footer__logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.slider-blog__wrapper').slick({
    dots: true,
    arrows: false
  })

  $('.menu__btn, .menu__link').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 0) {
      $('.header__top, .header__content').addClass('scrolled');
    }
    if (scrolled <= 0) {
      $('.header__top, .header__content').removeClass('scrolled');
    }

  });

  var mixer = mixitup('.galery__content');
});