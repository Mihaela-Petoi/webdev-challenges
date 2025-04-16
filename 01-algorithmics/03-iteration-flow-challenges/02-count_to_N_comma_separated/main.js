/*
✿ CHALLENGE 2: Count to N (comma-separated)
Write a program that takes a positive integer as input and prints the numbers from 1 to that number in a single line,
separated by commas.
*/

function counT() {
    const n = parseInt(prompt("Enter a positive number:"));
    const resultsDiv = document.getElementById("results");
  
    if (isNaN(n) || n <= 0) {
      resultsDiv.innerHTML = "<p><strong> Error: </strong> Invalid Input! Enter a positive number! </p>";
      return;
    }
  
    const numbers = [];

    let i = 1;
    while (i <= n) {
      numbers.push(i);
      i++;
    }
    
    resultsDiv.innerHTML = `
      <h2>Counting to ${n} (Comma-Separated)</h2>
      
      <p>${numbers.join(", ")}</p>
    `;
  }