"use strict";

import users from "/js/users.js";

const getInactiveUsers = users => users.filter(user => user.isActive === false);

console.log(getInactiveUsers(users));
