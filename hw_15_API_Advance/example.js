//import { test, expect } from "@jest/globals";
//import axios from "axios";
//const axios = require('axios');
// const {login, createAccount} = require("./login.js");
// const {username, password} = require("./fixtures/data/userData.json");
// //const {faker} = require('@faker-js/faker')



// axios.interceptors.response.use((response) => {
//   if (response.config.url === "https://jsonplaceholder.typicode.com/posts/1") {
//     response.data = { Hello: "Hello world" };
//   }
//   return response;
// });

// axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//   console.log(response.data);
// });


// const mockedAPI = axios.create();

// mockedAPI.interceptors.request.use((config) => {
//   if (config.url === "https://jsonplaceholder.typicode.com/posts/1") {
//     return Promise.reject({ Hello: "Hello world"});
//   }
//   return config;
// });

// mockedAPI
// .get("https://jsonplaceholder.typicode.com/posts/1")
// .catch((response) => {
//     console.log(response);
// });

// axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//     console.log(response);
// });




// test ("Check wrong url", async () => {
//     await createAccount(username, password).then((response) => {
//         console.log(response.status);
//         console.log(response.data);
//     }); 
// });