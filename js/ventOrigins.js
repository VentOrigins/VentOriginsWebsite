/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

$(document).ready(function() {
  console.log("Document ready");
  checkSize();
  initialOriginsPos();
  animateSplashScreen();
});

// Whenever window sizes changes, checks the size to see if in different media sizes
$(window).resize(checkSize);

function initialOriginsPos() {
  // To center the Origins before the animation happens
  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 200) + 'px';
  document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 100) + 'px';
}

function checkSize() {
  document.getElementById('splash-screen-section').style.height = $(window).height() + 'px';

  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var ventTitleWidth = document.getElementById('vent-title').offsetWidth;
  document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 30) + 'px';
}