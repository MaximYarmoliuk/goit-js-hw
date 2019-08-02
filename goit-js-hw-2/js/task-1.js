"use strict";

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

const firstEl = users.shift();
console.log(users);

const lastEl = users.pop();
console.log(users);

const newFirstEl = users.unshift("Lux");
console.log(users);

const newLastEl = users.push("Jay", "Kivi");
console.log(users);

const userToDelete = "Ajax";
const indexUserToDelete = users.indexOf(userToDelete);
const Delete = users.splice(indexUserToDelete, 1);
console.log(users);

const userToInsert = "Kong";
const userToInsertBefore = "Jay";
const indexUserToInsertBefore = users.indexOf(userToInsertBefore);
const Insert = users.splice(indexUserToInsertBefore, 0, userToInsert);
console.log(users);
