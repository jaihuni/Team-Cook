$(document).ready( function() {
    $("#suggest").click(function() {
        $("#box").load("suggest.html");
        $("#title").text("Recipe Suggestion");
    });
	
    $("#recipes").click(function() {
        $("#box").load("recipes.html");
    });
	
});
