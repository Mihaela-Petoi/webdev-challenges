/*
✿ CHALLENGE 2: Basic Arithmetic Operations
The user enters two numeric values. The program displays:
1. Their sum,
2. Their difference,
3. Their product,
4. Their division,
5. Their arithmetic mean,
6. The remainder of the division of the first number by the second,
7. The first number raised to the power of the second.
*/

function run() {
    const num1 = parseFloat(prompt("The first number:"));
    const num2 = parseFloat(prompt("Number two:"));

    let sum;
    let difference;
    let product;
    let quotient;
    let arithmeticMean;
    let remainder;
    let power;

    if (num2 === 0) {
        alert("DIVISION BY ZERO IS NOT POSSIBLE");
        quotient = "DIVISION BY ZERO IS NOT POSSIBLE";
        sum = num1 + num2;
        difference = num1 - num2;
        product = num1 * num2;
        arithmeticMean = (num1 + num2) / 2;
        remainder = num1 % num2;
        power = Math.pow(num1, num2);
    } else {
        // sum
        sum = num1 + num2;

        // difference
        difference = num1 - num2;

        // product
        product = num1 * num2;

        // quotient
        quotient = num1 / num2;

        // arithmetic mean
        arithmeticMean = (num1 + num2) / 2;

        // remainder
        remainder = num1 % num2;

        // x to the y
        power = Math.pow(num1, num2);
    }

    let resultHTML = `
        <h2>❀ Arithmetic Operations</h2>
        <p><strong>First Number:</strong> ${num1}</p>
        <p><strong>Second Number:</strong> ${num2}</p>
        <p><strong>Sum:</strong> ${sum}</p>
        <p><strong>Difference:</strong> ${difference}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Division:</strong> ${quotient}</p>
        <p><strong>Arithmetic Mean:</strong> ${arithmeticMean}</p>
        <p><strong>Remainder (num1 % num2):</strong> ${remainder}</p>
        <p><strong>${num1} to the power of ${num2}:</strong> ${power}</p>
    `;

    document.getElementById("results").innerHTML = resultHTML;
}