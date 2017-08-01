$(document).ready(function(){

getBurgers();

	function getBurgers(burger){
		for each(this.burger_name){
			var newForm = $("<form>");
			newForm.attr("action", "/{{this.id}}?_method=PUT");
			newForm.attr("method", "POST");
		
			var burgerDiv = $("<div>");
			burgerDiv.addClass("form-group");
			burgerDiv.html('<input type="hidden" class="form-control" name="devoured" value="true">');

			var button = $("<button>");
			button.addClass("btn btn-default");
			button.attr("type", "submit");
			button.text("DEVOUR ME");
		
			newForm.append(burgerDiv);
			newForm.html("<p>"+this.burger_name+"</p>");
			newForm.append(button);
		
		
			$("#meal-options").append(newForm);
		};
	};
})