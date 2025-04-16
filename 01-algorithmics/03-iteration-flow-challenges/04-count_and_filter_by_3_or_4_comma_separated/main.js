/*
✿ CHALLENGE 4: Count & Filter by 3 or 4 (comma-separated)
Write a program that takes two positive integers as input and prints the numbers between them (inclusive) that are divisible by 3 or 4,
in a single line, separated by commas.
*/

function counT() {

    const x = parseInt(prompt("Write the first positive integer:"));
    const y = parseInt(prompt("Write the second positive integer:"));
    const resultsDiv = document.getElementById("results");
  

    if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
      resultsDiv.innerHTML = "<p><strong>Error:</strong> INVALID INPUT! </p>";
      return;
    }
  

    const start = Math.min(x, y);
    const end   = Math.max(x, y);
  
    let i = start;
    const divisibleNumbers = [];
    
    while (i <= end) {
      if (i % 3 === 0 || i % 4 === 0) {
        divisibleNumbers.push(i);
      }
      i++;
    }    
  
    resultsDiv.innerHTML = `
      <h2>Numbers Divisible by 3 or 4 Between ${x} and ${y}</h2>
      
      <p>${divisibleNumbers.join(", ")}</p>
    `;
  }