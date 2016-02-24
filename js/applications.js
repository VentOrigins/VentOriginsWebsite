/*  =============================================================================
    
    Copyright © Vent Origins 
    By Adrian Mandee and Randy Truong
    ========================================================================== */

function keepLocation(oldOffset) {
  // console.log("Working1");
  // if (window.pageYOffset != null) {
  //   console.log("Working2");
  //   st = oldOffset;
  // }
  // if (document.body.scrollWidth != null) {
  //   console.log("Working3");
  //   st = oldOffset;
  // }
  // setTimeout('window.scroll(0,st)', 0);
}

function prevSlide() {
  divWidth = $(window).width();
  var leftAttr = $('.pages').css('left');
  var slide1 = '0px';
  var slide2 = -1 * divWidth + 'px'; // -100%
  var slide3 = -2 * divWidth + 'px'; // -200%

  if (leftAttr == slide1) {
    $('.pages').css('left', '-200%');
    $('#dot-slide-1').css('background-color', 'white');
    $('#dot-slide-3').css('background-color', 'black');
  }
  else if (leftAttr == slide2) {
    $('.pages').css('left', '0%');
    $('#dot-slide-2').css('background-color', 'white');
    $('#dot-slide-1').css('background-color', 'black');
  }
  else if (leftAttr == slide3) {
    $('.pages').css('left', '-100%');
    $('#dot-slide-3').css('background-color', 'white');
    $('#dot-slide-2').css('background-color', 'black');
  }
}

function nextSlide() {
  divWidth = $(window).width();
  var leftAttr = $('.pages').css('left');
  var slide1 = '0px';
  var slide2 = -1 * divWidth + 'px';
  var slide3 = -2 * divWidth + 'px';
  
  if (leftAttr == slide1) {
    $('.pages').css('left', '-100%');
    $('#dot-slide-1').css('background-color', 'white');
    $('#dot-slide-2').css('background-color', 'black');
  }
  else if (leftAttr == slide2) {
    $('.pages').css('left', '-200%');
    $('#dot-slide-2').css('background-color', 'white');
    $('#dot-slide-3').css('background-color', 'black');
  }
  else if (leftAttr == slide3) {
    $('.pages').css('left', '0%');
    $('#dot-slide-3').css('background-color', 'white');
    $('#dot-slide-1').css('background-color', 'black');
  }
}

function goToClickedSlide(div) {
  var divId = $(div).attr('id');
  if (divId == 'dot-slide-1') {
    $('.pages').css('left', '0%');
    $('#dot-slide-1').css('background-color', 'black');
    $('#dot-slide-2').css('background-color', 'white');
    $('#dot-slide-3').css('background-color', 'white');
  }
  else if (divId == 'dot-slide-2') {
    $('.pages').css('left', '-100%');
    $('#dot-slide-1').css('background-color', 'white');
    $('#dot-slide-2').css('background-color', 'black');
    $('#dot-slide-3').css('background-color', 'white');
  }
  else if (divId == 'dot-slide-3') {
    $('.pages').css('left', '-200%');
    $('#dot-slide-1').css('background-color', 'white');
    $('#dot-slide-2').css('background-color', 'white');
    $('#dot-slide-3').css('background-color', 'black');
  }
}

// function handler() {
//   if (target.is('#application-1') {
//     $('.pages').css('left', '0%');
//   }
//   else if (target.is('#application-2') {
//     $('.pages').css('left', '-100%');
//   }
//   else if (target.is('#application-3') {
//     $('.pages').css('left', '-200%');
//   }
// }

// // $('.next-slide-button').click(handler);
// // $('.prev-slide-button').click(handler);

// $('#application-slide-1 > .next-slide-button').click(function(e) {
//   e.preventDefault();
//   $('.pages').css('left', '-100%');
// });
// $('#application-slide-2 > .next-slide-button').click(function(e) {
//   e.preventDefault();
//   $('.pages').css('left', '-200%');
// });
// $('#application-slide-3 > .next-slide-button').click(function(e) {
//   e.preventDefault();
//   $('.pages').css('left', '0%');
// });

// $('a.prev-slide-button').click(function(e) {
//   e.preventDefault();
//   $('.pages').css('left', '0%');
// });