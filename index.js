
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
        }
        else {
            $("nav").removeClass("bg-light");
            $("nav").addClass("navbar-dark");
            $("#logoPojok").addClass("brand-light");
            $("#logoPojok").removeClass("brand-dark");
            

        }
    });
})(jQuery);