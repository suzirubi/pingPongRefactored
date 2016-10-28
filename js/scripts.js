


// begin user interface
$(document).ready(function(){
  $("form#pingPongForm").submit(function(event){

    var userInput = parseFloat($("input#userInput").val());
    // var finalOutput = sequence(input);
      $("#sequence").show();
      $("#sequence").text((if ("userInput" === NaN){
        return "Enter a number greater than 1 silly!";
        }
      ));




    event.preventDefault();
  });
});
