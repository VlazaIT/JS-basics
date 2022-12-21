'use strict'

//Open t10 folder in your IDE/editor. Read the first name and last name values from the form and print them in the <p id="target"> (2p)
// remember to stop the default action of the form
// you can use attribute selectors in querySelector() to select the <input> elements
// example output: Your name is Luke Skywalker

const form = document.getElementById("source");
const first_name = document.querySelector('input[name=firstname]');
const last_name = document.querySelector('input[name=lastname]');
const text = document.querySelector('p');
form.addEventListener('submit', function (e){
    e.preventDefault();
    text.innerText = `Your name is ${first_name.value} ${last_name.value}`;
})