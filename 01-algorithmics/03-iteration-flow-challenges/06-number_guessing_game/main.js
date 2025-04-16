/*
✿ CHALLENGE 6: Number Guessing Game
Write a program that generates a random number between 1 and a specified maximum value (e.g., 100) and asks the user to guess the number.
After each guess, the program should tell the user whether their guess is too high, too low, or correct. 
The game continues until the user guesses the correct number.

✿✿✿ Requirements ✿✿✿

1. Generate a random number within a specified range (1 to N).
2. Ask the user to input their guess.
3. After each guess, give feedback:
4. "Too high" if the guess is greater than the random number.
5. "Too low" if the guess is less than the random number.
6. "Correct" if the guess matches the random number.
7. Track the number of attempts and display it when the user guesses correctly.
*/


/* ✿ 1. ✿ */
let numGuess = Math.floor(Math.random() * 100) + 1;


/* ✿ 7. ✿ */
let attempts = 0;


function checkGuess() {
  const input = document.getElementById("guessInput");
  const feedback = document.getElementById("feedback");


  /* ✿ 2. ✿ */
  const guess = parseInt(input.value);


  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }


  /* ✿ 7. ✿ */
  attempts++;

  
  /* ✿  3, 4, 5, 6  ✿ */
  if (guess === numGuess) {
    feedback.textContent = `✿ Correct! You guessed the number in ${attempts} tries. ✿`;
    input.disabled = true;
  } else if (guess < numGuess) {
    feedback.textContent = "Your guess is too low.";
  } else {
    feedback.textContent = "Your guess is too high.";
  }

  
  input.value = "";
}
