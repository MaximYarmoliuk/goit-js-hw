"use strict";

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    const number = i + 1;
    const user = array[i];
    console.log(`${number} - ${user}`);
  }
  return "";
};

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
