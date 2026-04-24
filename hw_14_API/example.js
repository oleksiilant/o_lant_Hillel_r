import axios from "axios";

test("Check status", async () => {
  const response = await axios.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  console.log(response.status);
  console.log(response.data);

  expect(response.status).toBe(200);
  expect(response.data).toEqual({});
});
