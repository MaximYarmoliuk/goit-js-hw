"use strict";

const input = document.getElementById("validation-input");
input.value = "";

input.addEventListener("blur", function(e) {
  const element = e.currentTarget;
  if (element.value.length == element.dataset.length) {
    element.className = "valid";
  } else element.className = "invalid";
});
