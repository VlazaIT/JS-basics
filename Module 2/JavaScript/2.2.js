'use strict'

// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order.

const participants = [];
let number_part = parseInt(prompt('Enter the desired number of participants: ')), new_name;

for (let i=0; i < number_part; i++) {
  new_name = prompt('Enter the new name: ');
  participants.push(new_name);
}
participants.sort()

let container = document.getElementById("container"), list;

for (let n = 0; n < participants.length; n++) {
  list = document.createElement("li");
  list.innerHTML = participants[n];
  container.appendChild(list);
}
