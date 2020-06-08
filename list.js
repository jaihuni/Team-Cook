$(document).ready(function () {
    $(document).on('click', '#select',function() {
        $("#box").load("recipes.html");
        $("#left").text($(this).parent().parent().attr("name"));
        //console.log($(this).parent().parent().attr("name"));
    });
});