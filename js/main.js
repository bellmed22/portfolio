/*----------------------------------------------------*
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function () {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.navbar').addClass('sticky-top');
    } else {
        $('.navbar').removeClass('sticky-top');
    }
});


// Smooth scrolling
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;


    // Scroll - Active Links

    window.scrollTo({top: offsetTop, behavior: 'smooth'});

    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}


/*----------------------------------------------------*/
/* Dark Mode
------------------------------------------------------ */

document.querySelector('input[name=theme-switcher]').addEventListener('change', (e) => {
    document.body.classList.toggle('dark');
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function ($) {

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

});


// SLIDER


// SELECTORES

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}
