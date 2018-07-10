var $=jQuery.noConflict();
$(document).ready(function() {	
	// Popup
	$('#popup1').on('click', function(){
      $('.popup1').addClass('success-message');
    });
	$('.close-button').on('click', function(){
      $('.popup1').removeClass('success-message');
    });	
	/* ----- ESC click to Remove Class ----- */
	window.onkeyup = function (event) {
		if (event.keyCode == 27) {
			$('.popup1').removeClass('success-message');
		}
	}	
});

