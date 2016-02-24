/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

$(document).ready(function() {
  console.log("Document ready");
  checkAboutUsSize();
  checkApplicationSize();
  initialOriginsPos();
  animateSplashScreen();
});

// Whenever window sizes changes, checks the size to see if in different media sizes for all main divs
$(window).resize(checkSplashScreenSize);
$(window).resize(checkAboutUsSize);
$(window).resize(checkApplicationSize);


/*  =============================================================================
    Correctly sets the initial position of Origins title in the splash-screen-div. Centers the
    Origins word befpre the animation begins with the entire div acting as black as well.
    The values are given estimations of how Origins should be centered in each screen size.

    @param    none
    @return   none
    ========================================================================== */
function initialOriginsPos() {
  // To center the Origins before the animation happens
  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;

  // For media size more than 800
  if ($(window).width() > 800) {
    document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 200) + 'px';
    document.getElementById('origins-title').style.paddingRight = (halfScreenWidth - 200) + 'px';
    document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 100) + 'px';
    document.getElementById('origins-title').style.paddingBottom = (halfScreenHeight) + 'px';
  }

  // For media size between 500 and 800
  else if ($(window).width() <= 800 && $(window).width() > 500) {
    document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 100) + 'px';
    document.getElementById('origins-title').style.paddingRight = (halfScreenWidth - 100) + 'px';
    document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 50) + 'px';
    document.getElementById('origins-title').style.paddingBottom = (halfScreenHeight) + 'px';
  }

  // For media size less than 500
  else if ($(window).width() <= 500) {
    document.getElementById('origins-title').style.paddingLeft = (halfScreenWidth - 65) + 'px';
    document.getElementById('origins-title').style.paddingRight = (halfScreenWidth - 65) + 'px';
    document.getElementById('origins-title').style.paddingTop = (halfScreenHeight - 25) + 'px';
    document.getElementById('origins-title').style.paddingBottom = (halfScreenHeight) + 'px';
  }
}

/*  =============================================================================
    Used fo adjust the placement of everything in the splash-screen-div. Mostly used
    when adjusting the size of the window. Continues to keep the vent-origins-title
    centered as well as adjusting the size of the title when the screen changes.
    Numbers are used in approximation to how everything should be placed in respect
    to the screen size.

    @param    none
    @return   none
    ========================================================================== */
function checkSplashScreenSize() {
  // Sets the splash screen height to the height of the window screen
  document.getElementById('splash-screen-section').style.height = $(window).height() + 'px';
  $('.splash-img').css('height', $(window).height() + 'px');

  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;
  var ventTitleWidth = document.getElementById('vent-title').offsetWidth;
  var originsTitleWidth = document.getElementById('vent-title').offsetWidth;

  // Adjusts the width and height of the splash screen div
  // Sets the position of the title appropriately whenever screen is checked
  if ($(window).width() > 800 && $(window).height() > 600) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 90) + 'px';
    document.getElementById('vent-title').style.top = '45%';
    document.getElementById('origins-title').style.left = halfScreenWidth - 60 +'px';
    document.getElementById('origins-title').style.top = '45%';
    document.getElementById('origins-title').style.width = '430px';
    document.getElementById('origins-title').style.height = '142px';
  }
  if ($(window).width() > 800 && $(window).height() <= 600) {
    // Sets the height to a fixed value
    document.getElementById('splash-screen-section').style.height = '600px';
    $('.splash-img').css('height', '600px');
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 90) + 'px';
    document.getElementById('vent-title').style.top = '270px';
    document.getElementById('origins-title').style.left = halfScreenWidth - 60 +'px';
    document.getElementById('origins-title').style.top = '45%';
    document.getElementById('origins-title').style.width = '430px';
    document.getElementById('origins-title').style.height = '142px';
  }
  else if ($(window).width() <= 800 && $(window).width() > 500) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 45) + 'px';
    document.getElementById('vent-title').style.top = '50%';
    document.getElementById('origins-title').style.left = halfScreenWidth - 30 +'px';
    document.getElementById('origins-title').style.top = '50%';
    document.getElementById('origins-title').style.width = '230px';
    document.getElementById('origins-title').style.height = '74px';
  }
  else if ($(window).width() <= 500) {
    document.getElementById('vent-title').style.left = halfScreenWidth - (ventTitleWidth + 30) + 'px';
    document.getElementById('vent-title').style.top = '50%';
    document.getElementById('origins-title').style.left = halfScreenWidth - 10 +'px';
    document.getElementById('origins-title').style.top = '50%';
    document.getElementById('origins-title').style.width = '170px';
    document.getElementById('origins-title').style.height = '50px';
  }
}

