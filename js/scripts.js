
// business logic


function falsey2(input) {
  if (input % 1 !== 0) {
    return true;
  } else if (input % 1 === 0) {
    return false;
  }
}

function sequenceFinal(input) {
  var numberSequence = 
  var sequenceArray = input.split(",");

  console.log(sequenceArray);
  var output = sequenceArray;
  return output;
}




// begin user interface
$(document).ready(function() {

  $("#pingPongForm").submit(function(event) {

    $("ul").text("");

    var input = parseFloat($("#userInput").val());
    var falsey = falsey2(input);
    var sequence = sequenceFinal(input);
    console.log(sequence);


    if (falsey === true){
      $(".display").show();
      $(".falsey").show();
      $(".falsey").text("Ahh... now you're making it too hard, enter a whole number greater than 1!");
    } else if (falsey === false){
      $(".display").show();
      $("#list").show();
      $(".falsey").hide();
      sequence.forEach (function(item) {
        $("ul").append("<li>" + item + "<li>");
        });
    }


    event.preventDefault();
  });

});
