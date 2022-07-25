import supertest from "supertest";
import app from "./server";

const request = supertest(app);

test("GET /employees", async () => {
  const response = await request
    .get("/employees")
    .expect(200)
    .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual([
      {
        name: "Mario",
        lastName: "Rossi"
      },
      {
        name: "Giovanna",
        lastName: "Bianchi"
      },
    ]);
});