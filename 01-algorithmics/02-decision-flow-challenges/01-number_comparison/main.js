/***
✿ CHALLENGE 1: Number comparison
Create a program that compares two numbers provided by the user and determines whether they are in ascending or descending order.
*/ 

/*
var numere = [11, 1, 10, 3, 5, 20, 180];
var min = numere[0];
for( i=1; i<7; i++ ) {
    if( numere[i] <= min  ) {
        min = numere[i];
    }
    }
console.log(min);
*/

function compareNum() {

    const num1       = parseFloat(prompt("The first number: "));
    const num2       = parseFloat(prompt("The second number: "));
    const resultsDiv = document.getElementById("results");
  

    if (isNaN(num1) || isNaN(num2)) {
      resultsDiv.innerHTML = "<p><strong>Error: </strong> Please enter valid numbers!</p>";
      return;
    }
  

    let message = "";
    if (num1 < num2) {
      message   = "The numbers are in an ASCENDING ORDER";
      
    } else if (num1 > num2) {
      message   = "The numbers are in a DESCENDING ORDER";
    } else {
      message   = "The numbers are EQUAL";
    }
  
    resultsDiv.innerHTML = `

      <p><strong> First Number: </strong>  ${num1}    </p>

      <p><strong> Second Number: </strong> ${num2}    </p>

      <p><strong> Result: </strong>        ${message} </p>
    `;
  }
  