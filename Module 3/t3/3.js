'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.querySelector('ul')

for (let i=0; i < names.length; i++) {
  let li = document.createElement('li')
  li.innerHTML = names[i]
  document.querySelector('#target').appendChild(li)
}