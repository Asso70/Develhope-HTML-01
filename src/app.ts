import express from "express";
import {validationErrorMiddleware} from "./middleware/employee";
import {initCorsMiddleware} from "./middleware/cors";
import employeesRoutes from "./routes/employees";
import {passport} from "./middleware/passport";
import authRoutes from "./routes/auth";
import { initSessionMiddleware } from "./middleware/session";

const app = express();
app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(initCorsMiddleware());
app.use("/employees", employeesRoutes);
app.use("/auth", authRoutes);
app.use(validationErrorMiddleware);
export default app;