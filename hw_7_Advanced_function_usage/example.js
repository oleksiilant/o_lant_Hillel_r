// function add(a, b, callback) {
//     return callback(a, b)
// }
// console.log(add(2, 3, (a, b)=>{return a + b}))

// ////////////////////////////////////////////////////////////////////////////////////

// const sumFn = (a, b) => {
//     return a + b;
// }
// const addedSum = add(2, 3, sumFn);
// console.log(addedSum);


// ////////////////////////////////////////////////////////////////////////////////////



// function test(testName, testLogic) {
//     console.log(`${testName} is Running!`); 
//     testLogic(); 
// }

// test("Header test", () => {
//     console.log("Navigation to the page"); 
//     console.log("Clicking header");
// });


// ////////////////////////////////////////////////////////////////////////////////////


// function test(testName, testLogic) {
//     console.log(`${testName} is Runnig!`);
//     console.log(testLogic());
// }

// function myTestLogic() {
//     console.log(`Card test started`);
//     let testResult = Math.random() > 0.5;
//     return testResult;
// }

// test("Card test", myTestLogic);


// ////////////////////////////////////////////////////////////////////////////////////

// function test(testName, testLogic) {
//   console.log(testName);
//   console.log(testLogic);
// }
//  test("card test");

// ////////////////////////////////////////////////////////////////////////////////////
// const test = (testData, testSteps) => {
//   console.log(`test started with ${testData}`); // test started with some data - якщо testData = "some data"
//   testSteps(testData);
// };

// function getData() {
//   return "some data";
// }

// const logic = function myTestSteps(dataForSteps) {
//   console.log('Executing test with data', dataForSteps)
// };

// //logic(getData())
// //getData();
// test(getData(), logic);


// ////////////////////////////////////////////////////////////////////////////////////

// function greetUser(name, callback) {
//   console.log(`User name is ${name}`)
//   callback(name);
// }

// function showMessage(userName) {
//   console.log(`Hello ${userName}`)
// }

// greetUser("Ivan", showMessage);

// ////////////////////////////////////////////////////////////////////////////////////

// function checkNumber(num, evenCallback, oddCallback){
// if (num % 2 === 0) {
//     evenCallback(num);
// } else {
//     oddCallback(num);
// }
// }

// function showEvenMessage(number) {
//     console.log(`${number} is even `);
// }
// function showOddMessage(number){
//     console.log(`${number} is odd`);
// }

// checkNumber(2, showEvenMessage, showOddMessage)
// checkNumber(1, showEvenMessage, showOddMessage)


// ////////////////////////////////////////////////////////////////////////////////////

// function checkAge(age, adultCallback, childCallback) {
//   if (age >= 18) {
//   return adultCallback(age);
// } else {
//   return childCallback(age);
// }
// }

// function showAdultMessage(age) {
//   return 'User is adult'

// }

// function showChildMessage(age) {
//     return "User is child"

// }

// console.log(checkAge(20, showAdultMessage, showChildMessage));
// console.log(checkAge(12, showAdultMessage, showChildMessage));

function firsFunc() {
    let firstFunctionValue = 1;
    return function secondFunction(){
        return firstFunctionValue++
    }
}
const secondFuncAsConst = firsFunc();
//console.log(firsFunc()()); // - два рази
console.log(secondFuncAsConst()); 
console.log(secondFuncAsConst()); 
console.log(secondFuncAsConst()); 
console.log(secondFuncAsConst());
console.log(secondFuncAsConst());
console.log(secondFuncAsConst());
