// JavaScript source code
// task1 ����: input the ingredients that user has or wants to add, and receive suggested recipes
$(document).ready(function () {//show set-screen modal
    var setSelect = document.getElementById("set-screen");
    $("#add_set").click(function () { 
        setSelect.style.display = "block";
    });
    $("#set_close").click(function () {
        setSelect.style.display = "none";
    })
});

$(document).ready(function () { //checkboxes
    $('input[name="pasta"]').on("click", function () {
        var ingID = this.id;
        var oneIng = document.getElementById(ingID);
        if (oneIng.checked == true) {
            addIngredient(ingID);
        }
        else {
            deleteIngredient(ingID);
        }
    });
});

var menuList

$(document).ready(function () { //show menus modal
    menuList = document.getElementById("menus");
    $("#suggestR").click(function () {
        menuList.style.display = "block";
    });
    $("#menu_close").click(function () {
        menuList.style.display = "none";
    });
});

$(document).ready(function () { //Enter
    $('#searchIng_input').keypress(function (e) {
        if (e.keyCode == 13) {
            $('#searchIng_enter').click();
        }
    });
});
$(document).ready(function () { //add ingredient user typed in
    //WARNING: this doesn't recognize ingredients
    var inputBox = document.getElementById('searchIng_input');
    var submitBtn = document.getElementById('searchIng_enter');
    submitBtn.onclick = function () {
        var myValue = inputBox.value;
        if (myValue != '') {
            addIngredient(myValue);
            inputBox.value = '';
        }
    }
});
$(document).ready(function () { //Enter
    $('#clearI').click(function () {
        clearIngredient();
    });
});

//add, delete checkbox-ed ingredients
function addIngredient(ing) {
    //add row to list(table id)
    var table = document.getElementById("list");
    var numRows = table.rows.length;
    var row = table.insertRow(numRows);
    row.id = String(ing) + "1";
    var cell1 = row.insertCell(0);
    cell1.colSpan = "2";
    //write ingredient(ing) in the new row
    cell1.innerHTML = String(ing);
}
function deleteIngredient(ing) {
    var table = document.getElementById("list");
    var ingName = document.getElementById(ing + "1");
    //delete specified ingredient
    var to = ingName.rowIndex;
    table.deleteRow(to);
    document.getElementById("test").innerHTML = to;

}

function clearIngredient() { //clear ingredient list
    var table = document.getElementById("list");
    var numRows = table.rows.length;
    var i = numRows - 1;
    while (i > 0) {
        table.deleteRow(i);
        i -= 1;
    }
    var lst = document.getElementsByName("pasta");
    for (var j = 0; j < lst.length; j++) {
        lst[j].checked = false;
    }
//    document.getElementById('test').innerHTML = lst;
}

/* set-screen modal functions */
$(document).ready(function () { //add new set
    var newSetName = document.getElementById("new_set_name");
    var newSet = document.getElementById("new_set");
    var addSet = document.getElementById("add_setM");
    addSet.onclick = function () {
        var name = newSetName.value;
        var nextSet = newSet.value;
        if ((nextSet != '') && (name != '')) {
            addNewSet(name, nextSet);
        }
    }
});
//enter*2
$(document).ready(function () {
    $('#new_set_name').keypress(function (e) {
        if (e.keyCode == 13) {
            $('#add_setM').click();
        }
    });
});
$(document).ready(function () {
    $('#new_set').keypress(function (e) {
        if (e.keyCode == 13) {
            $('#add_setM').click();
        }
    });
});

$(document).ready(function () { //add SET to list of ingredients
    $('button[name="SI"]').click(function () {
        var setName = this.id;
        //document.getElementById('test').innerHTML = String(setName);
        addIngredient(setName);
        //and close the modal window (for now)
        var setSelect = document.getElementById("set-screen");
        setSelect.style.display = "none";
    })

});

function addNewSet(name, ings) {  
    var table = document.getElementById("setTable");
    var numRows = table.rows.length;
    var row = table.insertRow(numRows - 1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell0.innerHTML = String(name);
    cell1.innerHTML = String(ings);

    //add button to rightmost cell
    var btn = document.createElement("button");
    btn.name = "SI";
    btn.id = String(name);
    btn.innerHTML = "add to ingredients";
    cell2.appendChild(btn);

    btn.onclick = function () {
        addIngredient(String(name));
        var setSelect = document.getElementById("set-screen");
        setSelect.style.display = "none";
    }
}

/* menus modal functions */
$(document).ready(function () { //move to recipes.html (since what-to-make has been decided)
    $('button[name="MD"]').click(function () {
        $("#box").load("recipes.html");
        menuList.style.display = "none";
    })
});