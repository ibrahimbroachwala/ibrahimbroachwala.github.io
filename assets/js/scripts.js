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

	$('.parallax').parallax();
    $(".button-collapse").sideNav({
      	menuWidth: 200,
      	draggable: true,	
  	});

     $('.nav-but1').hover(
     	function(){
 			$('nav-but1').animateCss('jackInTheBox');
     	});
     $('.nav-but2').hover(
     	function(){
 			$('nav-but2').animateCss('jackInTheBox');
     	});
     $('.nav-but3').hover(
     	function(){
 			$('nav-but3').animateCss('jackInTheBox');
     	});
     $('.nav-but4').hover(
     	function(){
 			$('nav-but4').animateCss('jackInTheBox');
     	});

});