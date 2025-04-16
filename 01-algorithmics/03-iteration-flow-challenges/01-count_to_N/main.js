/*
✿ CHALLENGE 1: Count to N
Write a program that takes a positive number as input and counts from 1 up to that number, displaying each value along the way.
*/

function counT() {

  const n          = parseInt(prompt("Enter a positive number:"));
  const resultsDiv = document.getElementById("results");


  if (isNaN(n) || n <= 0) {
      resultsDiv.innerHTML = "<p><strong> Error: </strong> Invalid Input! Enter a positive numer </p>";
      return;
  }
  

  const numbers = [];
  let i = 1;

  while (i <= n) {
      numbers.push(i);
      i++;
  }

  resultsDiv.innerHTML = 
  `
      <h2>Counting to ${n}</h2>
      ${numbers.join("<br>")}
  `;
}