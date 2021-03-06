$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        singleItem: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000
    });
    var dot = $('.owl-carousel .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
        if(index < 10){
            $(this).append(index);
        }else{
            $(this).html(index);
        }
    });
    $(".faceboookwidget").hover(function() {
        $(this).stop().animate({right: "0"}, "medium");
        }, function() {
            $(this).stop().animate({
                right: "-345"
            }, "medium");
            }, 500);

    $('#newsList').newsTicker({
        interval: "5000",
        newsData: "#newsList",
        prevBtnDiv: ".nav-prev",
        nextBtnDiv: ".nav-next",
        playPauseID: ".nav-pause",
        debugMode:0
    });

});


$(window).scroll(function(){
    if ($(window).scrollTop() >= 140) {
        $('.page-header__bottom').addClass('fixed-header');
    }
    else {
        $('.page-header__bottom').removeClass('fixed-header');
    }
});
