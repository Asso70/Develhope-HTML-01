import express, {Router} from "express";
import "express-async-errors";
import "dotenv/config";
import {PrismaClient} from "@prisma/client";
import {employeeCreSchema, EmployeeCreData, employeeUpdSchema, EmployeeUpdData, validate} from "../middleware/employee";
import { initMulterMiddleware } from "../middleware/multer";

const prisma = new PrismaClient();
const router: Router = Router();
const upload = initMulterMiddleware();

const corsOptions = {
  origin: "http://localhost:8080",
};

// GET /planets -- Retreive all planets
router.get("/", async (request, response) => {
  const employees = await prisma.employee.findMany();
  response.json(employees);
});

router.get("/:id(\\d+)", async (request, response, next) => {
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

router.post("/", validate({body: employeeCreSchema}), async (request, response) => {
  const employeeData: EmployeeCreData = request.body;
  const employee = await prisma.employee.create({
    data: employeeData
  });
  response.status(201).json(employee);
});

router.put("/:id(\\d+)", validate({body: employeeUpdSchema}), async (request, response, next) => {
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

router.delete("/:id(\\d+)", async (request, response, next) => {
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

router.post("/:id(\\d+)/photo", upload.single("photo"), async (request, response, next) => {
  if(!request.file) {
    response.status(400);
    return next("No photo file uploaded");
  }
  const photoFilename = request.file.filename;
  response.status(201).json({photoFilename});
});

router.use("/photos", express.static("uploads"));

export default router;