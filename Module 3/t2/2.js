'use strict'

// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
//    Add the following HTML code to the element with id="target"
//    Add class my-item to the second list item

const ul = document.querySelector('#target');

const li1 = document.createElement('li')
li1.innerText = 'First item';
const li2 = document.createElement('li');
li2.innerText = 'Second item';
const li3 = document.createElement('li');
li3.innerText = 'Third item';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
li2.setAttribute('class', 'my-item')

