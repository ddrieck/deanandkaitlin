$(document).ready(function(){
	$("#yes-select").on("click", function(){
		$(".party-div, .guests-div").slideDown("slow");
	});

	$("#no-select").on("click", function(){
		$(".party-div, .guests-div").hide();
	});

	$('#input-form').submit(function(){
		event.preventDefault();
		var inputName = encodeURIComponent($('#name').val());
		var inputEmail = encodeURIComponent($('#email').val());
		var inputYes = encodeURIComponent($('#yes-select').val());
		var inputNo = encodeURIComponent($('#no-select').val());
		var inputParty = encodeURIComponent($('#party').val());
		var inputGuests = encodeURIComponent($('#guests').val());
		var inputComments = encodeURIComponent($('#comments').val());


	  $.ajax({
	    url: 'https://docs.google.com/forms/d/1Iza9GWuT8LU0AY4kzv2e039LxlL7R3FBdPdzmI7aYHs/formResponse',
	    data: {
	      'entry.991411239'   : inputName,
	      'entry.797029182'  : inputEmail,
	      'entry.37903139'  : inputYes,
	      'entry.1901209542' : inputParty,
	      'entry.1852347906' : inputGuests,
	      'entry.390843563' : inputComments
	    },
	    type: 'POST',
	    dataType: 'jsonp',
	    statusCode: {
	      0: function (){
	        successSubmit(
			  inputName,
		      inputEmail,
		      inputYes,
		      inputParty,
		      inputGuests,
		      inputComments
	        );
	      },
	      200: function (){
	        successSubmit(
		      inputName,
		      inputEmail,
		      inputYes,
		      inputParty,
		      inputGuests,
		      inputComments
	        );
	      }
	    }
	  });		
	});
});