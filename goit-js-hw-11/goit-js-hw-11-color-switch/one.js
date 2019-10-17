"use strict";

class Menu {
  constructor(arr) {
    this.max = arr.length - 1;
    this.min = 0;

    this.flag = false;
    this.elem = document.querySelector("body");
    this.elem.onclick = this.onClick.bind(this);
  }

  start() {
    if (this.flag) return;
    this.flag = true;
    this.color = setInterval(() => {
      this.elem.style.backgroundColor =
        colors[randomIntegerFromInterval(this.min, this.max)];
    }, 1000);
  }

  stop() {
    clearInterval(this.color);
    this.flag = false;
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action === "start") {
      this.start();
    } else if (action === "stop") {
      this.stop();
    }
  }
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
  ];

  new Menu(colors);