$(document).ready(function(){
    $(".faceboookwidget").hover(function() {
        $(this).stop().animate({right: "0"}, "medium");
    }, function() {
        $(this).stop().animate({
            right: "-345"
        }, "medium");
    }, 500);
});
