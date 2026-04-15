// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))  

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(json => console.log(json));

// const fetchUsers = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(json => console.log(json));
// };

function Todos() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.log('todo error', error);
    });
}


function Users() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.log('user error', error);
    });
}

const allResult = Promise.all([Todos(), Users()]);
const raceResult = Promise.race([Todos(), Users()]);





allResult.then(function(result) {console.log('allResult:', result)});
raceResult.then(function(result) {console.log('raceResult:', result)});
