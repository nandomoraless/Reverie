$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                target.focus(); // Setting focus
                if (target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    target.focus(); // Setting focus
                };
                return false;
            }
        }
    });
});
// Hamburger Menu
$(document).ready(function () {
    $(".menu").click(function () {
        $(".menu").toggleClass("active");
        $(".navbar-menu").toggleClass("active");

    });
    $('.menu-listing li a').on("click", function () {
        $(".menu").removeClass('active');
        $(".navbar-menu").removeClass('active');
    });
});
// Tabs

$(document).ready(function () {

    $('#tabs__day li a:not(:first)').addClass('inactive');
    $('.tabs__container').hide();
    $('.tabs__container:first').show();

    $('#tabs__day li a').click(function () {
        var t = $(this).attr('id');
        if ($(this).hasClass('inactive')) { //this is the start of our condition 
            $('#tabs__day li a').addClass('inactive');
            $('#tabs__day li a').attr('aria-expanded', 'false');

            $(this).removeClass('inactive');
            $(this).attr('aria-expanded', 'true');




            $('.tabs__container').hide();
            $('#' + t + 'C').fadeIn('slow');

        }
    });

});