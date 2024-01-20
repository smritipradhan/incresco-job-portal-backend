import app from "./app.js";
import { config } from "dotenv";
import mongoose from "mongoose";

config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE;

mongoose.connect(DB).then((con) => {
  console.log("Connected Succesfully !!");
});

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});
