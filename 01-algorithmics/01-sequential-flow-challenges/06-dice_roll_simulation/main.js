/*
✿ CHALLENGE 6: Dice Roll Simulation
The program generates and displays a random number between 1 and 6, simulating the roll of a six-sided die.
*/

/*console.log(`You rolled: ${Math.floor(Math.random() * 6) + 1}`); */


function rollDice() {

    const randomNum  = Math.floor(Math.random() * 6) + 1;

    const resultHTML = `
        <h2> Dice Roll Simulation </h2>

        <p>You rolled: <strong>${randomNum}</strong></p>
    `;

    document.getElementById("results").innerHTML = resultHTML;
}