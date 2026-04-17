// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function Todos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    console.log('todos', response);
    return todo;
  } catch (error) {
    console.log('todo error', error);
  }
}

async function Users() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log('users', response);
    return user;
  } catch (error) {
    console.log('user error', error);
  }
}

const allResult = Promise.all([Todos(), Users()]);
const raceResult = Promise.race([Todos(), Users()]);