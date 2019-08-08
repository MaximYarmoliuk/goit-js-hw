"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

console.log(user.name);

user.mood = "happy";
user.hobby = "javascript";
user.premium = false;

const keys = Object.keys(user);
console.log(keys);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
