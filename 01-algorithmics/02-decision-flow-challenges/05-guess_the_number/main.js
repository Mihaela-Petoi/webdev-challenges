/*
✿ CHALLENGE 5: Guess the number
Create a program that generates a random number between 1 and 3.
The user is prompted to guess the number, and if they guess correctly, they win.
*/

function guessTheNum() {
  
    const randomNum  = Math.floor(Math.random() * 3) + 1;
    const userGuess  = parseInt(prompt("Guess a number between 1 and 3:"));
    const resultsDiv = document.getElementById("results");
  

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 3) {
      resultsDiv.innerHTML = "<p><strong> Error: </strong> Enter a valid number between 1 and 3!!</p>";
      return;
    }
  

    const message =
      userGuess === randomNum
        ? `You won! The correct number was ${randomNum}.`
        : `Wrong! The correct number was   ${randomNum}.`;
  

    resultsDiv.innerHTML = `
      <p> Your guess:      ${userGuess}       </p>
      <p> Result: <strong> ${message}</strong></p>
    `;
  }