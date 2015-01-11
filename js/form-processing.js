$(document).ready(function(){
	$(".yes-select").on("click", function(){
		$(".party-div, .guests-div").slideDown("slow");
	});

	$(".no-select").on("click", function(){
		$(".party-div, .guests-div").hide();
	});

	
});