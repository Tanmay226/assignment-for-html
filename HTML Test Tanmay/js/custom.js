// for navbar 
window.addEventListener('scroll', function () {
    const topNavSec = document.querySelector('.top-header-sec');
    if (window.scrollY > 100) {
        topNavSec.classList.add('active');
    } else {
        topNavSec.classList.remove('active');
    }
});
// for carosel
jQuery(document).ready(function ($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('.review-slider').owlCarousel({
        loop: true,

        items: 3,
        margin: 35,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 25
            },
            992: {
                items: 3
            }
        }
    });
    // logo-slider
    $('.logo-slider').owlCarousel({
        loop: true,
        items: 5,
        margin: 65,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3,
                margin: 25
            },
            992: {
                items: 5
            }
        }
    });
});
// logo slider

