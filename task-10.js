import users from "./users.js";
console.table(users);

// // Получить массив всех умений всех пользователей (поле skills), при этом не
// // должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  let checkSkills = users.reduce((acc,  {skills} ) => [...acc, ...skills], []);
  checkSkills = checkSkills.sort();
  return [...new Set(checkSkills)];
};
console.table(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
