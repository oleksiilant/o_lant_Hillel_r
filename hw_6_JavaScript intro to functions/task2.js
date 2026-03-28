// Завдання 2
// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

console.log('=============');
function DriverLicense(age) {
  if (age >= 18) {
    return 'Adult'; //treu
  } else {
    return 'Not Adult'; //false
  }
}
console.log(DriverLicense(25));
console.log(DriverLicense(15));
console.log('=============');


function accessAllowed(age) {
    return age >= 18 ? true : false
}
console.log(accessAllowed(25));
console.log(accessAllowed(17));
console.log('=============');
