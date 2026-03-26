// Завдання 1
// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// function declaration
console.log("\n=============================\n");
function ploshaPriamokutnykaFD(width, height) {
  const sum = width * height;
  return sum;
}
console.log(
  "\t Function Declaration \n\tPloshaPriamokutnyka: ",
  ploshaPriamokutnykaFD(5, 10),
);
console.log("\n=============================\n");

//function expression
const ploshaPriamokutnykaFE = function (width, height) {
  return width * height;
};
console.log(
  "\t Function Expression \n\tPloshaPriamokutnyka: ",
  ploshaPriamokutnykaFE(3, 4),
);
console.log("\n=============================\n");

//arrow function
const ploshaPriamokutnykaAF = (width, height) => {
  return width * height;
};
console.log(
  "\t Arrow Function \n\tPloshaPriamokutnyka: ",
  ploshaPriamokutnykaAF(7, 7),
);
console.log("\n=============================\n");
