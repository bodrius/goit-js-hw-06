import users from "./users.js";
console.table(users);

//Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
