/*
✿ CHALLENGE 5: Currency Conversion
The user enters an amount in one currency and an exchange rate. The program calculates and displays the converted amount.
*/

function convert() {

    const amount = parseFloat(prompt("Enter the amount:"));
    const rate   = parseFloat(prompt("Enter the exchange rate:"));

    if (isNaN(amount) || isNaN(rate)) {
        document.getElementById("results").innerHTML = "<p><strong> Error: </strong> Please enter valid numbers!</p>";
        return;
    }

    document.getElementById("results").innerHTML = `

        <p><strong> Amount: </strong>           ${amount} </p>

        <p><strong> Exchange Rate: </strong>    ${rate}   </p>

        <p><strong> Converted Amount: </strong> ${(amount * rate).toFixed(2)} </p>
    `;
}

