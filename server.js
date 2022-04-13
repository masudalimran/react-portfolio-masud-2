// imports
import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import mongoose from "mongoose";
import adminRouter from "./routes/adminRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

// Initializations
const app = express();
const port = process.env.PORT || 3100;

// Middleware
app.use(cors());
app.use(express.json());

// Database
mongoose.connect(
  process.env.DB_CONNECTION || "mongodb://localhost:27017/masudPortfolio",
  () => {
    if (process.env.DB_CONNECTION) {
      console.log("Connected to MongoDB Database");
    } else {
      console.log("Connected to Local MongoDB Database");
    }
  },
  (err) => {
    console.err(err);
  }
);

// Routes
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/admin/", adminRouter);
app.use("/api/project/", projectRouter);

// Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
