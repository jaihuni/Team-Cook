$(document).ready(function() {
    var noodle_unit = 125;
    var mushroom_unit = 2;
    var sauce_unit = 125;
    var tomato_unit = 5;
    var onion_unit = 1/4;
    var bacon_unit = 55;
    var garlic_unit = 5;
    var sausage_unit = 1;
    var salt_unit = 1/4;
    var broccoli_unit = 1;
    var olive_unit = 1/2;

    $('#modify_amount').click(function() {
        var noodle = $('input[name=noodle]').val();
        var mushroom = $('input[name=mushroom]').val();
        var sauce = $('input[name=sauce]').val();
        var tomato = $('input[name=tomato]').val();
        var onion = $('input[name=onion]').val();
        var bacon = $('input[name=bacon]').val();
        var garlic = $('input[name=garlic]').val();
        var sausage = $('input[name=sausage]').val();
        var salt = $('input[name=salt]').val();
        var broccoli = $('input[name=broccoli]').val();
        var olive = $('input[name=olive]').val();
        
        var temp_array = [];
        temp_array.push(noodle / noodle_unit);
        temp_array.push(sauce / sauce_unit);
        temp_array.push(onion / onion_unit);
        temp_array.push(garlic / garlic_unit);
        temp_array.push(salt / salt_unit);
        temp_array.push(olive / olive_unit);

        var num = Math.floor(temp_array.sort(function(a, b) {
            return a - b;
        })[0]);

        if (!num) {
            alert("You don't have enough ingredients.");
        }

        else if (num > 8) {
            alert("Maximum is 8 people.");
            $('#n-people').val('8').prop("selected", true);
            $('input[name=noodle]').val(8 * noodle_unit);
            $('input[name=sauce]').val(8 * sauce_unit);
            $('input[name=onion]').val(8 * onion_unit);
            $('input[name=garlic]').val(8 * garlic_unit);
            $('input[name=salt]').val(8 * salt_unit);
            $('input[name=olive]').val(8 * olive_unit);
            $('input[name=mushroom]').val(Math.min(8 * mushroom_unit, mushroom));
            $('input[name=tomato]').val(Math.min(8 * tomato_unit, tomato));
            $('input[name=bacon]').val(Math.min(8 * bacon_unit, bacon));
            $('input[name=sausage]').val(Math.min(8 * sausage_unit, sausage));
            $('input[name=broccoli]').val(Math.min(8 * broccoli_unit, broccoli));
        }

        else {
            $('#n-people').val(num).prop("selected", true);
            $('input[name=noodle]').val(num * noodle_unit);
            $('input[name=sauce]').val(num * sauce_unit);
            $('input[name=onion]').val(num * onion_unit);
            $('input[name=garlic]').val(num * garlic_unit);
            $('input[name=salt]').val(num * salt_unit);
            $('input[name=olive]').val(num * olive_unit);
            $('input[name=mushroom]').val(Math.min(num * mushroom_unit, mushroom));
            $('input[name=tomato]').val(Math.min(num * tomato_unit, tomato));
            $('input[name=bacon]').val(Math.min(num * bacon_unit, bacon));
            $('input[name=sausage]').val(Math.min(num * sausage_unit, sausage));
            $('input[name=broccoli]').val(Math.min(num * broccoli_unit, broccoli));
        }
    });

    $('#n-people').change(function() {
        var num = $(this).children("option:selected").val();

        $('input[name=noodle]').val(num * noodle_unit);
        $('input[name=mushroom]').val(num * mushroom_unit);
        $('input[name=sauce]').val(num * sauce_unit);
        $('input[name=tomato]').val(num * tomato_unit);
        $('input[name=onion]').val(num * onion_unit);
        $('input[name=bacon]').val(num * bacon_unit);
        $('input[name=garlic]').val(num * garlic_unit);
        $('input[name=sausage]').val(num * sausage_unit);
        $('input[name=salt]').val(num * salt_unit);
        $('input[name=broccoli]').val(num * broccoli_unit);
        $('input[name=olive]').val(num * olive_unit);
    });
});