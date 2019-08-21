"use strict";

class Car {
  static getSpecs(car) {
    return console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${
        car.isOn
      }, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor({ maxSpeed = 0, price = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }

  accelerate(value) {
    if (value <= this.maxSpeed) {
      return (this.speed = value);
    }
  }

  decelerate(value) {
    if (value >= 0) {
      return (this.speed = value);
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      return (this.distance += hours * this.speed);
    }
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
