import express from "express";
import "express-async-errors";
import "dotenv/config";
import {PrismaClient} from "@prisma/client";
import addFormats from "ajv-formats";
import {Validator, ValidationError} from "express-json-validator-middleware";
import {employeeCreSchema, EmployeeCreData} from "./employee";
import {ErrorRequestHandler} from "express";

const prisma = new PrismaClient();

const app = express();

const validator: Validator = new Validator({
  coerceTypes: true
});
addFormats(validator.ajv, ["date-time"])
  .addKeyword("kind")
  .addKeyword("modifier");

const validate = validator.validate;

app.use(express.json());

app.get("/employees", async (request, response) => {
  const employees = await prisma.employee.findMany();
  response.json(employees);
});

app.post("/addemployee", validate({body: employeeCreSchema}), async (request, response) => {
  const employeeData: EmployeeCreData = request.body;
  const employee = await prisma.employee.create({
    data: employeeData
  });
  response.status(201).json(employee);
});

const validationErrorMiddleware: ErrorRequestHandler = (error, request, response, next) => {
  if(error instanceof ValidationError) {
    response.status(422).send({
      errors: error.validationErrors
    });
    next();
  }
  else next(error);
};

app.use(validationErrorMiddleware);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost:${port}>`);
});

export default app;