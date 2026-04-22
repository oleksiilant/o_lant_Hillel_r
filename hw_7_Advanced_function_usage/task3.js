// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає
// як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок,
// коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally,
// виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

//  function divide(numerator, denominator) {
//     //let ddd = numerator && denominator
//     //let result = numerator || denominator;
//     if (numerator / 1 != numerator || denominator / 1 != denominator) {

//     }

//     if (denominator == 0) {
//         return "Помилка: ділити на 0 не можна";
//     }

//     return numerator / denominator;
// }

//divide(4,5);
//divide(0,'hello')

function divide(numerator, denominator) {
  if (numerator / 1 != numerator || denominator / 1 != denominator) {
    return "Помилка: потрібно ввести числа";
  }
  if (denominator == 0) {
    return "Помилка: ділити на 0 не можна";
  }
  return numerator / denominator;
}
console.log("====================");
try {
  console.log(divide(10, 2));
} catch {
  console.log("Сталася помилка");
} finally {
  console.log("Робота завершена");
}
console.log("====================");
try {
  console.log(divide(8, 0));
} catch {
  console.log("Сталася помилка");
} finally {
  console.log("Робота завершена");
}
console.log("====================");

try {
  console.log(divide("hello", 4));
} catch {
  console.log("Сталася помилка");
} finally {
  console.log("Робота завершена");
}
console.log("====================");

try {
  console.log(divide(20, 2));
} catch {
  console.log("Сталася помилка");
} finally {
  console.log("Робота завершена");
}
console.log("====================");
