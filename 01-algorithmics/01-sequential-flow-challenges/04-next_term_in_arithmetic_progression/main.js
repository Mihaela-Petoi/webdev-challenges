/*
✿ CHALLENGE 4: Next Term in Arithmetic Progression
The user enters two numbers in an arithmetic sequence. The program calculates and displays the next number in the sequence.
*/

function run() {
    const num1 = prompt("Write the first number:");
    const num2 = prompt("Write the second number:");

    const firstNumber = parseFloat(num1);
    const secondNumber = parseFloat(num2);

    if (!(isNaN(firstNumber) === false && isNaN(secondNumber) === false)) {
        document.getElementById("results").innerHTML = "<p><strong>Error: </strong>Invalid input!</p> ";
        return;
    }

    const difference = secondNumber - firstNumber;
    const nextNumber = secondNumber + difference;

    const resultHTML = `

        <h2>Next Term in Arithmetic Progression</h2>


        <p><strong> First Number: </strong>  ${firstNumber} </p>

        <p><strong> Second Number: </strong> ${secondNumber} </p>
        
        <p><strong> The next number in the sequence is: </strong> ${nextNumber}</p>
    `;

    document.getElementById("results").innerHTML = resultHTML;
}