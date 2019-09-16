"use strict";

const name = document.getElementById("categories");
const quantity = name.children.length;
console.log(`В списке ${quantity} категории.`);

const list = [...document.getElementsByClassName("item")];

list.forEach(num => {
  const titleText = num.firstElementChild.textContent;
  console.log(`Категория: ${titleText}`);
  const quantity = num.querySelectorAll("li").length;
  console.log(`Количество элементов: ${quantity}`);
});
