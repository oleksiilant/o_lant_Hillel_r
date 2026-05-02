// Створити тестовий сценарій за допомогою пекеджу axios.
// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.
// Задача:
// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ


const axios = require("axios");

test("Get all posts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //console.log(response.status);
  //console.log(response.data[0]);

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBe(100);
  expect(response.data[0]).toHaveProperty("userId");
  expect(response.data[0]).toHaveProperty("id");
  expect(response.data[0]).toHaveProperty("title");
  expect(response.data[0]).toHaveProperty("body");
});

test("Get one post by id", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  //console.log(response.status);
  //console.log(response.data);

  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
  expect(response.data.userId).toBe(1);
  expect(response.data.title).toBeTruthy();
  expect(response.data.body).toBeTruthy();
});

test("Get comments for post", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  //console.log(response.status);
  //console.log(response.data[0]);

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBe(5);
  expect(response.data[0].postId).toBe(1);
  expect(response.data[0]).toHaveProperty("id");
  expect(response.data[0]).toHaveProperty("name");
  expect(response.data[0]).toHaveProperty("email");
  expect(response.data[0]).toHaveProperty("body");
});

test("Create new post", async () => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: "My first post",
      body: "This is test body",
      userId: 1
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  );

  //console.log(response.status);
  //console.log(response.data);

  expect(response.status).toBe(201);
  expect(response.data.title).toBe("My first post");
  expect(response.data.body).toBe("This is test body");
  expect(response.data.userId).toBe(1);
  expect(response.data.id).toBe(101);
});

test("Create new comment", async () => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/comments",
    {
      postId: 1,
      name: "Test user",
      email: "testuser@email.com",
      body: "My comment for test"
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  );

  //console.log(response.status);
  //console.log(response.data);

  expect(response.status).toBe(201);
  expect(response.data.postId).toBe(1);
  expect(response.data.name).toBe("Test user");
  expect(response.data.email).toBe("testuser@email.com");
  expect(response.data.body).toBe("My comment for test");
  expect(response.data.id).toBe(501);
});