/*  =============================================================================
    Used to adjust the aboutUs div. Adjusts the size and placement of everything
    in the div dependent on the screen size. Mostly used when the screen size is
    changed. Most of the values are an estimation of the placement and sizing of 
    the elements in the div.

    @param    none
    @return   none
    ========================================================================== */
function checkAboutUsSize() {
  // var halfScreenWidth = $(window).width() / 2;
  // var halfScreenHeight = $(window).height() / 2;
  // var aboutUsPicturesDivWidth = document.getElementById('about-us-pictures-div').offsetWidth;
  // var aboutUsPicturesDivHeight = document.getElementById('about-us-pictures-div').offsetHeight + 100 + 'px';
  
  // // Adjust the height of the about us section
  // document.getElementById('about-us-section').style.height = aboutUsPicturesDivHeight + aboutUsPicturesDivHeight;

  // Adjust the placement and sizing in accordance to each screen size
  // if ($(window).height() < 600 && $(window).width() > 996) {
  //   document.getElementById('about-us-pictures-div').style.left = halfScreenWidth - (aboutUsPicturesDivWidth / 2) + 'px';
  //   document.getElementById('about-us-pictures-div').style.top = '30px';
  //   document.getElementById('about-us-pictures-div').style.marginTop = '0px';
  //   document.getElementById('about-us-title').style.top = '10px';
  // }
  // else if ($(window).width() > 996) {
  //   document.getElementById('about-us-pictures-div').style.left = halfScreenWidth - (aboutUsPicturesDivWidth / 2) + 'px';
  //   document.getElementById('about-us-pictures-div').style.top = '50px';
  //   document.getElementById('about-us-pictures-div').style.marginTop = '0px';
  //   document.getElementById('about-us-title').style.top = '30px';
  // }
  // else if ($(window).width() <= 996) {
  //   document.getElementById('about-us-pictures-div').style.left = halfScreenWidth - (aboutUsPicturesDivWidth / 2) + 'px';
  //   document.getElementById('about-us-pictures-div').style.top = '0px';
  //   document.getElementById('about-us-pictures-div').style.marginTop = '50px';
  //   document.getElementById('about-us-title').style.top = '30px';
  // }

}

function checkApplicationSize() {
  var halfScreenWidth = $(window).width() / 2;
  var halfScreenHeight = $(window).height() / 2;

  verticallyCenterInDiv('.prev-slide-button', '.pages');
  verticallyCenterInDiv('.next-slide-button', '.pages');
  // var currentSlideDotWidth = document.getElementById('projects-section-current-slide').offsetWidth;
  // var currentSlideDotHeight = document.getElementById('projects-section-current-slide').offsetHeight;
  // document.getElementById('projects-section-current-slide').style.width = currentSlideDotWidth + 'px';
}

// Centers a div horizontally within a div
function horizontallyCenterInDiv(divName, outerDiv) {
  $(divName).css('left', (($(outerDiv).width() / 2) - ($(divName).width() / 2)) + 'px');
}

// Centers a div vertically within a div
function verticallyCenterInDiv(divName, outerDiv) {
  $(divName).css('top', (($(outerDiv).height() / 2) - ($(divName).height() / 2)) + 'px');
}



