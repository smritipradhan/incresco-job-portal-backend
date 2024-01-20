import express, { json } from "express";
import testRouter from "./routes/testRoute.js";
import { config } from "dotenv";
import cors from "cors";

config({ path: "./config.env" });

const app = express();

app.use(cors()); // For preventing CORS Error
app.use(json());

app.use("/api/v1", testRouter);

export default app;
