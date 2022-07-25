import express from "express";
import "express-async-errors";
import "dotenv/config";

const app = express();

app.get("/employees", (request, response) => {
  console.log(request);
  response.json([
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

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost:${port}>`);
});

export default app;