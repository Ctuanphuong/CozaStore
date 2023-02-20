"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// scroll header
window.addEventListener('scroll', () => {
    const header_top = $('.header-top .content-top-bar');
    const nav = $('.header-top .wrap-menu-desktop');


    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        header_top.style.display = 'none';
        nav.style.transition = "all .4s linear";
        nav.style.backgroundColor = '#ffffff';
    } else {
        header_top.style.display = 'flex';
        nav.style.backgroundColor = '#ffffff';

    }

})
