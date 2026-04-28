// import axios from "axios";

// test("Check status", async () => {
//   const response = await axios.delete(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   console.log(response.status);
//   console.log(response.data);

//   expect(response.status).toBe(200);
//   expect(response.data).toEqual({});
// });



// let response;

// beforeEach(() => {
//   response = { status: 200, value: "hello" };
// });

// test("Check status", () => {
//   expect(response.status).toBe(200);
// });



const axios = require("axios");

//import axios from "axios";

test("Check status", async () => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  console.log(response.status);
  console.log(response.data);

  expect(response.status).toBe(201);
});


const axios = require("axios");

test("Check status", async () => {
  const testTitle = "changed";

  const response = await axios.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  console.log(response.status);
  console.log(response.data);

  expect(response.status).toBe(200);
  expect(response.data).toEqual({});
});