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
    
    const m = parseFloat(prompt("The first number:"));
    const n = parseFloat(prompt("Number two:"));


    let sum;
    let difference;
    let product;
    let quotient;
    let arithmeticMean;
    let remainder;
    let power;


    if (n === 0) {
        alert("DIVISION BY ZERO IS NOT POSSIBLE");
        quotient = "DIVISION BY ZERO IS NOT POSSIBLE";

        sum            = m + n;
        difference     = m - n;
        product        = m * n;
        arithmeticMean = (m + n) / 2    ;
        remainder      = m % n          ;
        power          = Math.pow(m, n) ;

    } else {
        // sum
        sum            = m + n;

        // difference
        difference     = m - n;

        // product
        product        = m * n;

        // quotient
        quotient       = m / n;

        // arithmetic mean
        arithmeticMean = (m + n) / 2;

        // remainder
        remainder      = m % m;

        // x to the y
        power          = Math.pow(m, n);
    }


    let resultHTML = `
        <h2>❀ Arithmetic Operations</h2>

        <p><strong> First Number: </strong>  ${m}</p>

        <p><strong> Second Number: </strong> ${n}</p>

        <p><strong> Sum: </strong> ${sum}</p>

        <p><strong> Difference: </strong> ${difference}</p>

        <p><strong> Product: </strong> ${product}</p>

        <p><strong> Division: </strong> ${quotient}</p>

        <p><strong> Arithmetic Mean: </strong> ${arithmeticMean}</p>

        <p><strong> Remainder (num1 % num2): </strong> ${remainder}</p>

        <p><strong>${num1} to the power of ${num2}: </strong> ${power}</p>
    `;

    document.getElementById("results").innerHTML = resultHTML;
}