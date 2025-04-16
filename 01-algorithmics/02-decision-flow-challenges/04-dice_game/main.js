/*
✿ CHALLENGE 4: Dice game
Create a program that simulates a dice roll game between two players.
The program will ask for the players' names, roll the dice for each player, and then display the results.
*/

function diceGame() {

  const player1Name = prompt("Write the first player's name:");
  const player2Name = prompt("Write the second player's name:");

  const resultsDiv  = document.getElementById("results");

  const rollDice    = () => Math.floor(Math.random() * 6) + 1;
  const player1Roll = rollDice();
  const player2Roll = rollDice();


  const winnerMessage =
    player1Roll > player2Roll
      ? `${player1Name} wins!`
      : player2Roll > player1Roll
      ? `${player2Name} wins!`
      : "It's a tie!";


  resultsDiv.innerHTML = `
    <p><strong>${player1Name}'s roll:</strong> ${player1Roll}</p>
    <p><strong>${player2Name}'s roll:</strong> ${player2Roll}</p>

    <p><strong>Result:</strong> ${winnerMessage}</p>
  `;
}