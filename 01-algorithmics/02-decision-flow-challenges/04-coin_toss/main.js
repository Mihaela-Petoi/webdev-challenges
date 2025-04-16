/*
✿ CHALLENGE 4: Coin toss
Create a program that simulates the flipping of a coin and displays the result: either Heads or Tails.
*/

function coinToss() {

    const resultsDiv     = document.getElementById("results")     ;
    const result         = Math.random() < 0.5 ? "Heads" : "Tails";
  
    resultsDiv.innerHTML = 
    `
      <p><strong> Result: </strong> ${result}</p>
    `;
  }