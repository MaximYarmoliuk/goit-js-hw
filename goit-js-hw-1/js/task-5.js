let nameCountry = prompt("Введите страну получения поссылки");
let price;

if (nameCountry === null) {
  alert("Отменено пользователем");
} else {
  switch (nameCountry.toLowerCase()) {
    case "китай":
      nameCountry = "Китай";
      price = 100;
      alert(`Доставка в ${nameCountry} будет стоить ${price} кредитов`);
      break;
    case "чили":
      nameCountry = "Чили";
      price = 250;
      alert(`Доставка в ${nameCountry} будет стоить ${price} кредитов`);
      break;
    case "австралия":
      nameCountry = "Австралию";
      price = 170;
      alert(`Доставка в ${nameCountry} будет стоить ${price} кредитов`);
      break;
    case "индия":
      nameCountry = "Индию";
      price = 80;
      alert(`Доставка в ${nameCountry} будет стоить ${price} кредитов`);
      break;
    case "ямайка":
      nameCountry = "Ямайку";
      price = 120;
      alert(`Доставка в ${nameCountry} будет стоить ${price} кредитов`);
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
