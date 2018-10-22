

// functie voor het draaien van de snowglobe
function carrousel() {

	var scrollTop = $(window).scrollTop();

  var x = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * ($(".part").length - 1);

  var posTop = $(window).scrollTop() - $('.part').offset().top;

  var b = posTop;
  var i = Math.ceil((b) / (x / 79) + 1);




	if(i >= 79){
		$('.globe').attr("src","img/seq/79.png");
	} else {
		$('.globe').attr("src","img/seq/" + ("0" + i).slice(-2) + ".png");
	}
}




var $window = $(window);

// update snowglobe tijdens scrollen
$(window).scroll(function(){

	carrousel();

}).trigger('scroll');



snowStorm.snowColor = '#ffffff';
snowStorm.flakesMaxActive = 150;
snowStorm.useTwinkleEffect = false;
snowStorm.snowStick = false;
snowStorm.targetElement = 'snow';
snowStorm.followMouse = false;
//snowStorm.vMaxX = 5;
//snowStorm.vMaxY = 5;
