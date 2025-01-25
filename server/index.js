import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./routes/User.js";
import ProductRoutes from "./routes/Products.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: "true" }));

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong.";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello ASHUTOSH ",
  });
});

app.use("/api/user/", UserRouter);
app.use("/api/products/", ProductRoutes);

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MONGODB"))
    .catch((err) => {
      console.log("Failed to connect to MONGO DB");
      console.log(err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => {
      console.log("Server Started!!");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
