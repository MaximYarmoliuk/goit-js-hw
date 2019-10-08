"use strict";

const input = document.getElementById("font-size-slider")

input.addEventListener("mousemove", function(e) {
    const element = e.currentTarget;
    const value = element.value;
    const text = document.getElementById("text");
    text.style.fontSize = value + "px";
})
