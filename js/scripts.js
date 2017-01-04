

// business logic


function sequenceFinal(input) {
  var output = [];
  for (var count = 0; count <= input; count ++) {
    if (count % 15 === 0) {
      output.push("ping-pong");
    } else if (count % 3 === 0) {
      output.push("ping");
    } else if (count % 5 === 0) {
      output.push("pong");
    }  else {
      output.push(count);
      }
    }
  return output;
}



// begin user interface

$(document).ready(function() {

  $("#pingPongForm").submit(function(event) {
    event.preventDefault();

    $("ul").text("");


    var input = $("#userInput").val();


    var output = sequenceFinal(input);

    output.forEach (function(item) {
        $("ul").append("<li>" + item + "</li>");
    });
  });
});
