import users from "./users.js";
console.table(users);

// // Получить массив всех умений всех пользователей (поле skills), при этом не
// // должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  return users
  .reduce((acc, item) => {
    acc.push(...item.skills);
    return acc.sort()
    
  }, []);
};
console.table(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
