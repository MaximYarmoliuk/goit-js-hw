"use strict";

import users from "/js/users.js";

const calculateTotalBalance = users =>
  users.map(user => user.balance).reduce((sum, value) => sum + value, 0);

console.log(calculateTotalBalance(users)); // 20916
