// Imports
import mongoose from "mongoose";

// Schema
const adminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: String,
  },
  {
    timestamps: true,
  }
);

// Model
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
