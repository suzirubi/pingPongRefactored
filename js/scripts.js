


// begin user interface
$(document).ready(function(){
  $("form#pingPongForm").submit(function(event) {

    var userNumber = parseFloat($("input#userInput").val());
    var falsey = String(userNumber);





      if (falsey === "NaN") {
        $(".falsey").toggle();
        $(".falsey").text("Enter numbers silly!");
      } else if ((userNumber % 1 != 0)|| userNumber <=1) {
        $(".falsey").toggle();
        $(".falsey").text("Ahh... now you're making it too hard, enter a whole number greater than 1!");
      } else if (falsey.match(/^[0-9]+$/) === null) {
        $(".falsey").toggle();
        $(".falsey").text("JUST numbers greater than 1");
      }

      // groceryList.forEach(function(grocery){
      //     $("ul").append("<li>" + grocery + "</li>");
      // });

      // $("#display").text(result);

    event.preventDefault();
  });

});
