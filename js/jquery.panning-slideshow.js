(function ( $ ) {

$.fn.slideshow = function(options) {

  var slides = $(this);

  var settings = $.extend({
    // These are the default settings
    randomize: true,
    slideDuration: 7000,
    fadeDuration: 1000,
    lostFocusTimeout: 3000,
    slideElement: '.slide'
  }, options);

  // Randomize slides
  if(settings.randomize == true){
    var slidesDOM = slides[0];
    for (var i = slidesDOM.children.length; i >= 0; i--) {
      slidesDOM.appendChild(slidesDOM.children[Math.random() * i | 0]);
    }
  }

  // Insert slideshow element
  $('<div id="slideshow"></div>').insertBefore(slides);

  // Define variables
  var paused = false,
      pauseTimeout = false,
      slidesIntervalDuration = settings.slideDuration - settings.fadeDuration;

  // Add the first slide to the slideshow
  slides.find(settings.slideElement + ':first span').addClass('active');
  slides.find(settings.slideElement + ':first').prependTo('#slideshow');

  // Trigger slideRefresh for the first time
  console.log('Slideshow started for first time.');
  slidesInterval = setInterval(slideRefresh, slidesIntervalDuration);

  // $(window).focus(function() {
  //   if (paused == true) {
  //     console.log('Window gained focus.');
  //     if(pauseTimeout == false){
  //       console.log('Window lost focus longer than ' + settings.lostFocusTimeout + ' ms.');
  //       slideRefresh();
  //     }
  //     paused = false;
  //     slidesInterval = setInterval(slideRefresh, slidesIntervalDuration);
  //   }
  // }).blur(function() {
  //   console.log('Window lost focus, slideshow paused.');
  //   pauseTimeout = true
  //   setTimeout(function(){pauseTimeout = false}, settings.lostFocusTimeout);
  //   paused = true;
  //   clearInterval(slidesInterval);
  // });

  function slideRefresh() {
    console.log('Slide refresh triggered.');
    //var slideshowDOM = $('#slideshow')[0];
    //if(slideshowDOM.children.length == 0) {
      //console.log('There are no slides in the slideshow.');
      //slides.find(settings.slideElement + ':first').prependTo('#slideshow');
    //}else{
      slides.find(settings.slideElement + ':first').prependTo('#slideshow');
      $('#slideshow ' + settings.slideElement + ':first span').addClass('active');
      $('#slideshow ' + settings.slideElement + ':last').fadeOut(settings.fadeDuration, function(){
        $('#slideshow ' + settings.slideElement + ':last span').removeClass('active')
        $('#slideshow ' + settings.slideElement + ':last').appendTo(slides);
        slides.find(settings.slideElement).show(0);
      });
    //}
  }
};

}( jQuery ));
