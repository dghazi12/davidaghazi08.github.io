//When you click view my work button, it will take you to the about section of the webpage
$('.view').click(function () {
    $('html, body').animate({
        scrollTop: ($('.navbar-dark').offset().top)
    }, 500);
});

//When you click view my resume button, it will take you to a pdf file of my resume
$(".cv").click(function () {
    window.open("images/Full-Stack Resume-pages-1.pdf", "windowName");
});

//When you click home button, it will take you to the welcome section of the webpage
$('.home-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('body').offset().top)
    }, 500);
});

//When you click about button, it will take you to the about section of the webpage
$('.about-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('.about').offset().top)
    }, 500);
});

//When you click portfolio button, it will take you to the portfolio section of the webpage
$('.portfolio-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('.portfolio').offset().top)
    }, 500);
});

//When you click contact button, it will take you to the contact section of the webpage
$('.contact-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('.contact-title').offset().top)
    }, 500);
});

//When you click on view work, it will take you to the working webpage
$("#osas-tracks").click(function () {
    window.open('images/coming-soon-1.png', '_blank');
});

//When you click on view work, it will take you to github where all the code is
$("#osas-github").click(function () {
    window.open('https://github.com/leeroyp/OsasTracks.github.io', '_blank');
});

//When you click on view work, it will take you to the working webpage
$("#code-quiz").click(function () {
    window.open('https://dghazi12.github.io/davidaghazi04.github.io/', '_blank');
});

//When you click on view work, it will take you to github where all the code is
$("#code-github").click(function () {
    window.open('https://github.com/dghazi12/davidaghazi04.github.io', '_blank');
});

//When you click on view work, it will take you to the working webpage
$("#weather-dashboard").click(function () {
    window.open('https://dghazi12.github.io/davidaghazi06.github.io/', '_blank');
});

//When you click on view work, it will take you to github where all the code is
$("#weather-github").click(function () {
    window.open('https://github.com/dghazi12/davidaghazi06.github.io', '_blank');
});

//When you click on view work, it will take you to the working webpage
$("#work-schedule").click(function () {
    window.open('https://dghazi12.github.io/davidaghazi05.github.io/', '_blank');
});

//When you click on view work, it will take you to github where all the code is
$("#work-github").click(function () {
    window.open('https://github.com/dghazi12/davidaghazi05.github.io', '_blank');
});

//When you click on view work, it will take you to the working webpage
$("#password-generator").click(function () {
    window.open('https://dghazi12.github.io/davidaghazi03.github.io/', '_blank');
});

//When you click on view work, it will take you to github where all the code is
$("#password-github").click(function () {
    window.open('https://github.com/dghazi12/davidaghazi03.github.io', '_blank');
});

//When you click arrow up button, it will take you to the welcome section of the webpage
$('.straight-top').click(function () {
    $('html, body').animate({
        scrollTop: ($('body').offset().top)
    }, 500);
});

//When you click on linkedin logo, it will take you to my linkedin profile
$(".fa-linkedin").click(function () {
    window.open('https://www.linkedin.com/in/davidaghazi/', '_blank');
});

//When you click on github logo, it will take you to my github profile
$(".fa-github-square").click(function () {
    window.open('https://github.com/dghazi12', '_blank');
});

//When you click on instagram logo, it will take you to my instagram profile
$(".fa-instagram-square").click(function () {
    window.open('https://www.instagram.com/d.ghazi_/', '_blank');
});

//When you click on twitter logo, it will take you to my twitter profile
$(".fa-twitter-square").click(function () {
    window.open('https://twitter.com/50whereimatEM', '_blank');
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