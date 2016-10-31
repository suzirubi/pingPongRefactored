

// business logic


function falsey(input) {
  var falseString = input.toString();
  if (input <= 0) {
    var response = "response1";
  } else if (falseString[0] === "-" ) {
    var response = "response1";
  } else if  (input % 1 != 0) {
    response = "response3";
  } else if (falseString.match(/\W/g, '') = true {
    var response = "response2";
  } else {
    return false;
  }

  var responseFinal = response;
  return responseFinal;
}


function sequenceFinal(input) {
  var length = input.toString();
  console.log(input);
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
    var falseyReturn = falsey(input);
    var sequence = sequenceFinal(input);

    if (falseyReturn === "response1"){
      $(".falsey").toggle();
      $(".falsey").text("Even Bruce Lee can't return numbers less than zero");
    } else if (falseyReturn === "response2"){
      $(".falsey").toggle();
      $(".falsey").text("Bruce Lee NaN");
    } else if (falseyReturn === "response3"){
      $(".falsey").toggle();
      $(".falsey").text("Bruce Lee is not going to deal with a fraction of a player, he's only battling players that are all there.");
    } else if (falseyReturn === false){
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
