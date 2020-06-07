// JavaScript source code
// task1 ±¸Çö: input the ingredients that user has or wants to add, and receive suggested recipes
$(document).ready(function () {
    $("#add_set").click(function () {
        //var newIng = 
    });


});

$(document).ready(function () {
    $('input[name="pasta"]').on("click", function () {
        var ingID = this.id;
        var oneIng = document.getElementById(ingID);
        if (oneIng.checked == true) {
            //var ing = document.getElementById(this.id).innerHTML;
            addIngredient(ingID);
        }
        else {
            deleteIngredient(ingID);
        }

        //alert('button clicked');
    });
});

$(document).ready(function () { //show pasta recipe
    $("#suggestR").click(function () {
        //var newIng = 
    });


});

function addIngredient(ing) {
    //add row to list(table id)
    var table = document.getElementById("list");
    var numRows = table.rows.length;
    var row = table.insertRow(numRows);
    row.id = String(ing) + "1";
    var cell1 = row.insertCell(0);
    cell1.colSpan = "2";
    //write ingredient(ing) in the new row
    cell1.innerHTML = String(ing);//JSON.stringify(ing);
}
function deleteIngredient(ing) {
    var table = document.getElementById("list");
    var ingName = document.getElementById(ing + "1");
    //delete specified ingredient
    //ingName.remove();
    var to = ingName.rowIndex;
    table.deleteRow(to);
    document.getElementById("test").innerHTML = to;

}