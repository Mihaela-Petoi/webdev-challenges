/*
✿ CHALLENGE 6: Rock Scissors Paper generator
Create a program that randomly generates one of the options of the rock-paper-scissors game
*/

function randomChoice() {

    const choices = ["Rock", "Paper", "Scissors"];
    const picker  = Math.floor(Math.random() * choices.length);
    return choices[picker];
  }