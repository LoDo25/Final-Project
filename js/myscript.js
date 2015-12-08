$('.carousel').carousel({
  interval: 2000
})
$(window).scroll(function() {
   if ($(".navbar-default").offset().top > 70) {
       $(".navbar-default").addClass("test");
   } else {
       $(".navbar-default").removeClass("test");
   }
});

$(function() {
   $('a.page-scroll').bind('click', function(event) {
       var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: ($($anchor.attr('href')).offset().top - 75)
       }, 1500, 'easeInOutExpo');
       event.preventDefault();
   });
});