/*
✿ CHALLENGE 3: Greatest Daily Temperature Difference
Write a program that reads the daily high and nightly low temperatures for a week
and determines the day with the greatest temperature difference.
*/

/* 
p = The greatest difference between daily high and nightly low
q = Day with the maximum temperature difference
*/


function tempDiff() {

    let dailyHighs  = [12.5, 15.0, 9.8, 18.2, 20.1, 14.6, 11.3];
    let nightlyLows = [5.2, 8.1, 2.5, 10.6, 12.3, 6.7, 3.9]    ;


    let p = 0;
    let q = 0;

    
    for (let i = 0; i < dailyHighs.length; i++) {
        let diff = dailyHighs[i] - nightlyLows[i];
        if (diff > p) {
            p = diff;
            q = i + 1;
        }
    }

    let resultDiv       = document.getElementById("results");
    resultDiv.innerHTML = "Maximum temperature difference: <strong>" + p.toFixed(1) + "°C</strong> on Day <strong>" + q + "</strong>";
}