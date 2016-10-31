

// business logic


function falsey(input) {
  if (input % 1 != 0) {
    var response = "response1";
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
  console.log(sequenceArray);

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
      $(".falsey").text("bruce lee");
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
