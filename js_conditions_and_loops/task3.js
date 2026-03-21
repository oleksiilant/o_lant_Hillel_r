// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .
// Виберіть число для якого потрібно згенерувати таблицю множення.

//1. Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
console.log('')
console.log('=====================')
console.log('')
console.log('Варіант з for:')

const number1 = 8;
for (let i = 1; i < 11; i++) {
    let table1 = `${number1} * ${i} = ${number1*i}`
    console.log(table1);
}
console.log('')
console.log('=====================')
console.log('')

//2. Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.
console.log('Варіант з while:')

let number2 = 6;
let additn = 1;
while (number2 < 11 && additn < 11) {
    let sum = number2 * additn;
    console.log(`${number2} * ${additn} = ${sum}`); 
    additn++;
}

console.log('')
console.log('=====================')
console.log('')