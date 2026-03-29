// 1.Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// 2. Створіть ще дві функції які ви будете передавати у якості колбеків, 
// наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль.
// Наприклад handleEven буде виводити текст “number is even”, 
// a handleOdd буде виводити текст “number is odd”
// 3. Викличте функцію handleNum і передайте в якості аргументів довільне число 
// і дві функції які ви створили раніше

function handleNum(number, peredaneParne, peredaneNeParne) {
    if (number % 2 === 0) { 
        peredaneParne(number);
    } else {
        peredaneNeParne(number);
    }
}

function handleEven(num){
    console.log(`${num} number is even `);
    //return "number is even"
}
function handleOdd(num){
    console.log(`${num} number is odd `);
    //return "number is odd"
}

handleNum(1, handleEven, handleOdd);
handleNum(2, handleEven, handleOdd);
handleNum(3, handleEven, handleOdd);
handleNum(12, handleEven, handleOdd);
handleNum(25, handleEven, handleOdd);
handleNum(55, handleEven, handleOdd);
handleNum(64, handleEven, handleOdd);