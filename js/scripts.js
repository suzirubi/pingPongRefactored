

// business logic




function falsey1(input) {
  if (input <= 0) {
    var responseA = "response1";
  } else if ((input % 1 != 0) && (input >= 1)) {
    responseA = "response2";
  } else {
    return false;
  }
  var responseFinalA = responseA;
  return responseFinalA;
}


function sequenceFinal(input) {
  var length = input.toString();
  var sequenceArray = [];
  for (var number = 1; number <= length; number++ ) {
    sequenceArray.push(number);
  }

  var pingArray = [];

  for (var count = 0; count < length; count ++) {
    var pingArray = sequenceArray.map(function(count) {
      if (count % 15 === 0) {
        return "ping-pong";
      } else if (count % 3 === 0) {
        return "ping";
      } else if (count % 5 === 0) {
      return "pong";
      }  else {
        return count;
      }
    });
  }

  var output = pingArray;
  return output;
}



// begin user interface

$(document).ready(function() {

  $("#pingPongForm").submit(function(event) {

    $("ul").text("");


    var input = parseFloat($("#userInput").val());
    var falseyReturn1 = falsey1(input);
    var falseyReturn2 = isNaN(input);

    var input = $("#userInput").val();

    function falsey2(input) {
      var characters = /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/ ;
        if (input.match(characters)) {
        return true;
      } else {
      return false;
      }
    }

    var falseyReturn3 = falsey2(input);

    var input = parseFloat($("#userInput").val());

    var sequence = sequenceFinal(input);

    if (falseyReturn1 === "response1"){
      $(".falsey").toggle();
      $(".falsey").text("Even Bruce Lee can't return numbers less than zero");
    } else if (falseyReturn1 === "response2"){
      $(".falsey").toggle();
      $(".falsey").text("Bruce Lee is not going to play with a fraction of a player, he's only battling players that are all there.");
    } else if (falseyReturn2 === true){
      $(".falsey").toggle();
      $(".falsey").text("Please, enter a whole number either 1 or higher.");
    } else if (falseyReturn3 === true){
      $(".falsey").toggle();
      $(".falsey").text("Symbols");
    } else if (falseyReturn3 === false){
      $("ul").show();
      $(".display").toggle();
      $(".falsey").hide();
      sequence.forEach (function(item) {
        $("ul").append("<li>" + item + "</li>");
        });
    }


    event.preventDefault();
  });

});
