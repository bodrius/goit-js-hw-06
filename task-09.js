import users from "./users.js";
console.table(users);

// Массив имен (поле name) людей, отсортированных в зависимости от
// количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((userA, userB) => userA["friends"].length - userB["friends"].length)
    .map(user => user.name);
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
