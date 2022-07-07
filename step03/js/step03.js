$(function () {
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on')
    });
})