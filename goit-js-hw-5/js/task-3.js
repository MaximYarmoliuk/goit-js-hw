"use strict";

const Storage = function(items) {
  this.items = items;

  this.getItems = () => this.items;

  this.addItem = item => this.items.push(item);

  this.removeItem = function(item) {
    let idx = this.items.indexOf(item);
    if (idx !== -1) {
      return this.items.splice(idx, 1);
    }
    return this.items;
  };
};

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
