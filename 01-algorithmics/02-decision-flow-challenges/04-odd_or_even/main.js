/*
✿ CHALLENGE 4: Odd or even
Create a program that determines whether a given number is odd or even.
*/

function oddEven() {

    var num        = parseInt(prompt("Input a number:"));

    var resultsDiv = document.getElementById("results") ;
  

    if (isNaN(num)) {
      resultsDiv.innerHTML = "<p><strong> Error: </strong> Please enter a valid number!</p>";
      return;
    }
  

    let message = "";
    if (num % 2 === 0) {
      message   = `${num} is an even number`;
    } else {
      message   = `${num} is an odd number` ;
    }
  

    resultsDiv.innerHTML = `
      <p><strong> Input Number: </strong> ${num}     </p>
      <p><strong> Result: </strong>       ${message} </p>
    `;
  }