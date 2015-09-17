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
  if ($(window).width() > 800) {
    document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 200) + 'px';
    document.getElementById('origins-title').style.paddingRight = (halfScreenWidth - 200) + 'px';
    document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 100) + 'px';
    document.getElementById('origins-title').style.paddingBottom = (halfScreenHeight) + 'px';
  }

  else if ($(window).width() <= 800 && $(window).width() > 500) {
    document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 100) + 'px';
    document.getElementById('origins-title').style.paddingRight = (halfScreenWidth - 100) + 'px';
    document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 50) + 'px';
    document.getElementById('origins-title').style.paddingBottom = (halfScreenHeight) + 'px';
  }

  else if ($(window).width() <= 500) {
    document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 80) + 'px';
    document.getElementById('origins-title').style.paddingRight = (halfScreenWidth - 80) + 'px';
    document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 25) + 'px';
    document.getElementById('origins-title').style.paddingBottom = (halfScreenHeight) + 'px';
  }
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
  if ($(window).width() > 800) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 90) + 'px';
    document.getElementById('origins-title').style.left = halfScreenWidth - 60 +'px';
    document.getElementById('origins-title').style.top = '45%';
    document.getElementById('origins-title').style.width = '400px';
    document.getElementById('origins-title').style.height = '136px';
  }

  else if ($(window).width() <= 800 && $(window).width() > 500) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 45) + 'px';
    document.getElementById('origins-title').style.left = halfScreenWidth - 30 +'px';
    document.getElementById('origins-title').style.top = '50%';
    document.getElementById('origins-title').style.width = '200px';
    document.getElementById('origins-title').style.height = '68px';
  }
  else if ($(window).width() <= 500) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 30) + 'px';
    document.getElementById('origins-title').style.left = halfScreenWidth - 10 +'px';
    document.getElementById('origins-title').style.top = '50%';
    document.getElementById('origins-title').style.width = '140px';
    document.getElementById('origins-title').style.height = '50px';
  }
}

function checkAboutUsSize() {
  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var aboutUsPicturesDivWidth = document.getElementById('about-us-pictures-div').offsetWidth;
  var aboutUsPicturesDivHeight = document.getElementById('about-us-pictures-div').offsetHeight;
  
  if ($(window).width() > 996) {
    // Sets the about us height to the height of the window screen
    document.getElementById('about-us-section').style.height = $(window).height() + 'px';
    document.getElementById('about-us-pictures-div').style.left = halfScreenWidth - (aboutUsPicturesDivWidth / 2) + 'px';
    document.getElementById('about-us-pictures-div').style.top = halfScreenHeight - (aboutUsPicturesDivHeight / 2) + 'px';
    document.getElementById('about-us-pictures-div').style.marginTop = '0px';
  }
  else if ($(window).width() <= 996) {
    // Sets the about us height to the height of the content and then some
    document.getElementById('about-us-section').style.height = 'auto';
    document.getElementById('about-us-pictures-div').style.left = halfScreenWidth - (aboutUsPicturesDivWidth / 2) + 'px';
    document.getElementById('about-us-pictures-div').style.top = '0px';
    document.getElementById('about-us-pictures-div').style.marginTop = '100px';
  }
}




