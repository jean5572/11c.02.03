"use strict";
window.addEventListener("DOMContentLoaded", startCounter);

let arr = [];
let counter = 0;

function startCounter() {
  arr.unshift(counter);
  counter++;
  if (counter > 9) {
    arr.pop(arr);
  }
  setTimeout(startCounter, 1000);

  console.log(arr);
}
