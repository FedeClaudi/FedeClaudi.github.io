$(document).ready(function(){


    $(".show-cv").click(function () {
        var btn 
        btn = $(this).find(".show-cv-button")

        if (btn.text() == 'Show CV'){
            btn.text('Close CV');
            $(document).find(".CV").slideToggle();
        } else {
            btn.text('Show CV');
            $(document).find(".CV").slideToggle();
        }
    });

});