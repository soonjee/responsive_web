$(function () {
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.sub_menu').slideUp()
            $(this).next().stop().slideToggle();
        }
    });

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.sub_menu').removeAttr('style')
    });

    var siteMap = $('.gnb>ul')
        .clone()
        .addClass('container')
        .appendTo($('body'))
        .wrap('<div class="sitemap"></div>'); //생성하고 나서 싸줘야 함
    //var wrapper = $('<div class="sitemap"></div>');
    //var siteMap = siteMapInner.wrap(wrapper);
    //siteMap.appendTo($('body'));
    $('<i class="xi-close"></i>').appendTo(siteMap.parent()); // appendTo(el) el의 마지막 자식으로 추가


    $('.mclone').on('click', function () {
        $('.sitemap').show()
    });

    $('.sitemap .xi-close').on('click', function () {
        $('.sitemap').hide()
    })
})