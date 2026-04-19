// function letsGoHome(cbFunction) {
//   console.log('Call a taxi');
//   console.log('On the road...');
//   cbFunction();
// }

// function callback() {
//   console.log('We are at home!');
// }

// letsGoHome(callback);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function letsGoHome(cbFunction) {
//   console.log('Call a taxi');
//   console.log('On the road...');

//   setTimeout(() => {
//     cbFunction();
//   }, 15000);
// }

// function callback() {
//   console.log('We are at home!');
// }

// letsGoHome(callback);

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function saySmth(phrase, name) {
//   console.log(`${phrase} ${name}!`);
// }

// setTimeout(saySmth, 1000, 'Hello', 'John');


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function saySmth(phrase, name) {
//   console.log(`${phrase} ${name}!`);
// }

// const intervalId = setInterval(saySmth, 1000, 'Hello', 'John');

// clearInterval(intervalId);

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const menu = {
//   americano: [
//     { item: '🍔', time: 3000 },
//     { item: '🍟', time: 1500 },
//     { item: '🥤', time: 500 },
//   ],
//   italiano: [
//     { item: '🍕', time: 1500 },
//     { item: '🥗', time: 1500 },
//     { item: '🍷', time: 500 },
//   ],
//   breakfast: [
//     { item: '🥪', time: 1000 },
//     { item: '🍳', time: 2500 },
//     { item: '☕', time: 1000 },
//   ],
// };

// const order = (dishes, onComplete) => {
//   console.log(`Start cooking order ...`);
//   const orderResult = [];

//   const getResultData = (dish, index) => {
//     orderResult[index] = dish;
//     if (orderResult.filter(Boolean).length === dishes.length) onComplete(orderResult);
//   };

//   const cookFood = ({ item, time }, index, onDishComplete) => {
//     // const condition = +Math.random().toFixed();
//     const condition = 1;

//     setTimeout(() => {
//       const dish = condition ? { status: 'fulfilled', value: item } : { status: 'rejected', reason: `${item} failed` };
//       onDishComplete(dish, index);
//     }, time);
//   };

//   dishes.forEach((item, index) => cookFood(item, index, getResultData));
// };

// order(menu.americano, console.log);

////////////////////////////////////////////////////////////////////////////////////////////////////////////




// new Promise((_, reject) => reject(new Error('My error')))
//   .catch(() => 'default value')
//   .then(console.log);


// new Promise(resolve => resolve('fulfilled'))
//   .then(result => {
//     console.log(`then ${result}`);
//   })
//   .catch(error => {
//     console.log(`catch ${error}`);
//   })
//   .finally(() => {
//     console.log('finally');
//   })

////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(1); // синхронний

setTimeout(() => console.log(2)); // макрозадфча (черга макрозадач)

Promise.resolve().then(() => console.log(3)); // мікрозадача (черга мікрозадач)

Promise.resolve().then(() => setTimeout(() => console.log(4))); // мікрозадача (черга мікрозадач) -> макрозадача (черга макрозадач)

Promise.resolve().then(() => console.log(5));// мікрозадача (черга мікрозадач)

setTimeout(() => console.log(6));// макрозадфча (черга макрозадач)

console.log(7); // синхронний


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function fetchData() {
//   const response = await fetch('https://swapi.dev/api/people/1/');
//   const data = await response.json();
//   return data;
// }