import express from "express";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import {PrismaClient} from "@prisma/client";
import addFormats from "ajv-formats";
import {Validator, ValidationError} from "express-json-validator-middleware";
import {employeeCreSchema, EmployeeCreData, employeeUpdSchema, EmployeeUpdData} from "./employee";
import {ErrorRequestHandler} from "express";
import multer from "multer";
import mime from "mime";
import {randomUUID} from "node:crypto";

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

const generatePhotoFilename = (mimeType: string) => {
  const randomFilename = `${randomUUID()}-${Date.now()}`;
  const fileExtension = mime.getExtension(mimeType);
  const fileName = `${randomFilename}.${fileExtension}`;
  return fileName;
}

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (request, file, callback) => {
    return callback(null, generatePhotoFilename(file.mimetype));
  }
});

const MAX_SIZE_IN_MEGABYTES: number = 6 * 1024 * 1024;
const VALID_MIME_TYPES: string[] = ["image/png", "image/jpeg"];
const fileFilter: multer.Options["fileFilter"] = (request, file, callback) => {
  if(VALID_MIME_TYPES.includes(file.mimetype)) callback(null, true);
  else callback(new Error("Error: The uploaded file must be a JPG or a PNG image"));
};
const multerOptions = {
  fileFilter,
  limits: {
    fileSize: MAX_SIZE_IN_MEGABYTES
  }
};

const upload = multer({storage, ...multerOptions});

app.post("/employees/:id(\\d+)/photo", upload.single("photo"), async (request, response, next) => {
  if(!request.file) {
    response.status(400);
    return next("No photo file uploaded");
  }
  const photoFilename = request.file.filename;
  response.status(201).json({photoFilename});
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