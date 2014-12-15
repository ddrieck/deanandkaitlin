$(document).ready(function(){
	$('#input-form').submit(function(){
		event.preventDefault();
		var inputName = encodeURIComponent($('#input-name').val());
		var baseURL = 'https://docs.google.com/forms/d/1Iza9GWuT8LU0AY4kzv2e039LxlL7R3FBdPdzmI7aYHs/formResponse?entry.991411239=';
		var submitRef = '&submit=Submit';
		var submitURL = (baseURL + inputName + submitRef);
		console.log(submitURL);

		 var posting = $.post( submitURL);
		// Put the results in a div
		posting.done(function( data ) {
		var content = $( data ).find( "#content" );
		$( "#result" ).empty().append( content );
		
		});
	});
});