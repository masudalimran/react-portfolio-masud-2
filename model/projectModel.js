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
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
      default: "Not Categorized",
    },
  },

  {
    timestamps: true,
  }
);

// Model
const Project = mongoose.model("Project", projectSchema);
export default Project;
