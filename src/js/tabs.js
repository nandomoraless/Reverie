$('#tabs__day li a').click(function () {
    var t = $(this).attr('id');

    if ($(this).hasClass('inactive')) { //this is the start of our condition 
        $('#tabs__day li a').addClass('inactive');
        $(this).removeClass('inactive');

        $('.tabs__container').hide();
        $('#' + t + 'C').fadeIn('slow');
    }
});