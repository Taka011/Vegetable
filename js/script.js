$(function() {
    // ハンバーガーメニュー
    $('.menu-btn').on('click', function(){
        $('.header__nav').toggleClass('is-active');
        $('.menu-btn').toggleClass('is-active');
        $('.menu-btn span').toggleClass('active');
        if(('.menu-btn span').hasClass('active')) {
            $('.menu-btn span').addClass('active');
        } else {
            $('.menu-btn span').removeClass('active');
        }
    }); 

    $('.header__list__item a').on('click', function() {
        $('.header__nav').removeClass('is-active');
        $('.menu-btn').removeClass('is-active');
    });

    // ヘッダースクロールイベント
    $(window).on("scroll", function () {
        // ファーストビューの高さを取得
        mvHeight = $("#mainvisual").height();
        if ($(window).scrollTop() > mvHeight - 30) {
        // スクロールの位置がメインビジュアルより下の場合にclassを付与
        $(".header__list").addClass("active");
        $('.header__logo').addClass('active');
        $('.menu-btn span').addClass('active');
        } else {
        // スクロールの位置がメインビジュアルより上の場合にclassを外す
        $(".header__list").removeClass("active");
        $('.header__logo').removeClass('active');
        $('.menu-btn span').removeClass('active');
        }
    });
    // クリックスクロールイベント
    $('a[href^="#"]').on('click', function() {
        let adjust = -50;
        let speed = 500;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top + adjust;
        $("html, body").animate(
            {
                scrollTop: position,
            },
            speed,
            "swing"
        );
        return false;
    });
});

    // スクロールイベント(フェードイン)
    const fadeIn = function() {
    const target = document.getElementsByClassName('fade-in');
    const position = Math.floor(window.innerHeight * .75);

    for (let i = 0; i < target.length; i++) {

        let offsetTop = 
        Math.floor(target[i].getBoundingClientRect().top);
        let offsetBottom = 
        Math.floor(target[i].getBoundingClientRect().bottom);

        if (offsetTop < position) {
            target[i].classList.add('scroll-in');
        };
        
        if (offsetBottom < 0) {
            target[i].classList.remove('scroll-in');
        };
    };
    };
    window.addEventListener('scroll', fadeIn, false);