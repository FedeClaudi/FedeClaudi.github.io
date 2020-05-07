$(document).ready(function(){

    var img = "";
    var bg = ""
    $(".gallery-tile").click(function () {
        $('body').find(".modal").addClass('is-active');

        img = $(this).find('img').attr('src');

        bg = $(this).find('img').css('background-color');

        $('body').find(".modal").find('img').attr('src', img)
        $('body').find(".modal").find('img').css('background-color', bg)
    });


    $(".modal-close").click(function () {
        $('body').find(".modal").removeClass('is-active');
    })
    $(".modal-background").click(function () {
        $('body').find(".modal").removeClass('is-active');
    })
});