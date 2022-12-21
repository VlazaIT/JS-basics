'use strict'

// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues
//  until the program gets the maximum number on the dice, which is asked from the user at the beginning.

const results = [];
let value=0, dice_sides;

function roll() {
  let random = Math.floor(Math.random() * dice_sides) + 1;
  console.log(random);
  results.push(random);
  return random;
}

dice_sides = parseInt(prompt('Enter the desired number of sides on the dice: '))

while (value < dice_sides) {
  value = roll();
}

let container = document.getElementById("container"), list;

for (let n = 0; n < results.length; n++) {
  list = document.createElement("li");
  list.innerHTML = results[n];
  container.appendChild(list);
}