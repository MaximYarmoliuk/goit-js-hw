"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  let result = 0;
  if (login.length >= 4 && login.length <= 16) {
    result = true;
  } else result = false;
  return result;
};

const isLoginUnique = function(logins, login) {
  let result = 0;
  if (logins.includes(login)) {
    result = false;
  } else result = true;
  return result;
};

const addLogin = function(logins, login) {
  let result = 0;
  if (isLoginValid(login) === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  } else if (isLoginUnique(logins, login) === false) {
    console.log("Такой логин уже используется!");
    return;
  } else {
    logins.push(login);
    result = console.log("Логин успешно добавлен!");
  }
  return result;
};

addLogin(logins, "Ajax");
addLogin(logins, "robotGoogles");
addLogin(logins, "Zod");
addLogin(logins, "jqueryisextremelyfast");
