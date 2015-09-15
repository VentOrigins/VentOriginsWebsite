/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

$(document).ready(function() {
  console.log("Document ready");
  checkAboutUsSize();
  initialOriginsPos();
  animateSplashScreen();
});

// Whenever window sizes changes, checks the size to see if in different media sizes
$(window).resize(checkSize);
$(window).resize(checkAboutUsSize);

function initialOriginsPos() {
  // To center the Origins before the animation happens
  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;

  // Aligns the Origins Text in the center before the animation occurs
  // 200, 200, 100 are numbers to align the Origins text into the center of the screen
  // These values are estimated around the size of the origins text
  document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 200) + 'px';
  document.getElementById('origins-title').style.paddingRight = (halfScreenWidth - 200) + 'px';
  document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 100) + 'px';
  document.getElementById('origins-title').style.paddingBottom = (halfScreenHeight) + 'px';
}

function checkSize() {
  // Sets the splash screen height to the height of the window screen
  document.getElementById('splash-screen-section').style.height = $(window).height() + 'px';

  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var ventTitleWidth = document.getElementById('vent-title').offsetWidth;
  var originsTitleWidth = document.getElementById('vent-title').offsetWidth;

  // Sets the position of the title appropriately whenever screen is checked
  // 90 and 60 are numbers to center the title appropriately
  document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 90) + 'px';
  document.getElementById('origins-title').style.left = halfScreenWidth - 60 +'px';
}

function checkAboutUsSize() {
  // Sets the about us height to the height of the window screen
  document.getElementById('about-us-section').style.height = $(window).height() + 'px';

  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var aboutUsPicturesDivWidth = document.getElementById('about-us-pictures-div').offsetWidth;
  var aboutUsPicturesDivHeight = document.getElementById('about-us-pictures-div').offsetHeight;

  document.getElementById('about-us-pictures-div').style.left = halfScreenWidth - (aboutUsPicturesDivWidth / 2) + 'px';
  document.getElementById('about-us-pictures-div').style.top = halfScreenHeight - (aboutUsPicturesDivHeight / 2) + 'px';
}