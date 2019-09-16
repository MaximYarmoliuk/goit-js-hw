"use strict";

const input = document.getElementById("name-input");
const outputGreeting = document.getElementById("name-output");
input.value = "";

input.addEventListener("keyup", function(e) {
  const element = e.currentTarget;
  if (element.value.length != 0) {
    outputGreeting.textContent = element.value;
  } else outputGreeting.textContent = "незнакомец";
});
