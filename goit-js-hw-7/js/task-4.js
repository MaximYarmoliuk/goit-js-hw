"use strict";

let clickCount = 0;

counter.addEventListener("click", function(e) {
  const element = e.target;
  const counterValue = document.getElementById("value");
  if (element.dataset.action === "decrement") {
    decrement();
  } else if (element.dataset.action === "increment") {
    increment();
  }
  counterValue.textContent = clickCount;
});

const increment = function() {
  clickCount += 1;
};

const decrement = function() {
  clickCount -= 1;
};
