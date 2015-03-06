$(document).ready(function() {
  var $html = $("html");

  $('.botonMenu').click(function(){
    console.log('estas haciendo click');
    $html.toggleClass('open-slider');
  })

	$('#fullpage').fullpage({
		verticalCentered: false,
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