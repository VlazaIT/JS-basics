'use strict'

// Write a function called even(), which receives an array containing numbers as a parameter.
// The function returns a second (usually smaller) array which has the even numbers of the original array.
// The function must not make changes to the original table.
//    Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
//    Print both the original array and the new array to the console in the main program after you have called the function.
//    You can hardcode the array, no need for prompt().

function even() {
  const even_list = [];
  for (let i=0; i < list.length; i++) {
    if (list[i] % 2 === 0)
      even_list.push(list[i]);
  }
  return even_list
}

const list = [9,22,-10,0,432,-5,29];
console.log(list)
console.log(even(list))


