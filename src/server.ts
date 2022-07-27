import express from "express";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import {PrismaClient} from "@prisma/client";
import addFormats from "ajv-formats";
import {Validator, ValidationError} from "express-json-validator-middleware";
import {employeeCreSchema, EmployeeCreData, employeeUpdSchema, EmployeeUpdData} from "./employee";
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

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

app.get("/employees", async (request, response) => {
  const employees = await prisma.employee.findMany();
  response.json(employees);
});

app.get("/employees/:id(\\d+)", async (request, response, next) => {
  console.log(request);
  const employeeId: number = Number(request.params.id);
  const employee = await prisma.employee.findUnique({
    where: {id: employeeId}
  });
  if(!employee) {
    response.status(404);
    return next(`Cannot GET /employees/${employeeId}`);
  }
  response.json(employee);
});

app.post("/addemployee", validate({body: employeeCreSchema}), async (request, response) => {
  const employeeData: EmployeeCreData = request.body;
  const employee = await prisma.employee.create({
    data: employeeData
  });
  response.status(201).json(employee);
});

app.put("/employees/:id(\\d+)", validate({body: employeeUpdSchema}), async (request, response, next) => {
  const employeeId: number = Number(request.params.id);
  const employeeData: EmployeeUpdData = request.body;
  employeeData.updatedAt = new Date().toJSON();
  try {
    const employee = await prisma.employee.update({
      where: {id: employeeId},
      data: employeeData
    });
    response.status(200).json(employee);
  }
  catch(error) {
    response.status(404);
    next(`Cannot PUT /employees/${employeeId}`);
  }
});

app.delete("/employees/:id(\\d+)", async (request, response, next) => {
  const employeeId: number = Number(request.params.id);
  try {
    const planet = await prisma.employee.delete({
      where: {id: employeeId},
     });
    response.status(204).end();
  }
  catch(error) {
    response.status(404);
    next(`Cannot DELETE /employees/${employeeId}`);
  }
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