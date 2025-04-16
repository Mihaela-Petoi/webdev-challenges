/*
✿ CHALLENGE 9: Survival Game
Write a JavaScript program that simulates a survival challenge. The program should prompt the user to enter:

✿ The player's name
✿ The player's starting Hit Points (HP) (maximum 100)
✿ A hunting skill level (between 0 and 10)

The simulation will run for a set number of days. Each day, the player goes hunting to find food.

✿✿✿ Hunting Mechanics:
✿ The chance of a successful hunt is determined by the hunting skill.
    ✿ A hunting skill of 0 means 0% success (always fails).
    ✿ A hunting skill of 10 means 100% success (always succeeds).
    ✿ A hunting skill of X gives an X × 10% success rate.
✿ Use a simulated dice roll (a random number between 1 and 10) to determine the outcome:
    ✿ If the roll is less than or equal to the hunting skill, the hunt succeeds (+10 HP).
    ✿ Otherwise, the hunt fails (-10 HP).

✿✿✿ Logging Daily Events:
Use console.log() to display the events of each day. Example output:
```
    Day 4 starts!  
    John (Hunting Skill: 5) rolls a 8  
    John is starving... 💀  
    Current HP: 50  
```

If the player's HP reaches 0 or below, they die and the simulation ends early. Otherwise, the game continues until the final day.

✿✿✿✿✿  Good luck, survivor! 🚀 ✿✿✿✿✿
*/


function rollDice() {
  return Math.floor(Math.random() * 10) + 1;
}


function survivalChallenge() {
  const name  = prompt("Enter your name:");
  const hp    = parseInt(prompt("Starting HP (max 100):"));
  const skill = parseInt(prompt("Hunting skill (0-10):"));
  const days  = parseInt(prompt("How many days to survive?"));


  if (!name || isNaN(hp) || hp < 1 || hp > 100 || isNaN(skill) || skill < 0 || skill > 10 || isNaN(days) || days <= 0) {
    console.log(" Invalid input! ");
    return;
  }


  let currentHP = hp;
  console.log(`\n Welcome, ${name}! HP: ${hp} | Skill: ${skill} | Days: ${days}\n`);


  for (let day = 1; day <= days; day++) {
    console.log(`Day ${day} starts!`);


    const roll = rollDice();
    console.log(`${name} (Skill: ${skill}) rolls a ${roll}.`);


    if (roll <= skill) {
      currentHP += 10;
      console.log(` Successful hunt! +10 HP ✿✿ Current HP: ${currentHP}`);
    } else {
      currentHP -= 10;
      console.log(` Starving... -10 HP ✿✿ Current HP: ${currentHP}`);
    }


    if (currentHP <= 0) {
      console.log(`${name} died on Day ${day}. Final HP: 0`);
      return;
    }
  }


  console.log(` ${name} survived all ${days} days! Final HP: ${currentHP}`);
}

survivalChallenge();
