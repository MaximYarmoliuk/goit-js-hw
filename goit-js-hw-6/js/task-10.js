"use strict";

import users from "/js/users.js";

const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((res, current) => {
      res.push(...current);
      return res;
    }, [])
    .sort()
    .filter((value, index, arr) => arr.indexOf(value) === index);

console.log(getSortedUniqueSkills(users));
