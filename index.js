
(function ($) {
    "use strict";

    // loading page
    $(window).on('load', function () {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    });

    $(window).on('scroll load', function () {
        if (window.pageYOffset > 100) {

            $("nav").addClass("bg-light");
            $("nav").addClass("navbar-light");
            $("nav").removeClass("navbar-dark");
            $("#logoPojok").addClass("brand-dark");
            $("#logoPojok").removeClass("brand-light");
            $("#posisilogo").removeClass("navbar-brand-position");
            $("#navbarsExampleDefault").removeClass("navbar-link-position");
            $("#myBtn").addClass("show");

        }
        else {
            $("nav").removeClass("bg-light");
            $("nav").addClass("navbar-dark");
            $("#logoPojok").addClass("brand-light");
            $("#logoPojok").removeClass("brand-dark");
            $("#posisilogo").addClass("navbar-brand-position");
            $("#navbarsExampleDefault").addClass("navbar-link-position");
            $("#myBtn").removeClass("show");

        }
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        groupCells: true

    });


}
)(jQuery);

function topFunction() {
    var body = $('html, body');

    body.animate({ scrollTop: 0 }, 500, 'swing');

}
