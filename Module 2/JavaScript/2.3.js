'use strict'

// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order.

const dogs = [];

for (let i=0; i<6; i++) {
  let name = prompt("Enter new dog's name: ");
  dogs.push(name)
}

dogs.sort()
dogs.reverse()

let container = document.getElementById("container"), list;

for (let n = 0; n < dogs.length; n++) {
  list = document.createElement("li");
  list.innerHTML = dogs[n];
  container.appendChild(list);
}

