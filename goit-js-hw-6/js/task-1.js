"use strict";

import users from "../js/users.js";

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
