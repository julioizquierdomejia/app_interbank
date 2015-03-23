$(document).ready(function() {});

$(window).load(function(){

  //variables
  var $html = $("html");
  var $statusMenu = false;
  var $os = getMobileOperatingSystem();
  var player;
  var $meVideo;
  var videoArray = [];
  var isDevice = false;

  
  //Detectamos el sistema operativo para saber
  //que boton mostrar parea descargar la app
  if ($os == 'iOS') {
    $('.appleButton').css('display','block');
    $('.googleButton').css('display','none');
  };

  if ($os == 'Android') {
    $('.appleButton').css('display','none');
    $('.googleButton').css('display','block');
  };
  
  $('#fullpage').fullpage({
    anchors: ['home', 'conoce', 'aprende', 'preguntas'],
    verticalCentered: false,
    slidesNavigation: true,
    controlArrows: false,
    loopHorizontal: false,
    easingcss3: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',

    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
      
      for (i = 0; i < videoArray.length; i++) { 
          videoArray[i].pauseVideo();
      }

    },
    
    onLeave: function(index, newIndex, direction){
      if (index == 2 && direction == 'down'){
          for (i = 0; i < videoArray.length; i++) {
              videoArray[i].pauseVideo();
          }
      }
      else if(index == 2 && direction == 'up'){
          for (i = 0; i < videoArray.length; i++) {
              videoArray[i].pauseVideo();
          }
      }

  }

  });


  TweenMax.to($('.warning > img'), 1, {css:{rotation:90}, yoyo:true, repeat:3, delay:1.5, onComplete:function(){
    $('.warning > img').css('rotation','0');
    girarIcono();
  }})

  //Evetos para el boton del Menu Contextual
  $('.botonMenu').click(function(){

    $html.toggleClass('open-slider');

    if (!$statusMenu) {
      TweenMax.to($('#raya1'), 0.26, {top:5, onComplete:function(){
        TweenMax.to($('#raya1'), 0.26, {rotation:-45})
      }})

      TweenMax.to($('#raya2'), 0.26, {top:-5, onComplete:function(){
        TweenMax.to($('#raya2'), 0.26, {rotation:45})
      }})

      $statusMenu = true;
    }
    else{
     TweenMax.to($('#raya1'), 0.26, {rotation:0, onComplete:function(){
        TweenMax.to($('#raya1'), 0.26, {top:0})
      }})

      TweenMax.to($('#raya2'), 0.26, {rotation:0, onComplete:function(){
        TweenMax.to($('#raya2'), 0.26, {top:0})
      }})

      $statusMenu = false; 
    };

  })

  //que pasa cuando se le da click a una opcion del menu contextual
  // se cierra y ejecuta la navegacion
  $('.contextual > li').click(function(){
    $html.toggleClass('open-slider');

    if (!$statusMenu) {
      TweenMax.to($('#raya1'), 0.26, {top:5, delay:1, onComplete:function(){
        TweenMax.to($('#raya1'), 0.26, {rotation:-45})
      }})

      TweenMax.to($('#raya2'), 0.26, {top:-5, delay:1, onComplete:function(){
        TweenMax.to($('#raya2'), 0.26, {rotation:45})
      }})

      $statusMenu = true;
    }
    else{
     TweenMax.to($('#raya1'), 0.26, {rotation:0, delay:1, onComplete:function(){
        TweenMax.to($('#raya1'), 0.26, {top:0})
      }})

      TweenMax.to($('#raya2'), 0.26, {rotation:0, delay:1, onComplete:function(){
        TweenMax.to($('#raya2'), 0.26, {top:0})
      }})

      $statusMenu = false; 
    };
  })

 
  $(".iframe_video").each(function() {
      var item = $(this).attr('data-div');
      var video = $(this).attr('data-video');
      

      player = new YT.Player(item, {
          height: '100%',
          width: '100%',
          videoId: video,
          playerVars: { 
                'showinfo': 0,
                'modestbranding': 1,
            }
      });

      $meVideo = player;

      videoArray.push($meVideo);
     
      $('.slidervideo').on('click', '.flex-control-nav a', function() {
        player.stopVideo();
      });
      $('.slidervideo').on('click', '.flex-direction-nav a', function() {
        player.stopVideo();
      });
  });

});


function girarIcono(){
    TweenMax.to($('.warning > img'), 1, {css:{rotation:90}, yoyo:true, repeat:3, delay:1.5, onComplete:function(){
      girarIcono();
    }})
  }

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    return 'iOS';

  }
  else if( userAgent.match( /Android/i ) )
  {

    return 'Android';
  }
  else
  {
    return 'unknown';
  }
}