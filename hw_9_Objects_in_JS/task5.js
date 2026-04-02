// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  { name: "Ім'я1", email: "email1@example.com", age: 25 },
  { name: "Ім'я2", email: "email2@example.com", age: 30 },
  { name: "Ім'я3", email: "email3@example.com", age: 35 }
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}