$(document).ready(() => {
  $('#nav-toggle').on('click', function(event){
    event.preventDefault();
    $('.dropdown-content').slideToggle();
    $(this).toggleClass('active');
  });

  $('.desktop a').on('click', function(event){
    event.preventDefault();
    var navHeight = $('nav').height();
    var id = $(this).attr('href');
    var originalScrollCoordinate = $(id).offset().top; /* Gives top coordinate of the ID'd element we scroll to */
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $('html').animate({
      scrollTop: newScrollCoordinate
    });
  });

  /* Slick */
  var $galleryImg = $('.gallery img');
  var $closeBtn = $('.btn');
  var $carousel = $('.carousel');
  var $overlay = $('.overlay');

  $carousel.slick({
    centerMode: true,
    fade: true,
    arrows: false,
    dots: true,
    draggable: false
  });

  $galleryImg.on('click', function(slick){
    var $imgId = $(this).attr('id');
    // Kick-off fade-in, specifically set to display: block
    $overlay.fadeIn();
    // Go to clicked image slide and ensure we trigger dimension calculation
    $carousel.slick('slickGoTo', $imgId, true).slick('setPosition');
  });

  $closeBtn.on('click', function(event){
    event.preventDefault();
    $overlay.fadeOut();
  })
});
