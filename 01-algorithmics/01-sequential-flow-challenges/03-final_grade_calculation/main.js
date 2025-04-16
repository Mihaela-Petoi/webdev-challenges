/*
✿ CHALLENGE 3: Final Grade Calculation
A student receives three grades. The program calculates and displays the final average.
*/

function calculate() {

    let grade1 = parseFloat(prompt("First grade:"));
    let grade2 = parseFloat(prompt("Second grade:"));
    let grade3 = parseFloat(prompt("Third grade:"));
  

    let mean = (grade1 + grade2 + grade3) / 3;
  

    mean = mean.toFixed(1);
  

    let resultHTML = `
        <p><strong> First grade: </strong>  ${grade1} </p>
        
        <p><strong> Second grade: </strong> ${grade2} </p>

        <p><strong> Third grade: </strong>  ${grade3} </p>

        <p><strong> Final grade: </strong>  ${mean}   </p>
    `;
  
    document.getElementById("results").innerHTML = resultHTML;
  }
  