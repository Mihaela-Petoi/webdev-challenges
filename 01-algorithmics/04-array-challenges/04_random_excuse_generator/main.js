/*
✿ CHALLENGE 4: Random Excuse Generator
Write a program that generates a random excuse. The program should:
1. Randomly select an introductory phrase (e.g., "Sorry, but...").
2. Select a "perpetrator" (e.g., "my dog," "the weather," etc.).
3. Choose a "motivation" (e.g., "ate my homework," "made a mess," etc.).
4. Combine these parts to form a complete, random excuse.
*/


function generateExcuse() {
  
  const introductoryPhrases = [
    "Sorry, but...",
    "I can't believe it, but...",
    "I was planning to do it, but...",
    "This might sound crazy, but...",
  ];


  const perpetrators = [
    "my dog",
    "a drunken elf",
    "the pope",
    "your uncle on a skateboard",
    "Jesus and Buddha",
  ];


  const motivations = [
    "insisted on playing a game of chess",
    "broke my computer",
    "made a mess",
    "stole my charger",
    "forced me to play rock-paper-scissors for 3 hours",
  ];


  const i = Math.floor(Math.random() * introductoryPhrases.length);
  const p = Math.floor(Math.random() * perpetrators.length);
  const m = Math.floor(Math.random() * motivations.length);


  const excuse = `<p><strong>${introductoryPhrases[i]} ${perpetrators[p]} ${motivations[m]}.</strong></p>`;


  const resultsDiv       = document.getElementById("results");
  if (resultsDiv) {
    resultsDiv.innerHTML = excuse;
  }
}
