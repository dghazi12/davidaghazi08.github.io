//When you click view my work button, it will take you to the about section of the webpage
$('.view').click(function(){
    $('html, body').animate({
        scrollTop: ($('.navbar-dark').offset().top)
    },500);
});

//When you click view my resume button, it will take you to a pdf file of my resume
$(".cv").click(function() {
    window.open("images/Full-Stack Resume-pages-1.pdf", "windowName");
});

//When you click home button, it will take you to the welcome section of the webpage
$('.home-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('body').offset().top)
    },500);
});

//When you click about button, it will take you to the about section of the webpage
$('.about-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('.about').offset().top)
    },500);
});

//When you click portfolio button, it will take you to the portfolio section of the webpage
$('.portfolio-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('.portfolio').offset().top)
    },500);
});

//When you click contact button, it will take you to the contact section of the webpage
$('.contact-button').click(function(){
    $('html, body').animate({
        scrollTop: ($('.contact112').offset().top)
    },500);
});

$("#osas-github").click(function() {
    window.open('https://github.com/leeroyp/OsasTracks.github.io', '_blank');
});


//Created a sitcky nav bar. When you scroll through the page, the navbar scrolls as well
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