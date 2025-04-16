/*
✿ CHALLENGE 1: Count Above and Below the Average
Write a program that reads a list of student grades, calculates the average grade,
and determines how many grades are above and below the average.
*/

function calcAvgXY() {

  const grades  = [9, 7, 8.50, 6.50, 10];
  const total   = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;


  let x = 0;
  let y = 0;


  grades.forEach(grade => {
      if (grade > average) {
          x++;
      } else if (grade < average) {
          y++;
      }
  });


  const resultDiv     = document.getElementById("results");
  resultDiv.innerHTML = `
    <p><strong>The average grade is:     ${average.toFixed(1)}</strong></p>
    <p><strong>Grades above the average: ${x}</strong></p>
    <p><strong>Grades below the average: ${y}</strong></p>
  `;
}
