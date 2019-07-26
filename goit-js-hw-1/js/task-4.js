const credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt("Сколько дроидов вы хотите купить?");
const totalPrice = Number(quantity) * pricePerDroid;
let remainder;

if (quantity === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  remainder = credits - totalPrice;
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${remainder} кредитов.`
  );
}
