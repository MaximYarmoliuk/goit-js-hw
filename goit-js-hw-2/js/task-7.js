"use strict";

const numbers = [];
let total = 0;
let input;

do {
  input = prompt("Input a number");
  if (isNaN(input)) {
    input = alert("Was input not a number, please try again");
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);

for (const number of numbers) {
  if (isNaN(number) === false) {
    total += Number(number);
  }
}

console.log(total);
