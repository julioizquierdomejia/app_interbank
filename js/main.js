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
  
  //Evetos para el boton del Menu Contextual
  $('.botonMenu').click(function(){

    //console.log('estas haciendo click');
    $html.toggleClass('open-slider');
    /*
    $('#raya1').toggleClass('girarRaya1');
    $('#raya2').toggleClass('girarRaya2');
    */

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

  //Seteamos el FullPage
  $('#fullpage').fullpage({
    verticalCentered: false,
    slidesNavigation: true,

    anchors: ['home', 'conoce', 'aprende', 'preguntas'],
    navigationPosition: 'right',
    loopHorizontal: false,
    controlArrows: false,

    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
      
      for (i = 0; i < videoArray.length; i++) { 
          videoArray[i].pauseVideo();
      }

    },
    afterLoad: function(anchorLink, index){
      for (i = 0; i < videoArray.length; i++) { 
          videoArray[i].pauseVideo();
      }      
    },


  });

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

  if (((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) && !(navigator.userAgent.match(/iemobile/i))) {
    isDevice = true;
  }


  //function Resize
  $(window).on("resize", function () {
    // Get screen size (inner/outerWidth, inner/outerHeight)
    var height = $(window).height();
    var width = $(window).width();
    
    heightViewPort = height;
    
    if (width > height) {
      //alert('landscape');
        // Landscape

        if (isDevice) {
            var heightIphone = $(window).outerHeight();
            
            $("#section0").height(heightIphone);
            $("#section1").height(heightIphone);
            $("#section2").height(heightIphone);
            $("#section3").height(heightIphone);
        }

        setTimeout(function () {
            //ResizeIpad();
        }, 3000);
    } else {
        //alert('portrairt');
        // Portrait
        var heightIphone = $(window).outerHeight();
        $("#section0").height(heightIphone);
        $("#section1").height(heightIphone);
        $("#section2").height(heightIphone);
        $("#section3").height(heightIphone);

    }

    girarIcono();

  function girarIcono(){
    TweenMax.to($('.warning > img'), 1, {css:{rotation:90}, yoyo:true, repeat:3, delay:1.5, onComplete:function(){
      girarIcono();     
    }})
  }


  });   

});

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