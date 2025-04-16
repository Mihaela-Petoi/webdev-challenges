/*
✿ CHALLENGE 3: Count Count Between Two Numbers (comma-separated)
Write a program that takes two positive integers as input and prints the numbers from the smaller number to the larger number
in a single line, separated by commas.
*/

function counT() {

    const x = parseInt(prompt("Write the first positive number:"));
    const y = parseInt(prompt("Write the second positive number:"));
    const resultsDiv = document.getElementById("results");
  

    if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
      resultsDiv.innerHTML = "<p><strong> Error: </strong> INVALID INPUT! Please enter two valid positive numbers! </p>";
      return;
    }
  

    const start   = Math.min(x, y);
    const end     = Math.max(x, y);
    const numbers = [];
  

    let i = start;
    while (i <= end) {
      numbers.push(i);
      i++;
    }

    resultsDiv.innerHTML = 
    `
      <h2>Counting Between ${x} and ${y}</h2>
      
      <p>${numbers.join(", ")}</p>
    `;
  }