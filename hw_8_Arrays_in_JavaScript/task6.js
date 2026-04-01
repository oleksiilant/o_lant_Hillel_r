// Завдання 6: Сортування масивів
// У вас є вихідний масив
//          сonst numbersList = [1,10,14,2,4,5,43,34]
// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль


// сonst numbersList = [1,10,14,2,4,5,43,34];
// let numbersList = numbersList2.sort;
// console.log(numbersList)

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const newNumbersList = [...numbersList];

newNumbersList.sort(function(a, b) {
    return a - b;
});

console.log("Initial massiv: ", numbersList);
console.log("Vidsortovanuy massive: ", newNumbersList);



