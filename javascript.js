
// TAB 
$('ul li a').hover(function() {
     var x = $(this);
     $('.menuUnderline').stop().animate({
        'width': x.width(),
        'left' : x.position().left
     }, 400);
});

// CAROUSEL
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
