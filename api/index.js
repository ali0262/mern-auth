import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./db/connection.js";

dotenv.config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    const conn = await connectDB(process.env.MONGODB_URL);
    console.log(
      `successfully connected on DATABASE on ${conn.connection.host}`.bgCyan
    );

    app.listen(port, () => {
      console.log(`server is running on port : ${port}`.bgMagenta);
    });
  } catch (err) {
    console.log(`${err.message}`.bgRed);
  }
};

start();
