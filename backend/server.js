import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import deviceInfoRoute from "./routes/deviceInfoRoute.js";
import Internship from "./models/internship.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// const dbUrl = process.env.MONGODB_URI;
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR"));
db.once("open", () => {
  console.log("DATABASE CONNECTED");
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use(paymentRoutes);
app.use(deviceInfoRoute);

app.get("/getKey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

app.get("/getInternships", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).send(internships);
  } catch (error) {
    console.error(error);
    res.status(500).send({message: "Internal server error"});
  }
});

app.get("/", (req, res) => {
  res.json({message: "Hello World"});
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
