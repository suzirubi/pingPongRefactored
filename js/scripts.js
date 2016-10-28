
// business logic


function falsey2(input) {
  if (input % 1 !== 0) {
    return true;
  } else if (input % 1 === 0) {
    return false;
  }
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
    var falsey = falsey2(input);
    var sequence = sequenceFinal(input);

    if (falsey === true){
      $(".display").show();
      $(".falsey").toggle();
      $(".falsey").text("Ahh... now you're making it too hard, enter a whole number greater than 1!");
    } else if (falsey === false){
      $("ul").show();
      $(".display").show();
      $(".falsey").hide();
      sequence.forEach (function(item) {
        $("ul").append("<li>" + item + "</li>");
        });
    }


    event.preventDefault();
  });

});
