// imports
import mongoose from "mongoose";

// Schema
const categorySchema = new mongoose.Schema(
  {
    catName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const Category = mongoose.model("Category", categorySchema);
export default Category;
