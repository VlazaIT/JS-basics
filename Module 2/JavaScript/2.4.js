'use strict'

// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest.

const list = [];
let number = 1;

while (number != 0) {
  number = parseInt(prompt('Enter your number: '));
  list.push(number)
}

list.sort((a,b) => b-a);
for (let i=0; i < list.length; i++) {
  console.log(list[i])
}