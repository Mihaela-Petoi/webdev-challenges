/*
✿ CHALLENGE 5: FizzBuzz
Write a program that prints the numbers from 1 to a given positive integer. However, for multiples of 3, print "Fizz" instead of the number,
for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".
*/

function fizzBuzz() {
    const n = parseInt(prompt("Enter a positive integer:"));
    const resultsDiv = document.getElementById("results");
  
    if (isNaN(n) || n <= 0) {
      resultsDiv.innerHTML = "<p><strong>Error:</strong> Please enter a valid positive integer!</p>";
      return;
    }
  
    let output = "";
    let i = 1;
      while (i <= n) {
        let fizz = "";
        if (i % 3 ===  0) {
          fizz = "Fizz";
        }
        
        
        let buzz = "";
        if (i % 5 === 0) {
          buzz = "Buzz";
        }


        if (fizz && buzz) {
          output += "FizzBuzz";
        } else if (fizz) {
          output += "Fizz";
        } else if (buzz) {
          output += "Buzz";
        } else {
          output += i;
        }

        output += "<br>";
        i++;
      }
  
    resultsDiv.innerHTML = `
      <h2>FizzBuzz up to ${n}</h2>
      ${output}
    `;
  }