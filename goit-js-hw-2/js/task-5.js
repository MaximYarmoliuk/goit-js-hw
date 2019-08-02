"use strict";

function formatString(str) {
  if (str.length <= 40) {
    return str;
  } else {
    str = str.substr(0, 40);
    return `${str}...`;
  }
}
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
