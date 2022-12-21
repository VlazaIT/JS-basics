'use strict';

// Open t4 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
//    Add the following HTML code to the element with id="target".
//    Add the values from 'students' array to the <option> elements in a for-loop.

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i=0; i<3; i++ ) {
  let student = document.createElement('option')
  student.innerHTML = students[i].name
  student.setAttribute('value', students[i].id)
  document.querySelector('#target').appendChild(student)
  console.log(student)
}






