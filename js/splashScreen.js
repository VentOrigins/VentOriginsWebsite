/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

$("#vent-title").hover(function() {
  // $('#vent-title').animate({boxShadow:})
  console.log(document.getElementById('vent-title').style.boxShadow);
});

function animateSplashScreen() {
  var topPlacement = '40%'
  var leftPlacement = '50%'

  // For animating the splash screen
  $('#origins-title-text').animate({opacity: '1.0'}, {duration: 2000, complete: function() {
    checkSize();
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
      1000)
  }});
}