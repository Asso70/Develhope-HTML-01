import {Static, Type} from "@sinclair/typebox";

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
}, {additionalProperties: false});

export type EmployeeCreData = Static<typeof employeeCreSchema>;

export const employeeUpdSchema = Type.Object({
  name: Type.Optional(Type.String()),
  lastName: Type.Optional(Type.String()),
  category: Type.Optional(Type.Enum(Category)),
  salary: Type.Optional(Type.Integer()),
  hiredOn: Type.Optional(Type.String({ format: "date-time" })),
  photoFilename: Type.Optional(Type.String()),
  updatedAt: Type.String({ format: "date-time" })
}, {additionalProperties: false});

export type EmployeeUpdData = Static<typeof employeeUpdSchema>;