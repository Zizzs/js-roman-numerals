//Business Logic
var output;
var romanCalc = function(userNumber) {
  var obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
    },
      roman = '';
  //Largest Value
  //Subtract that value from num
  //Add (string) value to roman
  //Check again
  for(var i in obj){
    while(userNumber >= obj[i]){
      roman += i;
      userNumber -= obj[i];
    }
    }
  output = roman;
}

//User Interface Logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());
    romanCalc(userNumber);
    $("#userOutput").text(output);
  });
});
