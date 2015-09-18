/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

$("#vent-title").hover(function() {
  // $('#vent-title').animate({boxShadow:})
  console.log(document.getElementById('vent-title').style.boxShadow);
});

function animateSplashScreen() {
  // Sets the css.style left and top accordingly to the screen size
  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var ventTitleWidth = document.getElementById('vent-title').offsetWidth;
  var originsTitleWidth = document.getElementById('vent-title').offsetWidth;  

  

  if ($(window).width() > 800) {
    var leftPlacement = halfScreenWidth - 60 + 'px';
    var topPlacement = '45%';
    
    // For animating the splash screen
    $('#origins-title-text').animate({opacity: '1.0'}, {duration: 2000, complete: function() {
      // animateCheckSize is called instead of checkSize due to checkSize setting origins-title's css.style.left
      // checkSize would incorrectly animate origins, so animateCheckSize is called instead
      animateCheckSize();
      $('#origins-title').animate({
        top: topPlacement, 
        left: leftPlacement, 
        paddingTop: '0px', 
        paddingLeft: '15px', 
        paddingRight: '15px', 
        paddingBottom: '6px', 
        margin: '0px',
        width: '400px', 
        height: '136px'}, 
        {duration: 1000, complete: function() {
          checkSize();
        }});
    }});
  }

  else if ($(window).width() <= 800 && $(window).width() > 500) {
    var leftPlacement = halfScreenWidth - 30 + 'px';
    var topPlacement = '50%';

    // For animating the splash screen
    $('#origins-title-text').animate({opacity: '1.0'}, {duration: 2000, complete: function() {
      // animateCheckSize is called instead of checkSize due to checkSize setting origins-title's css.style.left
      // checkSize would incorrectly animate origins, so animateCheckSize is called instead
      animateCheckSize();
      $('#origins-title').animate({
        top: topPlacement, 
        left: leftPlacement, 
        paddingTop: '0px', 
        paddingLeft: '15px', 
        paddingRight: '15px', 
        paddingBottom: '6px', 
        margin: '0px',
        width: '200px', 
        height: '68px'}, 
        {duration: 1000, complete: function() {
          checkSize();
        }});
    }});
  }

  else if ($(window).width() <= 500) {
    var leftPlacement = halfScreenWidth - 10 + 'px';
    var topPlacement = '50%';

    // For animating the splash screen
    $('#origins-title-text').animate({opacity: '1.0'}, {duration: 2000, complete: function() {
      // animateCheckSize is called instead of checkSize due to checkSize setting origins-title's css.style.left
      // checkSize would incorrectly animate origins, so animateCheckSize is called instead
      animateCheckSize();
      $('#origins-title').animate({
        top: topPlacement, 
        left: leftPlacement, 
        paddingTop: '0px', 
        paddingLeft: '15px', 
        paddingRight: '15px', 
        paddingBottom: '0px', 
        margin: '0px',
        width: '140px', 
        height: '50px'}, 
        {duration: 1000, complete: function() {
          checkSize();
        }});
    }});
  }
}

function animateCheckSize() {
  // Sets the splash screen height to the height of the window screen
  document.getElementById('splash-screen-section').style.height = $(window).height() + 'px';

  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var ventTitleWidth = document.getElementById('vent-title').offsetWidth;
  var originsTitleWidth = document.getElementById('vent-title').offsetWidth;

  // Sets the position of the title appropriately whenever screen is checked
  // 90 is to center the title appropriately
  if ($(window).width() > 800) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 90) + 'px';
  }
  else if ($(window).width() <= 800 && $(window).width() > 500) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 45) + 'px';
  }
  else if ($(window).width() <= 500) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 30) + 'px';
  }
}



