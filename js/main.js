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

    $('.callTo').on('click', function() {
      ga('send', 'event', 'boton descargar', 'click', 'app_store_home_v2');
      alert('app_store_home_v2')
    });

    $('.callConoce').on('click', function() {
      ga('send', 'event', 'boton descargar', 'click', 'app_store_conoce_v2');
      alert('app_store_home_v2')
    });

    $('.callAprende').on('click', function() {
      ga('send', 'event', 'boton descargar', 'click', 'app_store_aprende_v2');
      alert('app_store_home_v2')
    });

  };

  if ($os == 'Android') {
    $('.appleButton').css('display','none');
    $('.googleButton').css('display','block');

    $('.callTo').on('click', function() {
      ga('send', 'event', 'boton descargar', 'click', 'google_play_home-v2');
      alert('google_play_home-v2')
    });

    $('.callConoce').on('click', function() {
      ga('send', 'event', 'boton descargar', 'click', 'google_play_conoce_v2');
      alert('google_play_home-v2')
    });

    $('.callAprende').on('click', function() {
      ga('send', 'event', 'boton descargar', 'click', 'google_play_aprende_v2');
      alert('app_store_home_v2')
    });

  };
  
  $('#fullpage').fullpage({
    anchors: ['home', 'conoce', 'aprende', 'preguntas'],
    verticalCentered: false,
    slidesNavigation: true,
    controlArrows: true,
    loopHorizontal: false,
    easingcss3: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',

    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
      
      for (i = 0; i < videoArray.length; i++) { 
          videoArray[i].pauseVideo();
      }
      var $alturaVideo = $('.iframe_video').position();
      $('.fp-controlArrow').css('top','200');

      var $pos = index + '-' + slideIndex
      switch ($pos) {
        //Galeria de videos
        case '2-0':
            ga('send', 'event', 'boton_slide', 'click', 'opcion _video1_v2');
            break;
        case '2-1':
            ga('send', 'event', 'boton_slide', 'click', 'opcion_video2_v2');
            break;
        case '2-2':            
            ga('send', 'event', 'boton_slide', 'click', 'opcion_video3_v2');
            break;
        case '2-3':
            ga('send', 'event', 'boton_slide', 'click', 'opcion_video4_v2');
            break;
        case '2-4':
            ga('send', 'event', 'boton_slide', 'click', 'opcion_video5_v2');
            break;
        case '2-5':
            ga('send', 'event', 'boton_slide', 'click', 'opcion_video6_v2');
            break;

        //Aprende
        case '3-0':
            ga('send', 'pageview', '/aprende_v2/consulta_tu_saldo');
            break;
        case '3-1':
            ga('send', 'pageview', '/aprende_v2/envia_tu_numero_cuenta');
            break;
        case '3-2':            
            ga('send', 'pageview', '/aprende_v2/paga_tarjetas_credito');
            break;
        case '3-3':
            ga('send', 'pageview', '/aprende_v2/paga_tus_recibos');
            break;
        case '3-4':
            ga('send', 'pageview', '/aprende_v2/transfiere_dinero');
            break;
        case '3-5':
            ga('send', 'pageview', '/aprende_v2/graba_tus_operaciones');
            break;

        //Preguntas Frecuentes
        case '4-0':
            ga('send', 'pageview', '/preguntas_v2/soy_nuevo_usuario');
            break;
        case '4-1':
            ga('send', 'pageview', '/preguntas_v2/clave_web');
            break;
        case '4-2':            
            ga('send', 'pageview', '/preguntas_v2/clave_sms');
            break;
        case '4-3':
            ga('send', 'pageview', '/preguntas_v2/como_uso_token');
            break;
        case '4-4':
            ga('send', 'pageview', '/preguntas_v2/olvide_mi_clave_web');
            break;
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

  //posicionamiento de objetos Verticalemnte
  var $alturaVideo = $('.iframe_video').position();
  //$('.fp-controlArrow').css('top','200');
  $(".section").on( ".fp-controlArrow", function() {
      $(this).css('top','200');
  })


  TweenMax.to($('.warning > img'), 1, {css:{rotation:90}, yoyo:true, repeat:3, delay:1.5, onComplete:function(){
    $('.warning > img').css('rotation','0');
    girarIcono();
  }})

  //Evetos para el boton del Menu Contextual
  $('.botonMenu').click(function(){

    $html.toggleClass('open-slider');
    $('.envoltura').toggleClass('open-slider');

    $('.tresrayas').toggleClass('dnone');
    $('.equis').toggleClass('dblock');
    

    /*
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
    */

  })

  //que pasa cuando se le da click a una opcion del menu contextual
  // se cierra y ejecuta la navegacion
  $('.contextual > li').click(function(){
    $html.toggleClass('open-slider');

    $('.tresrayas').toggleClass('dnone');
    $('.equis').toggleClass('dblock');

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
            },
           events: {
              'onStateChange': function (event) {
                  switch (event.data) {
                      case -1:
                          console.log ('unstarted');
                          break;
                      case 0:
                          console.log ('ended');
                          player.playVideo(videoId)
                          break;
                      case 1:
                          console.log ('playing');

                          switch (item) {
                            //Galeria de videos
                            case 'video1':
                                ga('send','event', 'video_consultas', 'click_play' , 'video1_v2');
                                break;
                            case 'video2':
                                ga('send','event', 'video_operaciones', 'click_play' , 'video2_v2');
                                break;
                            case 'video3':
                                ga('send','event', 'video_numero_de_cuenta', 'click_play' , 'video3_v2');
                                break;
                            case 'video4':
                                ga('send','event', 'video_paga_tarjetas', 'click_play' , 'video4_v2 ');
                                break;
                            case 'video5':
                                ga('send','event', 'video_transfiere_dinero', 'click_play' , 'video5_v2');
                                break;
                            case 'video6':
                                ga('send','event', 'paga_recibos', 'click_play' , 'video6_v2');
                                break;

                            }
                          break;
                      case 2:
                          console.log ('paused');
                          break;
                      case 3:
                          console.log ('buffering');
                          break;
                      case 5:
                          console.log ('video cued');
                          break;
                  }
              }
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

      // when video ends
      /*
      function onPlayerStateChange(event) {  
          if(event.data === 0) {          
              alert('done');
          }
      }
      */

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