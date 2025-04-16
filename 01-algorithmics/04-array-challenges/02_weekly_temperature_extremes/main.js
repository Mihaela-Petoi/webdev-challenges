/*
✿ CHALLENGE 2: Weekly Temperature Extremes
Write a program that reads a list of numbers and determines the minimum and maximum values in the list.
*/


function weeklyTemp() {
  let input  = prompt("Enter the temperatures, separated by commas (e.g. 12.5, 15.0, -3.8):");
  let result = document.getElementById("results");


  let numbers = input.split(",").map(num => parseFloat(num));

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  result.innerHTML = `
    <p><strong>Entered values: ${numbers.join(", ")}<strong></p>
    <p><strong>Minimum: ${min}°C</strong></p>
    <p><strong>Maximum: ${max}°C</strong></p>
  `;
}

