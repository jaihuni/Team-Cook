$(document).ready( function() {
    $(document).on('click', '#suggest',function() {
        $("#box").load("suggest.html");
        $("#left").text("Recipe Suggestion");
    });
	
    $(document).on('click', '#recipes',function() {
        $("#box").load("recipes.html");
        $("#left").text("Recipe Optimizing");
    });
	
});
