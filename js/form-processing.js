$(document).ready(function(){
	$("#yes-select").on("click", function(){
		$(".party-div, .guests-div").slideDown("slow");
	});

	$("#no-select").on("click", function(){
		$(".party-div, .guests-div").hide();
	});

	$('#input-form').submit(function(){
		event.preventDefault();
		var inputName = 'entry.991411239=' + encodeURIComponent($('#name').val()) + "&";
		var inputEmail = 'entry.797029182=' + encodeURIComponent($('#email').val()) + "&";
		var inputYes = 'entry.37903139=' + encodeURIComponent($('#yes-select').val()) + "&";
		var inputNo = 'entry.37903139=' + encodeURIComponent($('#no-select').val()) + "&";
		var inputParty = 'entry.1901209542=' + encodeURIComponent($('#party').val()) + "&";
		var inputGuests = 'entry.1852347906='+ encodeURIComponent($('#guests').val()) + "&";
		var inputComments = 'entry.390843563=' + encodeURIComponent($('#comments').val()) + "&";

		var baseURL = 'https://docs.google.com/forms/d/1Iza9GWuT8LU0AY4kzv2e039LxlL7R3FBdPdzmI7aYHs/formResponse?';
		var submitRef = '&submit=Submit';
		var submitURL = (baseURL + inputName + inputEmail + inputYes + inputNo + inputParty + inputGuests + inputComments + submitRef);
		console.log(submitURL);

		 var posting = $.post( submitURL);
		// Put the results in a div
		posting.done(function( data ) {
		var content = $( data ).find( "#content" );
		$( "#result" ).empty().append( content );
		
		});
	});
});