
// business logic

function falsey1(input) {
  var falseString = input.toString();
    if (falseString === "NaN") {
      return true;
    }
}

function falsey2(input) {
  var falseString = input.toString();
    if (falseString.match(/^[0-9]+$/) === null) {
      return true;
  }
}

function falsey3(input) {
  var inputInt = parseFloat(input);
  if ((inputInt % 1 != 0)|| inputInt <=1) {
    return true;
  }
}

function sequence(input) {
  var inputWhole = parseInt(input);
  var sequenceArray = [];


  for (var number = 1; number <= inputWhole; ++number) {
  	sequenceArray.push(number);
   }

   console.log(sequence);

}


// begin user interface
$(document).ready(function() {

  $("#pingPongForm").submit(function(event) {
    event.preventDefault();

    var input = $("#userInput").val();
    var false1 = falsey1(input);
    var false2 = falsey2(input);
    var false3 = falsey3(input);
    var sequence1 = sequence(input);


    if (false1 = true) {
      $(".falsey").toggle();
      $(".falsey").text("Enter numbers silly!");
    } else if (false2 = true) {
      $(".falsey").toggle();
      $(".falsey").text("Ahh... now you're making it too hard, enter a whole number greater than 1!");
    } else if (false3 = true) {
      $(".falsey").toggle();
      $(".falsey").text("JUST numbers greater than 1");
    }
    console.log(sequence1);

      // groceryList.forEach(function(grocery){
      //     $("ul").append("<li>" + grocery + "</li>");
      // });

      // $("#display").text(result);

  });

});
