// imports
import mongoose from "mongoose";

// Schema
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: true,
    },
    projectTag: String,
  },
  {
    timestamps: true,
  }
);

// Model
const Project = mongoose.model("Project", projectSchema);
export default Project;
