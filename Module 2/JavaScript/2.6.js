'use strict'

// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters.
// Write a main program that rolls the dice until the result is 6.
// The main program should print out the result of each roll in an unordered list (<ul>).

const results = [];
let value=0;

function roll() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
  results.push(random);
  return random;
}

while (value < 6) {
  value = roll();
}

let container = document.getElementById("container"), list;

for (let n = 0; n < results.length; n++) {
  list = document.createElement("li");
  list.innerHTML = results[n];
  container.appendChild(list);
}
