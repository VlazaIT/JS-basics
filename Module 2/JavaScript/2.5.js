'use strict'

// Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and stops its operation
// and then prints all the given numbers to the console in ascending order.

const list = [];
let number, repetition = false;

while (repetition == false) {
  number = parseInt(prompt('Enter a new number: '))
  if (list.includes(number)) {
    repetition = true
  }
  else {
    list.push(number)
  }
}

list.sort((a,b) => a-b);

for (let i=0; i< list.length; i++) {
  console.log(list[i])
}