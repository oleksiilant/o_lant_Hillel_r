//Завдання 4: Обчислення площі та об'єму
// 4.1
const radius = 5;
const Pi = Math.PI
const ploshaKola = Pi*(radius*radius);
console.log('Площа кола: ',ploshaKola.toFixed(2));

//4.2
let length = 3;
let width = 4;
let ploshPriamokytnika = length*width;
console.log('Площа прямокутника: ', ploshPriamokytnika.toFixed(2))

//4.3
//radius - змінна оголошена вище
let height = 7;
let obiemCylindra = Pi*(radius*radius)*height;
console.log("Об'єм циліндра: ", obiemCylindra.toFixed(2)); 
