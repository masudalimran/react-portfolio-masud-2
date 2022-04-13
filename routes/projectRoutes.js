import { Router } from "express";
import Project from "../model/projectModel.js";
const projectRouter = Router();

// create new project
projectRouter.post("/", async (req, res) => {
  try {
    const titleExists = await Project.findOne({ title: req.body.title });
    if (!titleExists) {
      const newProject = new Project(req.body);
      const project = await newProject.save();
      res.send(project);
    } else res.status(201).json({ message: "Project Name Exists" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all Projects
projectRouter.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ updatedAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default projectRouter;
