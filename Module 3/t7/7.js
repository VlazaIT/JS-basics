'use strict'

// Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
// when user mouses over <p id="trigger"> change the picture of <img id="target"> from picA.jpg to picB.jpg
// when user mouses off, change the picture back to original

let hover = document.querySelector('#trigger');
let image_change = document.querySelector('#target');

function change(){
  image_change.src = "img/picB.jpg";
}
hover.addEventListener("mouseover", change);

function change_back(){
  image_change.src = "img/picA.jpg";
}

hover.addEventListener("mouseout", change_back);