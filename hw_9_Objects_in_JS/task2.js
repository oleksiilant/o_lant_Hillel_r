// Завдання 2
// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: рядок, представляє ім'я власника автомобіля
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
  title: "\t 1984(Nineteen Eighty-Four)",
  author: "\t George Orwell ",
  year: "1949"
};
// console.log(book.title);
// console.log(book.author);
const { title, author } = book;
console.log(title);
console.log(author);