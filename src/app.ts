import express, { Application, Request, Response } from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";
import router from "./routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());

app.use(
  cors()
  // {
  // origin: "*",
  // origin: process.env.FRONTEND_URL || "http://localhost:5173",
  // credentials: true,
  // }
);

app.use("/api", router);

const test = async (req: Request, res: Response) => {
  const title = "hallo Bike Rental Reservation System Backend App";
  res.send(title);
};

app.get("/", test);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
