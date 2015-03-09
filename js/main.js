$(document).ready(function() {
  var $html = $("html");
  var $statusMenu = false;

  $('.botonMenu').click(function(){
    //console.log('estas haciendo click');
    $html.toggleClass('open-slider');
    $('#raya1').toggleClass('girarRaya1');
    $('#raya2').toggleClass('girarRaya2');
  })

	$('#fullpage').fullpage({
		verticalCentered: false,
    slidesNavigation: true,
	});

	var $os = getMobileOperatingSystem();

	if ($os == 'iOS') {
		$('.appleButton').css('display','block');
		$('.googleButton').css('display','none');
	};

	if ($os == 'Android') {
		$('.appleButton').css('display','none');
		$('.googleButton').css('display','block');
	};


});

$(window).load(function(){
    $(".iframe_video").each(function() {
        var item = $(this).attr('data-div');
        var video = $(this).attr('data-video');
        var player;
        player = new YT.Player(item, {
            height: '100%',
            width: '100%',
            videoId: video
        });
        $('.slidervideo').on('click', '.flex-control-nav a', function() {
          player.stopVideo();
        });
        $('.slidervideo').on('click', '.flex-direction-nav a', function() {
          player.stopVideo();
        });
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