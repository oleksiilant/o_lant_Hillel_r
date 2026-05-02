// Замість того, щоб робити фактичні HTTP-запити, використовуйте Jest, 
// щоб налаштувати моки на реквести з Axios. 
// Напишіть тести, які імітують як успішні, так і невдалі HTTP-запити, 
// до замоканих ендпойнтів, і переконайтеся, що ваш код поводиться належним чином.

const axios = require('axios');
const mockedAPI = axios.create();

mockedAPI.interceptors.request.use((config) => {
  if (config.url === "https://jsonplaceholder.typicode.com/posts/1") {
    return Promise.reject({ Hello: "Hello world"});
  }
  return config;
});

mockedAPI
.get("https://jsonplaceholder.typicode.com/posts/1")
.catch((response) => {
    console.log(response);
});

axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    console.log(response);
});