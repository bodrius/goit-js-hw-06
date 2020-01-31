import users from './users.js';
console.table(users);


const getUsersWithEyeColor = (users, color) => {
    return users.filter( users => color === users.eyeColor);
};
  
console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

