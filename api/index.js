import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
// !===================================================================\\
import connectDB from "./db/connection.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ message: "This Route Not Found in This Server!..." });
});
app.use(errorHandler);

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
