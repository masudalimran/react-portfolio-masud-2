import { Router } from "express";
import multer from "multer";
const multerRouter = Router();

//Multer

// admin
const fileEngineStorageAdmin = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads/admin");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploadAdmin = multer({ storage: fileEngineStorageAdmin });

//  project
const fileEngineStorageProject = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads/project");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const uploadProject = multer({ storage: fileEngineStorageProject });

// Routes
// profile picture route
multerRouter.post(
  "/adminPP",
  uploadAdmin.single("profilePic"),
  async (req, res) => {
    res.json({
      message: `${req.file.size / 1000}kb uploaded...`,
    });
  }
);

multerRouter.post(
  "/projectImg",
  uploadProject.single("projectImg"),
  async (req, res) => {
    res.json({
      message: `Uploaded successfully, ${req.file.size / 1000}kb uploaded...`,
    });
  }
);

export default multerRouter;
