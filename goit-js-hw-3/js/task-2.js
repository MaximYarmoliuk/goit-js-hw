"use strict";

const countProps = function(a) {
  const entries = Object.entries(a);
  let quantity = 0;
  for (let entry of entries) {
    quantity += 1;
  }
  return quantity;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
