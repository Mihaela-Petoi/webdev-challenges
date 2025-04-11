/*
✿ CHALLENGE 2: Ordering two numbers
Create a program that takes two numbers as input and displays them in an ascending order.
*/

function ascendingOrder() {
    var num1 = parseInt(prompt("Write the first number"));
    var num2 = parseInt(prompt("Write the second number"));
    var resultsDiv = document.getElementById("results");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultsDiv.innerHTML = "<p><strong>Error: </strong> Please enter valid numbers!</p>";
      return;
    }
  
    var higher;
    var lower;
  
    if (num1 > num2) {
      higher = num1;
      lower = num2;
    } else {
      higher = num2;
      lower = num1;
    }
  
    resultsDiv.innerHTML = `
      <h2>Ascending Order</h2>
      <p><strong>First Number:</strong> ${num1}</p>
      <p><strong>Second Number:</strong> ${num2}</p>
      <p><strong>Ascending Order:</strong> ${lower}, ${higher}</p>
    `;
  }