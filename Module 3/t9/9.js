'use strict'

// Open t9 folder in your IDE/editor. This is continuation to previous task. There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
// You can use the includes and split methods.
// eval() function is prohibited
// No need to support decimal numbers, calculating integers is enough.
// Example inputs: 3+5, 2-78, 3/6, etc..

let result = document.getElementById("result")
let calculation = document.getElementById("start")
calculation.addEventListener('click', function (e){
    e.preventDefault();
    let input = document.getElementById("calculation").value;
    let number1, number2, final, array;
    let addition = input.includes("+")
    if (addition === true) {
      array = input.split("+")
      number1 = parseInt(array[0]);
      number2 = parseInt(array[1]);
      final = number1 + number2
      result.innerText = `Result is ${final}`
    }
    let subtraction = input.includes("-");
    if (subtraction === true) {
      array = input.split("-")
      number1 = parseInt(array[0]);
      number2 = parseInt(array[1]);
      final = number1 - number2
      result.innerText = `Result is ${final}`
    }
    let multiplication = input.includes("*");
    if (multiplication === true) {
      array = input.split("*")
      number1 = parseInt(array[0]);
      number2 = parseInt(array[1]);
      final = number1 * number2
      result.innerText = `Result is ${final}`
    }
    let division = input.includes("/");
    if (division === true) {
      array = input.split("/")
      number1 = parseInt(array[0]);
      number2 = parseInt(array[1]);
      final = number1 / number2
      result.innerText = `Result is ${final}`
    }
})