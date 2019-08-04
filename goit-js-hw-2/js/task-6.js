"use strict";

function checkForSpam(str) {
  let result = 0;
  if (
    str.toLowerCase().includes("sale") ||
    str.toLowerCase().includes("spam")
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
