import {Static, Type} from "@sinclair/typebox";
import {PrismaClient} from "@prisma/client";
import addFormats from "ajv-formats";
import {Validator, ValidationError} from "express-json-validator-middleware";
import {ErrorRequestHandler} from "express";

enum Category {
  TECHNICIAN = "TECHNICIAN",
  ACCOUNTANT = "ACCOUNTANT",
  MANAGER = "MANAGER"
}

export const employeeCreSchema = Type.Object({
  name: Type.String(),
  lastName: Type.String(),
  category: Type.Optional(Type.Enum(Category)),
  salary: Type.Optional(Type.Integer()),
  hiredOn: Type.Optional(Type.String({ format: "date-time" })),
  photoFilename: Type.Optional(Type.String()),
  createdBy: Type.Optional(Type.String())
  }, {additionalProperties: false});

export type EmployeeCreData = Static<typeof employeeCreSchema>;

export const employeeUpdSchema = Type.Object({
  name: Type.Optional(Type.String()),
  lastName: Type.Optional(Type.String()),
  category: Type.Optional(Type.Enum(Category)),
  salary: Type.Optional(Type.Integer()),
  hiredOn: Type.Optional(Type.String({ format: "date-time" })),
  photoFilename: Type.Optional(Type.String()),
  updatedAt: Type.Optional(Type.String({ format: "date-time" })),
  updatedBy: Type.Optional(Type.String())
}, {additionalProperties: false});

export type EmployeeUpdData = Static<typeof employeeUpdSchema>;

const prisma = new PrismaClient();

const validator: Validator = new Validator({
  coerceTypes: true
});
addFormats(validator.ajv, ["date-time"])
  .addKeyword("kind")
  .addKeyword("modifier");

export const validationErrorMiddleware: ErrorRequestHandler = (error, request, response, next) => {
  if(error instanceof ValidationError) {
    response.status(422).send({
      errors: error.validationErrors
    });
    next();
  }
  else next(error);
};

export const validate = validator.validate;