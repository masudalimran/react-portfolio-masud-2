// imports
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import {} from "dotenv/config";
import mongoose from "mongoose";
import adminRouter from "./routes/adminRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import multerRouter from "./routes/multerRoutes.js";
import categoryRouter from "./routes/CategoryRoutes.js";

// Initializations
const app = express();
const port = process.env.PORT || 3100;

// manage filename & dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Uploads folder setup
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

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
app.use("/api/multer/", multerRouter);
app.use("/api/category/", categoryRouter);

// Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
