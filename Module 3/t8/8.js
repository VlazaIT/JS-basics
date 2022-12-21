'use strict'

// Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
//    There are two input fields where user enters numbers.
//      Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
//    Use the value attribute of <option> elements to decide which operation the calculator needs to do.
//    Show the result in <p id="result"> when the button is clicked.

let result = document.getElementById("result")
let calculation = document.getElementById("start")
calculation.addEventListener('click', function (e){
    e.preventDefault();
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    if (operation === "add") {
      let addition = number1 + number2;
      result.innerText = `Result is ${addition}`
    }
    else if (operation === "sub"){
      let subtraction = number1 - number2;
      result.innerText = `Result is ${subtraction}`
    }
    else if (operation === "multi") {
      let multiplication = number1 * number2;
      result.innerText = `Result is ${multiplication}`
    }
    else {
      let division = number1 / number2;
      result.innerText = `Result is ${division}`
    }
})


