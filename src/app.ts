import express from "express";
import {validationErrorMiddleware} from "./middleware/employee";
import {initCorsMiddleware} from "./middleware/cors";
import employeesRoutes from "./routes/employees";

const app = express();
app.use(express.json());
app.use(initCorsMiddleware());
app.use("/employees", employeesRoutes);
app.use(validationErrorMiddleware);
export default app;