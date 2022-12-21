'use strict';

// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
// Print the result to the console.
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

const numbers = [];
let number;

for (let i=0; i < 5; i++) {
  number = parseInt(prompt('Enter a new number: '));
  numbers.push(number);
}

console.log(numbers);
for (let n = 4; n >= 0; n--) {
  console.log(`Number ${n+1}: ${numbers[n]}`);
}

