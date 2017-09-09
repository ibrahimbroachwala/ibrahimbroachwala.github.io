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


});