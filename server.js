import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();

//database Config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/ApLearn/", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`⚡️: Server is running at http://localhost:${port}`);
});
