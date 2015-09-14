/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

// When the ul in the nav bars are clicked, it will scroll to the divs
$("#homeNav").click(function() {
  $('html, body').animate({
    scrollTop: $("#splash-screen-section").offset().top
  }, 500);
});

$("#aboutNav").click(function() {
  $('html, body').animate({
    scrollTop: $("#about-us-section").offset().top
  }, 1000);
});

$("#projectsNav").click(function() {
  $('html, body').animate({
      scrollTop: $("#projects-section").offset().top
  }, 1000);
});

$("#contactNav").click(function() {
  $('html, body').animate({
      scrollTop: $("#contact-section").offset().top
  }, 1000);
});