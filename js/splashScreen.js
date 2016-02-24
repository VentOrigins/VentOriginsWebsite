/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

// When Vent title is hovered over
$("#vent-title").hover(function() {
  // $('#vent-title').animate({boxShadow:})
});

/*  =============================================================================
    Animstes the splash screen when the page initially loads

    @param    none
    @return   none
    ========================================================================== */
function animateSplashScreen() {
  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var ventTitleWidth = document.getElementById('vent-title').offsetWidth;
  var originsTitleWidth = document.getElementById('vent-title').offsetWidth;  

  // Adjusts the screen accordingly to the different screen size
  if ($(window).width() > 800) {
    var leftPlacement = halfScreenWidth - 60 + 'px';
    var topPlacement = '45%';
    
    // For animating the splash screen
    $('#origins-title-text').animate({opacity: '1.0'}, {duration: 2000, complete: function() {
      // animateCheckSize is called instead of checkSize due to checkSize setting origins-title's css.style.left
      // checkSize would incorrectly animate origins, so animateCheckSize is called instead
      animateCheckSize();
      changeNavBarForAnimation();

      $('#origins-title').animate({
        top: topPlacement, 
        left: leftPlacement, 
        paddingTop: '0px', 
        paddingLeft: '15px', 
        paddingRight: '15px', 
        paddingBottom: '6px', 
        margin: '0px',
        width: '430px', 
        height: '142px'}, 
        {duration: 1000, complete: function() {
          changeOriginsBackground();
          checkSplashScreenSize();
        }});
    }});
  }
  // When the screen size is between 500 and 800
  else if ($(window).width() <= 800 && $(window).width() > 500) {
    var leftPlacement = halfScreenWidth - 30 + 'px';
    var topPlacement = '50%';

    // For animating the splash screen
    $('#origins-title-text').animate({opacity: '1.0'}, {duration: 2000, complete: function() {
      // animateCheckSize is called instead of checkSize due to checkSize setting origins-title's css.style.left
      // checkSize would incorrectly animate origins, so animateCheckSize is called instead
      animateCheckSize();
      changeNavBarForAnimation();

      $('#origins-title').animate({
        top: topPlacement, 
        left: leftPlacement, 
        paddingTop: '0px', 
        paddingLeft: '15px', 
        paddingRight: '15px', 
        paddingBottom: '6px', 
        margin: '0px',
        width: '230px', 
        height: '74px'}, 
        {duration: 1000, complete: function() {
          changeOriginsBackground();
          checkSplashScreenSize();
        }});
    }});
  }
  // When the screen size is less than 500
  else if ($(window).width() <= 500) {
    var leftPlacement = halfScreenWidth - 10 + 'px';
    var topPlacement = '50%';

    // For animating the splash screen
    $('#origins-title-text').animate({opacity: '1.0'}, {duration: 2000, complete: function() {
      // animateCheckSize is called instead of checkSize due to checkSize setting origins-title's css.style.left
      // checkSize would incorrectly animate origins, so animateCheckSize is called instead
      animateCheckSize();
      changeNavBarForAnimation();

      $('#origins-title').animate({
        top: topPlacement, 
        left: leftPlacement, 
        paddingTop: '0px', 
        paddingLeft: '15px', 
        paddingRight: '15px', 
        paddingBottom: '0px', 
        margin: '0px',
        width: '170px', 
        height: '50px'}, 
        {duration: 1000, complete: function() {
          changeOriginsBackground();
          checkSplashScreenSize();
        }});
    }});
  }
}

/*  =============================================================================
    Changes the colors of the nav bar

    @param    none
    @return   none
    ========================================================================== */
function changeNavBarForAnimation() {
  $('nav').css('background-color', 'white');
  $('nav').css('color', '#999999');
  $('nav').css('border-color', '#EEEEEE');
}

/*  =============================================================================
    Change color of the background

    @param    none
    @return   none
    ========================================================================== */
function changeOriginsBackground() {
  // $('#origins-title').css('background-color', 'transparent');
}

/*  =============================================================================
    The check size for the animation portion of the splash screen

    @param    none
    @return   none
    ========================================================================== */
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



