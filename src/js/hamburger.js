// Hamburger Menu
$(document).ready(function () {
    $(".menu").click(function () {
        $(".menu").toggleClass("active");
        $(".navbar-menu").toggleClass("active");

    });
    $('.menu a').on("click", function () {
        $('.menu').removeClass('active');
    });
});