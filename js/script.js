$('body').scrollspy(
	{ target: '#navbar',
	 offset: 52
 });

$('a[href*=#]:not([href=#])').click(function() {
    var target = $(this.hash);
    
      $('html,body').animate({
        scrollTop: target.offset().top - 50
      }, 1000);
      return false;
});

$('.nav a').click(function(){
    $('#navbar').collapse('hide');
});