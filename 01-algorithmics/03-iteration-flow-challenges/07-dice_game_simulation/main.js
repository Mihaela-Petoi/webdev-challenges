/*
✿ CHALLENGE 7: Dice Game Simulation
Write a program that simulates a dice game where two players take turns to roll a 6-sided die.
Each player rolls once per turn, and the player with the higher roll wins the round.
The game continues for a set number of rounds, and at the end, the program should declare the winner based on who has won the most rounds.
*/

/* ✿✿✿ Requirements ✿✿✿

1. Simulate the rolling of a 6-sided die (random numbers between 1 and 6).
2. Let the user input how many rounds they want to play.
3. For each round, roll a die for Player 1 and Player 2.
4. After each round, display the outcome:
    ✿ "Player 1 wins the round" if Player 1's roll is higher.
    ✿ "Player 2 wins the round" if Player 2's roll is higher.
    ✿ "It's a tie" if both players roll the same number.
5. At the end of all rounds, display the total number of rounds won by each player and declare the overall winner:
    ✿ "Player 1 is the winner" or "Player 2 is the winner" based on who won more rounds.
    ✿ If both players tie in total rounds won, declare "It's a tie."
*/


 /* ✿ 1. ✿ */
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


function playGame() {
    /* ✿ 2. ✿ */
    const numRounds       = parseInt(prompt("Enter the number of rounds to play:"));
    const resultsDiv      = document.getElementById("results");
    resultsDiv.innerHTML  = "";



    if (isNaN(numRounds) || numRounds <= 0) {
        resultsDiv.innerHTML = "<p> Please enter a valid number of rounds. </p>";
        return; 
    }

    
    let aliceWins = 0 ;
    let bobWins   = 0 ;
    let output    = ""; 

    for (let round = 1; round <= numRounds; round++) {

        /* ✿ 3. ✿ */
        const aliceRoll = rollDice();
        const bobRoll   = rollDice();

        output += `<p> Round ${round}: <br>`;
        output += `Alice rolled: ${aliceRoll} <br>`;
        output += `Bob rolled: ${bobRoll} <br>`;

        /* ✿ 4. ✿ */
        if (aliceRoll > bobRoll) {
            output += `Alice wins the round. </p>`;
            aliceWins++;
        } else if (bobRoll > aliceRoll) {
            output += `Bob wins the round. </p>`;
            bobWins++;
        } else {
            output += `It's a tie. </p>`;
        }
    }

    /* ✿ 5. ✿ */
    output += `<h3> Final Result: </h3>`;
    output += `<p> Alice won ${aliceWins} rounds. </p>`;
    output += `<p> Bob won ${bobWins} rounds. </p>`;

    if (aliceWins > bobWins) {
        output += `<h2> Alice is the winner! </h2 >`;
    } else if (bobWins > aliceWins) {
        output += `<h2> Bob is the winner! </h2>`;
    } else {
        output += `<h2> It's a tie! </h2>`;
    }


    resultsDiv.innerHTML = output;
}