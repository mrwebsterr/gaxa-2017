$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        singleItem: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
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
});
