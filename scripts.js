$(document).ready(function() {
  $(window).resize(function() {
    if(window.outerWidth > 767) {
      $('nav ul').removeClass('open');
    }
  });

  /* Toggle hamburger class to apply open or closed attributes */
  $('.hamburger').on('click', function() {
    $('nav ul').toggleClass('open');
  });
});
