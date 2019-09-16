"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const fragment = document.createDocumentFragment();

ingredients.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  fragment.appendChild(li);
});

const list = document.getElementById("ingredients");
list.appendChild(fragment);
