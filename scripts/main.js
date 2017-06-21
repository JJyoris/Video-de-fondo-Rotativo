"use strict";
/*----------------------------------------------
          CARGADOR DE NUESTROS VIDEOS
------------------------------------------------*/
function loaderAnimation() {
  $(".loader").delay(500).fadeOut();
  $("#mask").delay(1000).fadeOut("slow", function()  {
      // $().scrollWindow({duration:100});
  });
  $("body").addClass("loaded");
  if ($('body.overflowed').length>0) { $('#jHeader').addClass('overflow');}
}



/*---------------------------------------------- 
                 V I D E O 01
------------------------------------------------*/
function videoPlayer() {
  if ($(".playerVideo").length>0) { // Esta es la función para nuestro video de fondo1
    $(".playerVideo").mb_YTPlayer();
    jQuery('.playerVideo').on("YTPPause",function(){
      jQuery('.play-video').removeClass('playing');
    });
    jQuery('.playerVideo').on("YTPPlay",function(){
      jQuery('.play-video').addClass('playing');
    });
    jQuery('.play-video').on('click', function(e) {
      if (jQuery('.play-video').hasClass('playing')) {
        jQuery(".playerVideo").pauseYTP();
      } else {
        jQuery('audio').each(function (i,e) {
          this.pause(); 
        });
        jQuery(".playerVideo").playYTP();
      }
      e.preventDefault();
    });
  };
}

/*---------------------------------------------- 
                 V I D E O 2
------------------------------------------------*/
function videoPlayer2() {
  if ($(".playerVideo2").length>0) { // Esta es la función para nuestro video de fondo2
    $(".playerVideo2").mb_YTPlayer();
    jQuery('.playerVideo2').on("YTPPause",function(){
      jQuery('.play-video2').removeClass('playing2');
    });
    jQuery('.playerVideo2').on("YTPPlay",function(){
      jQuery('.play-video2').addClass('playing2');
    });
    jQuery('.play-video2').on('click', function(e) {
      if (jQuery('.play-video2').hasClass('playing2')) {
        jQuery(".playerVideo2").pauseYTP();
      } else {
        jQuery('audio').each(function (i,e) {
          this.pause(); 
        });
        jQuery(".playerVideo2").playYTP();
      }
      e.preventDefault();
    });
  };
}




/*---------------------------------------------- 
                 V I D E O 3
------------------------------------------------*/
function videoPlayer3() {
  if ($(".playerVideo3").length>0) { // Esta es la función para nuestro video de fondo3
    $(".playerVideo3").mb_YTPlayer();
    jQuery('.playerVideo3').on("YTPPause",function(){
      jQuery('.play-video3').removeClass('playing3');
    });
    jQuery('.playerVideo3').on("YTPPlay",function(){
      jQuery('.play-video3').addClass('playing3');
    });
    jQuery('.play-video3').on('click', function(e) {
      if (jQuery('.play-video3').hasClass('playing3')) {
        jQuery(".playerVideo3").pauseYTP();
      } else {
        jQuery('audio').each(function (i,e) {
          this.pause(); 
        });
        jQuery(".playerVideo3").playYTP();
      }
      e.preventDefault();
    });
  };
}





/*---------------------------------------------- 
                 V I D E O 4
------------------------------------------------*/
function videoPlayer4() {
  if ($(".playerVideo4").length>0) { // Esta es la función para nuestro video de fondo4
    $(".playerVideo4").mb_YTPlayer();
    jQuery('.playerVideo4').on("YTPPause",function(){
      jQuery('.play-video4').removeClass('playing4');
    });
    jQuery('.playerVideo4').on("YTPPlay",function(){
      jQuery('.play-video4').addClass('playing4');
    });
    jQuery('.play-video4').on('click', function(e) {
      if (jQuery('.play-video4').hasClass('playing4')) {
        jQuery(".playerVideo4").pauseYTP();
      } else {
        jQuery('audio').each(function (i,e) {
          this.pause(); 
        });
        jQuery(".playerVideo4").playYTP();
      }
      e.preventDefault();
    });
  };
}





/*---------------------------------------------- 
                 V I D E O 5
------------------------------------------------*/
function videoPlayer5() {
  if ($(".playerVideo5").length>0) { // Esta es la función para nuestro video de fondo5
    $(".playerVideo5").mb_YTPlayer();
    jQuery('.playerVideo5').on("YTPPause",function(){
      jQuery('.play-video5').removeClass('playing5');
    });
    jQuery('.playerVideo5').on("YTPPlay",function(){
      jQuery('.play-video5').addClass('playing5');
    });
    jQuery('.play-video5').on('click', function(e) {
      if (jQuery('.play-video5').hasClass('playing5')) {
        jQuery(".playerVideo5").pauseYTP();
      } else {
        jQuery('audio').each(function (i,e) {
          this.pause(); 
        });
        jQuery(".playerVideo5").playYTP();
      }
      e.preventDefault();
    });
  };
}




$(window).on('load', function(e) {
  loaderAnimation();

});

// Función donde llamamos a nuestros videos
(function($) {
  videoPlayer();
  videoPlayer2();
  videoPlayer3();
  videoPlayer4();
  videoPlayer5();
})(jQuery);







