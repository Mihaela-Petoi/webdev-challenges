/*
✿ CHALLENGE 3: Ordering three numbers
Create a program that takes three numbers as input and displays them in an ascending order.
*/

function orderThreeNumbers() {

    var num1 = parseInt(prompt("Write the first number"));
    var num2 = parseInt(prompt("Write the second number"));
    var num3 = parseInt(prompt("Write the third number"));
    var resultsDiv = document.getElementById("results");
  

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      resultsDiv.innerHTML = "<p><strong>Error:</strong> Please enter valid numbers!</p>";
      return;
    }
  

    var m;
    var n;
    var q;
  

    if (num1 <= num2 && num1 <= num3) {
      m = num1;
      if (num2 <= num3) {
        n = num2;
        q = num3;
      } else {
        n = num3;
        q = num2;
      }
    } else if (num2 <= num1 && num2 <= num3) {
      m = num2;
      if (num1 <= num3) {
        n = num1;
        q = num3;
      } else {
        n = num3;
        q = num1;
      }
    } else {
      m = num3;
      if (num1 <= num2) {
        n = num1;
        q = num2;
      } else {
        n = num2;
        q = num1;
      }
    }
  
    resultsDiv.innerHTML = `
      <h2>Ascending Order of Three Numbers</h2>

      <p><strong> First Number:   </strong> ${num1}           </p>
      <p><strong> Second Number:  </strong> ${num2}           </p>
      <p><strong> Third Number:   </strong> ${num3}           </p>
      <p><strong> Ascending Order:</strong> ${m}, ${n}, ${q}  </p>
    `;
  }