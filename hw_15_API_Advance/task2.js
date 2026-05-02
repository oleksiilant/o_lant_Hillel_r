import { test, expect } from "@jest/globals";
// Створіть функцію за допомогою Axios, щоб зробити запит, який містить кастомні хедери
// та параметри URL-адреси. Напишіть тест Jest, щоб переконатися,
// що заголовки та параметри правильно включені в запит.

const axios = require("axios");

async function customHeadersParams() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const headers = {
    "X-Custom-Header": "my-header-value",
    Authorization: "Bearer test-token",
  };

  const params = {
    userId: 1,
    _limit: 5,
  };

  const response = await axios.get(url, { headers: headers, params: params });
  //console.log(response.data);
  return response;
}

test("Check custom headers and URL parameters", async () => {
  const response = await customHeadersParams();

  console.log("Status:", response.status);
  console.log("Config headers:", response.config.headers);
  console.log("Config params:", response.config.params);

  expect(response.status).toBe(200);
  expect(response.config.headers["X-Custom-Header"]).toBe("my-header-value");
  expect(response.config.headers["Authorization"]).toBe("Bearer test-token");
  expect(response.config.params.userId).toBe(1);
  expect(response.config.params._limit).toBe(5);
});
