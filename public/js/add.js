$("#add-btn").on("click", function(event){
	event.preventDefault();

	var newMeal = {
		food: $("food").val().trim(),
		amount: $("amount").val().trim(),
		fullness: $("fullness").val().trim(),
		note: $("note").val().trim()
		picture: $("picture").val().trim()
	};

	$.post("/api/new", newMeal)
	.done(function(data){
		console.log(data);
	});

	$("food").val("");
	$("amount").val("");
	$("fullness").val("");
	$("note").val("");
	$("picture").val("");

});