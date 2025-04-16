/*
✿ CHALLENGE 1: Number Relations
Create a program that takes a numeric value from the user and displays:
1. In a single message, a sequence of text containing: the previous number, the given number, and the next number (e.g., 5 => "4, 5, 6").
2. The opposite of the number (e.g., 5 => "the opposite of 5 is -5", -3 => "the opposite of -3 is 3").
3. The remainder of the division by 2 (e.g., 5 => "the remainder of 5 divided by 2 is 1").
4. Number 2 raised to the power of the given value (e.g., 3 => "2 to the power of 3 is 8").
*/

function run() {

    let input = prompt("Integer input:");
    let num   = parseInt(input);

    
    let previousNum = num - 1 ;
    let nextNum     = num + 1 ;
    let opposite    = -num    ;
    let remainder   = num % 2 ;
    let power       = Math.pow(2, num);


    let resultHTML = `
        <p><strong>Sequence:</strong> ${previousNum}, ${num}, ${nextNum}</p>
        <p><strong>Opposite:</strong> The opposite of ${num} is ${opposite}</p>
        <p><strong>Remainder:</strong> The number ${num} divided by 2 has a remainder of: ${remainder}</p>
        <p><strong>Power:</strong> 2 to the power of ${num} is ${power}</p>
    `;

    document.getElementById("results").innerHTML = resultHTML;
}
