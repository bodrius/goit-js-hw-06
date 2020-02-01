import users from "./users.js";
console.table(users);

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user["friends"].includes(friendName))
    .map(user => user.name);
};

console.table(getUsersWithFriend(users, "Briana Decker")); // ДРУЗЬЯ <--- ИМЕНА [ 'Sharlene Bush', 'Sheree Anthony' ]
console.table(getUsersWithFriend(users, "Goldie Gentry")); // ДРУЗЬЯ <--- ИМЕНА  [ 'Elma Head', 'Sheree Anthony' ]
