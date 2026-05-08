import { test, expect } from "@jest/globals";
// Напишіть функцію за допомогою Axios, яка навмисно надсилає запит на неправильну URL-адресу,
// викликаючи помилку. Потім за допомогою Jest напишіть тест, який перевіряє,
// чи правильно обробляється помилка та чи повертається належне повідомлення про помилку.

// //import axios from "axios";

// // test('check wrong url'), () => {
// // axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
// //     console.log(response);
// // });
// // };

// Test("check wrong url", async () => {
//     let response;
//     try {
//         response = await axios.get("https://jsonplaceholder.typicode.com/post1s/1");
//         console.log(response);
//     } catch {
//         console.log(response);
//     }
//     console.log(response);

// });

import axios from "axios";

const wrongURL = "https://jsonplaceholder.typicode.com/postQWER/1";
async function wrongUrl() {
  try {
    const response = await axios.get(wrongURL);
    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
      status: error.response?.status ?? null,
    };
  }
}

test("wrongUrl повертає об'єкт помилки при неправильній URL-адресі", async () => {
  const result = await wrongUrl();

  expect(result.error).toBe(true);
  expect(typeof result.message).toBe("string");
  expect(result.message.length).toBeGreaterThan(0);
  expect(result.status).toBe(404);
});
