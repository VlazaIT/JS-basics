'use strict'

// Write a function called concat(), which receives an array of strings as a parameter.
// The function returns a string formed by concatenating the elements of the array. (2p)
//    Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
//    Do not use array.join() function
//    You can hardcode the array, no need for prompt().
//    Print the result to HTML document.

function concat() {
  let result = '';
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result
}
const list = ['Player1', 'Player2', 'Player3', 'Someone'];
document.querySelector('#target0').innerHTML = 'Original list: ' + list
document.querySelector('#target1').innerHTML = 'New list: ' + concat(list)



