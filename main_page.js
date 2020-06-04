$(document).ready( function() {
    $("#suggest").click(function() {
        $("#box").load("suggest.html");
    });
	
    $("#recipes").click(function() {
        $("#box").load("recipes.html");
    });
	
});
