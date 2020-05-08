$(document).ready(function(){

    var img = "";
    var bg = ""
    $(".gallery-tile").click(function () {
        $('body').find(".modal").addClass('is-active');

        img = $(this).find('img').attr('src');

        bg = $(this).find('img').css('background-color');
        bg2 = $(this).find('img').css('background-image');

        $('body').find(".modal").find('img').attr('src', img)
        $('body').find(".modal").find('img').css('background-color', bg)
        $('body').find(".modal").find('img').css('background-image', bg2)
    });


    $(".modal-close").click(function () {
        $('body').find(".modal").removeClass('is-active');
    })
    $(".modal-background").click(function () {
        $('body').find(".modal").removeClass('is-active');
    })
});