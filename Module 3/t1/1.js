'use strict'

// Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
//    Add the following HTML code to the element with id="target"

const ul = document.querySelector('#target');
const html =
    `<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`;
ul.innerHTML = html;
ul.setAttribute('class', 'my-list');
