import express from "express";
import "express-async-errors";
import "dotenv/config";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.get("/employees", async (request, response) => {
  const employees = await prisma.employee.findMany();
  response.json(employees);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost:${port}>`);
});

export default app;