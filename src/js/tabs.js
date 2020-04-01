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