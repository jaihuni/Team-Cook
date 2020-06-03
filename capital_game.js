// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function changeName(country_capital_pairs) {
  var countryNum = getRandomInt(0, country_capital_pairs.length-1);
  //console.log(country_capital_pairs, countryNum)
  $("#pr2__question").text(country_capital_pairs[countryNum].country);
  return countryNum;
}

var pairs = [];

$( document ).ready(function() {

  var capitalArray = [];
  var country_capital_pairs;
  var countryNum;
  var undocount = 0;
  var cnt = 0;

  var firebaseConfig = {
    apiKey: "AIzaSyBFcVQ9aTDlP2Im29cN-iiS3hiiCf1YbMs",
    authDomain: "cs374pr3-ea07f.firebaseapp.com",
    databaseURL: "https://cs374pr3-ea07f.firebaseio.com",
    projectId: "cs374pr3-ea07f",
    storageBucket: "cs374pr3-ea07f.appspot.com",
    messagingSenderId: "372885930321",
    appId: "1:372885930321:web:588cb7032fd5d6ce289370",
    measurementId: "G-SJJKPKQ76Z"
  };
  // Initialize Firebase
  var pro = firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  // Get a reference to the database service
  var database = firebase.database();
  var dbTestRef = database.ref('/')
  
  dbTestRef.on('child_added', function(data){
    //console.log(data)
    
    if(data.key === 'undocount') {
      undocount = data.val()
    }
    else if(data.key === 'cnt') {
      cnt = data.val()
    }
    else{
      
      var show = ''
      var name = ''
      if(data.val().delete > -1) {
        show = 'none'
        name = 'delete'
      }
      else $("#default").remove();
      if(data.val().correct) {
        $("#resultTable")
          .append($('<tr class="correct" id="'+data.key+'" style="display:'+show+'" name="'+name+'">')
            .append($('<td class="country">').text(data.val().country))
            .append($('<td>').text(data.val().answer))
            .append($('<td class="capital">').append(data.val().capital)
            .append($('<button class="delete">').append("Delete")))
          );
      }
      else {
        $("#resultTable")
          .append($('<tr class="incorrect" id="'+data.key+'" style="display:'+show+'" name="'+name+'">')
            .append($('<td class="country">').text(data.val().country))
            .append($('<td class="strikethrough">').text(data.val().answer))
            .append($('<td class="capital">').append(data.val().capital)
            .append($('<button class="delete">').append("Delete")))
          );
      }
    }

      if(undocount === 0) {
        $("#pr3__undo").attr('disabled', true)
      }
      else {
        $("#pr3__undo").attr('disabled', false)
      }
    
      if(cnt === 0){
        $("#pr3__clear").attr('disabled', true)
      }
      else {
        $("#pr3__clear").attr('disabled', false)
      }
  })

  
  $.ajax({
    url: 'http://cs374.s3.ap-northeast-2.amazonaws.com/country_capital_pairs.csv',
    dataType: 'text',
  }).done(response => {
    var raw = response.split(/\r\n|\n/);
    //console.log(raw);
    for(i = 0; i < raw.length; i++) {
      var row = raw[i].split(',')
      //console.log(row);
      if(row[0] === 'country') {
        //console.log(row);
        continue;
      }
      pairs.push({
        "country": row[0],
        "capital": row[1]
      });
      //console.log(pairs, pairs.length);
    }
    country_capital_pairs = pairs;
    countryNum = changeName(country_capital_pairs);
    $("#map").attr('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyB5-lsHuGf3S07f-H3xNNloyS_AZhxVZnU&maptype=roadmap&language=en&q="+country_capital_pairs[countryNum].country)

    for(i = 0; i < country_capital_pairs.length; i++) {
      capitalArray[i] = country_capital_pairs[i].capital;
    }

  });
  //console.log(pairs, pairs.length);



  $(document).on('click', '.chk', function() {
    $("#default").remove();

    var chk = $('input[name="chk"]:checked').val()
    if(chk === "Correct Only") {
      $("#resultTable tr").filter(function() {
        $(this).toggle($(this).attr('class') != "incorrect" && $(this).attr('name') != "delete")
      })

      if($("#resultTable tr").filter(function() {
        return $(this).css('display') !== 'none';
      }).length === 4) {

        $("#resultTable")
          .append($('<tr id="default">')
            .append($('<td>'))
            .append($('<td>').text("No entry to show"))
            .append($('<td>'))
        )
      }
    }

    if(chk === "Wrong Only") {
      $("#resultTable tr").filter(function() {
        $(this).toggle($(this).attr('class') != "correct" && $(this).attr('name') != "delete")
      })

      if($("#resultTable tr").filter(function() {
        return $(this).css('display') !== 'none';
      }).length === 4) {
        
        $("#resultTable")
          .append($('<tr id="default">')
            .append($('<td>'))
            .append($('<td>').text("No entry to show"))
            .append($('<td>'))
        )
      }
    }

    if(chk === "All") {
      $("#resultTable tr").filter(function() {
        $(this).toggle($(this).attr('name') != "delete")
      })

      if($("#resultTable tr").filter(function() {
        return $(this).css('display') !== 'none';
      }).length === 4) {
        
        $("#resultTable")
          .append($('<tr id="default">')
            .append($('<td>'))
            .append($('<td>').text("No entry to show"))
            .append($('<td>'))
        )
      }
    }
  })

  $("#pr2__submit").click(function() {
    var chk = $('input[name="chk"]:checked').val()
    var answer = $("#pr2__answer").val();
    var correct = false;
    if (answer.toLowerCase() === country_capital_pairs[countryNum].capital.toLowerCase()) correct = true; 

    $("#default").remove();
    

    if(correct) {
      database.ref('/').push({
        country:country_capital_pairs[countryNum].country,
        answer:answer, correct: true,
        capital:country_capital_pairs[countryNum].capital,
        create: undocount,
        delete: -1
      });
      if(chk === "Wrong Only") {
        $("#All").prop("checked", true).trigger("click");
      }
    }

    else {
      database.ref('/').push({
        country:country_capital_pairs[countryNum].country,
        answer:answer, correct: false,
        capital:country_capital_pairs[countryNum].capital,
        create: undocount,
        delete: -1
      });
      if(chk === "Correct Only") {
        $("#All").prop("checked", true).trigger("click");
      }
    }

    //console.log("aaa")
    cnt += 1;
    undocount += 1;

    $("#pr3__undo").attr('disabled', false)
    $("#pr3__clear").attr('disabled', false)

    database.ref('/cnt').set(cnt);
    database.ref('/undocount').set(undocount);

    countryNum = changeName(country_capital_pairs);
    $("#map").attr('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyB5-lsHuGf3S07f-H3xNNloyS_AZhxVZnU&maptype=roadmap&language=en&q="+country_capital_pairs[countryNum].country)
    $("#pr2__answer").val("");
    $("#pr2__answer").focus();
  })

  $("#pr3__undo").click(function() {
    undocount -= 1;
    let listener = dbTestRef.on( 'child_added', function(data){
      //console.log(data)
      
      if(data.key === 'undocount') {
      }
      else if(data.key === 'cnt') {
      }
      else if (data.key === 'default') {

      }
      else{
        //console.log(data)
        if(data.val().create === undocount) {
          //console.log(cnt, undocount)
          cnt -= 1;
          //console.log(cnt, undocount)
          database.ref('/'+data.key).remove()
          $("#resultTable tr")[$("#resultTable tr").length-1].remove()
          //console.log(cnt, undocount)
          if(cnt === 0) {
            $("#pr3__clear").attr('disabled', true)
          }
          $("#correct").prop("checked", true).trigger("click");
          $("#All").prop("checked", true).trigger("click");
        }
        else if(data.val().delete === undocount) {
          cnt += 1;
          database.ref('/'+data.key+"/delete").set(-1)
          $("#"+data.key).attr("name", "");
          $("#"+data.key).attr("style", "");
          $("#default").remove();
          $("#pr3__clear").attr('disabled', false)
          $("#correct").prop("checked", true).trigger("click");
          $("#All").prop("checked", true).trigger("click");
        }
      }
    }

    )
    //console.log(listener)

    dbTestRef.off('child_added', listener)


    //console.log(cnt, undocount)
    database.ref('/cnt').set(cnt);
    database.ref('/undocount').set(undocount);

    if(undocount === 0) $("#pr3__undo").attr('disabled', true)

  
  })


  $(document).on('click', '.delete', function() {
    //console.log($(this).parent().parent())
    database.ref('/'+$(this).parent().parent().attr('id')+'/delete').set(undocount)

    undocount += 1;
    cnt -= 1;

    database.ref('/cnt').set(cnt);
    database.ref('/undocount').set(undocount);

    if(cnt === 0)
      $("#pr3__clear").attr('disabled', true)

    $(this).parent().parent().attr('style', 'display: none');
    $(this).parent().parent().attr('name', 'delete');

    if($("#resultTable tr").filter(function() {
      return $(this).css('display') !== 'none';
    }).length === 4) {
      $("#resultTable")
      .append($('<tr id="default">')
        .append($('<td>'))
        .append($('<td>').text("No entry to show"))
        .append($('<td>'))
      );
    }
  })

  var setTimeoutConst

  $(document).on( 'mouseenter', '.country', function(){
    //console.log($(this).parent())
    setTimeoutConst = setTimeout(() => {
      $("#map").attr('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyB5-lsHuGf3S07f-H3xNNloyS_AZhxVZnU&maptype=roadmap&language=en&q="+$(this).context.innerHTML)
      $("#map").attr("style","border: 3px orange solid")
    }, 500);
    $(this).parent().attr("style","background: lightgray")
  }).on( 'mouseleave', '.country', function(){
      //console.log("two");  
      clearTimeout(setTimeoutConst)
      $("#map").attr("style","border: 0")
      $(this).parent().attr("style","")
  })

  $(document).on( 'mouseenter', '.capital', function(){
    //console.log($(this).parent().attr("id"))
    var term
    let listener = database.ref('/'+$(this).parent().attr("id")).on('child_added', function(data){
      //console.log(data.key)
      if(data.key === 'capital') term = data.val() 
    })
    database.ref('/'+$(this).parent().attr("id")).off('child_added', listener)
    $(this).parent().attr("style","background: lightgray")
    
    setTimeoutConst = setTimeout(() => {
      
      $("#map").attr('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyB5-lsHuGf3S07f-H3xNNloyS_AZhxVZnU&maptype=roadmap&language=en&zoom=4&q="+term)
      $("#map").attr("style","border: 3px black solid; filter: grayscale(100%)")
    }, 500);
  }).on( 'mouseleave', '.capital', function(){
      //console.log("two");  
      clearTimeout(setTimeoutConst)
      $("#map").attr("style","border: 0")
      if($(this).parent().attr("style") != 'display: none')
        $(this).parent().attr("style","")
  })

  $("#pr3__clear").click(function() {
    var i = $("#resultTable tr").length-1;
    while(i >= 4) {
      //console.log($("#resultTable tr"))
      if($("#resultTable tr").eq(i).attr("name") != 'delete') {
        $("#resultTable tr").eq(i).attr('style', 'display: none');
        $("#resultTable tr").eq(i).attr("name",'delete') 
        database.ref('/'+$("#resultTable tr").eq(i).attr('id')+'/delete').set(undocount)
        
      }
      i -= 1;
    }  

    undocount += 1;
    cnt = 0;

    database.ref('/cnt').set(0);
    database.ref('/undocount').set(undocount);

    $("#pr3__clear").attr('disabled', true)

    if($("#resultTable tr").filter(function() {
      return $(this).css('display') !== 'none';
    }).length === 4) {
      $("#resultTable")
      .append($('<tr id="default">')
        .append($('<td>'))
        .append($('<td>').text("No entry to show"))
        .append($('<td>'))
      );
    }
  })

  $("#pr3__restart").click(function() {
    dbTestRef.set({});
    while($("#resultTable tr").length > 4) $("#resultTable tr")[$("#resultTable tr").length-1].remove();
    $("#resultTable")
    .append($('<tr id="default">')
      .append($('<td>'))
      .append($('<td>').text("No entry to show"))
      .append($('<td>'))
    )
    undocount = 0
    cnt = 0
    $("#pr3__undo").attr('disabled', true)
    $("#pr3__clear").attr('disabled', true)
    countryNum = changeName(country_capital_pairs);
    $("#map").attr('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyB5-lsHuGf3S07f-H3xNNloyS_AZhxVZnU&maptype=roadmap&language=en&q="+country_capital_pairs[countryNum].country)

  })

  


  var check = 0;

  $("#pr2__answer").on("keyup", function(event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      $("#pr2__submit").trigger("click");
      check = 0;
      $("#pr2__answer").autocomplete('close');
    }
  });


  $("#pr2__answer").autocomplete({
    minLength: 2,
    source: capitalArray,
    select: function( event, ui ) {
      $("#pr2__answer").val(ui.item.value);
      check = 1;
    },
    close: function( event, ui ) {
      if(check === 1 && event.keyCode != 13) {
        $("#pr2__submit").trigger("click");
      }
      check = 0;
    }
  })




});
