/*
✿ CHALLENGE 5: Lottery Number Draw
Write a program that simulates a lottery draw. The program should:
1. Randomly generate a set of winning numbers.
2. Allow the user to enter their chosen numbers.
3. Compare the user's numbers with the winning numbers and display how many matches they got.
*/


/*
✿ x - the variable that contains the winning numbers (6 numbers, 1-49)

✿ y - the variable that contains the numbers entered from the keyboard

✿ z - the variable that shows how many matches there are between the digits entered from the keyboard and the winning digits
*/


function simulateLottery() {
  var x = [];
  while (x.length < 6) {
    var randomNum = Math.floor(Math.random() * 49) + 1;
    var exists    = false;


    for (var i = 0; i < x.length; i++) {
      if (x[i] === randomNum) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      x.push(randomNum);
    }
  }


  var userInput  = prompt("Enter 6 lottery numbers (1-49):");
  var inputParts = userInput.split(",");
  var y          = [];


  for    (var j = 0; j < inputParts.length; j++) {
    var trimmed = inputParts[j].trim() ;
    var parsed  = parseInt(trimmed)    ;


    if (!isNaN(parsed)) {
      y.push(parsed);
    }
  }


  var isValid = true;


  if (y.length !== 6) {
    isValid   = false;
  }


  for  (var k = 0; k < y.length; k++) {
    if (y[k] < 1 || y[k] > 49) {
      isValid = false;
      break;
    }
  }


  for   (var m = 0; m < y.length; m++) {
    for  (var n = m + 1; n < y.length; n++) {
      if (y[m] === y[n]) {
        isValid = false;
        break;
      }
    }
  }


  var resultsElement = document.getElementById("results");


  if (!isValid) {
    resultsElement.innerHTML = "</p> INVALID INPUT!</p>";
    return;
  }


  var z = 0;


  for (var i = 0; i < y.length; i++) {
    var foundMatch = false;

    for     (var j = 0; j < x.length; j++) {
      if    (y[i] === x[j]) {
        foundMatch = true;
        break;
      }
    }

    if (foundMatch) {
      z++;
    }
  }


  var resultText = "<p><strong>Winning numbers:</strong> " + x.join(", ") + "</p>";
  resultText    += "<p><strong>Your numbers:</strong> " + y.join(", ") + "</p>";
  resultText    += "<p><strong>You matched " + z + " number" + (z !== 1 ? "s" : "") + "!</strong></p>";

  resultsElement.innerHTML = resultText;
}


function lotteryNum() {
  simulateLottery();
}

