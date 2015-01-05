$(document).ready(function(){
	$("#yes-select").on("click", function(){
		$(".party-div, .guests-div").slideDown("slow");
	});

	$("#no-select").on("click", function(){
		$(".party-div, .guests-div").hide();
	});

	/*$("#input-form").submit(function(){
			var inputName = encodeURIComponent($('#name').val());
			var inputEmail = encodeURIComponent($('#email').val());
			var inputYes = encodeURIComponent($('#yes-select').val());
			var inputNo = encodeURIComponent($('#no-select').val());
			var inputParty = encodeURIComponent($('#party').val());
			var inputGuests = encodeURIComponent($('#guests').val());
			var inputComments = encodeURIComponent($('#comments').val());

	                $.ajax({
	                    url: "https://script.google.com/macros/s/AKfycbxeB9ktWXoWP-7Y_jtuDQbqrsaOSazTlk5HlC1PLSJi7wPnrXBz/exec",
	                    data: { "entry.991411239": inputName, 
	                    		"entry.797029182": inputEmail, 
	                    		"entry.37903139": inputYes, 
	                    		"entry.390843563": inputComments,
	                    		"entry.1901209542" : inputParty,
	                    		"entry.1852347906" : inputGuests},
	                    type: "POST",
	                    dataType: "xml",
	                    statusCode: {
	                        0: function () {
	                            console.log("It works.");
	                        },
	                        200: function () {
	                            console.log("It works as well.");
	                        }
	                    }
	                });
		});*/

	// Variable to hold request
	var request;

	// Bind to the submit event of our form
	$("#input-form").submit(function(event){
		// abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);
		// let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();
	
		// let's disable the inputs for the duration of the ajax request
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);
		$('#result').text('Sending data...');
	
		// fire off the request to /form.php
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbwYF4p0l0k1JX0gWUHvsZ5G5rx12gv5ishoen_gXEjJ-3e0H_E/exec",
			type: "post",
			data: serializedData
		});
	
		// callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			console.log("Hooray, it worked!");
			console.log(response);
			console.log(textStatus);
			console.log(jqXHR);
		});
	
		// callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// log the error to the console
			console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
		});
	
		// callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});
	
		// prevent default posting of form
		event.preventDefault();
	});
});