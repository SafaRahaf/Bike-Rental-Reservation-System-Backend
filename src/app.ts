import express, { Application, Request, Response } from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";
import router from "./routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const test = async (req: Request, res: Response) => {
  const a = "hallo Bike Rental Reservation System Backend App";
  res.send(a);
};

app.get("/", test);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
