$('.view').click(function(){
    $('html, body').animate({
        scrollTop: ($('.navbar-dark').offset().top)
    },500);
});

$('.home-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('body').offset().top)
    },500);
});

$('.about-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('.about').offset().top)
    },500);
});

$('.portfolio-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('.portfolio').offset().top)
    },500);
});

$('.contact-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('.contact').offset().top)
    },500);
});

$(document).ready(function () {  
    var top = $('.navbar-dark').offset().top - parseFloat($('.navbar-dark').css('marginTop').replace(/auto/, 100));
    $(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();
  
      // whether that's below the form
      if (y >= top) {
        // if so, ad the fixed class
        $('.navbar-dark').addClass('fixed');
      } else {
        // otherwise remove it
        $('.navbar-dark').removeClass('fixed');
      }
    });
  });