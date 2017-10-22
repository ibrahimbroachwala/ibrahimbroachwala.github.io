$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
 


$(document).ready(function(){


	$('.scrollspy').scrollSpy({'scrollOffset': 150});
	$('.parallax').parallax();
    $(".button-collapse").sideNav({
      	menuWidth: 200,
      	closeOnClick: true,
      	draggable: true,	
  	});

 

	$('.percentcircle').percentcircle({
		animate : true,
		diameter : 100,
		guage: 10,
		coverBg: '#0097a7',
		fillcolor: '#043023',
		percentSize: '25px',
		percentWeight: 'normal',
	});



});