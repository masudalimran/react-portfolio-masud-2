// Imports
import { Router } from "express";
import fs from "fs";
const imagePath = "./uploads/";

const adminRouter = Router();

// bcrypt stuff
import bcrypt from "bcrypt";
import Admin from "../model/adminModel.js";
const saltRound = Number(process.env.BCRYPT_SALT) || 5;
const salt = bcrypt.genSaltSync(saltRound);

// Sign In Admin
adminRouter.post("/signIn", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    if (admin) {
      if (bcrypt.compareSync(req.body.password, admin.password)) {
        const { password, ...others } = admin._doc;
        res.send(others);
      } else res.status(201).json({ message: "Invalid Password" });
    } else res.status(201).json({ message: "Invalid User Name" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register Admin
adminRouter.post("/register", async (req, res) => {
  try {
    const usernameExists = await Admin.findOne({ username: req.body.username });
    if (!usernameExists) {
      req.body.password = bcrypt.hashSync(req.body.password, salt);
      const newAdmin = new Admin(req.body);
      const admin = await newAdmin.save();
      //    Skipping Password field
      const { password, ...others } = admin._doc;
      res.send(others);
    } else res.status(201).json({ message: "User Already Exist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Admin
adminRouter.put("/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    const admin = await Admin.findById(req.params.id);
    if (req.body.password !== "") {
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    } else req.body.password = admin.password;
    if (req.body.prevImg) {
      fs.unlink(imagePath + "admin/" + req.body.prevImg, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
    try {
      const updatedAdmin = await Admin.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      const { password, ...others } = updatedAdmin._doc;
      res.send(others);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else res.status(201).json({ message: "User Not Found!" });
});

// Delete Admin
adminRouter.delete("/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    try {
      await Admin.findByIdAndDelete(req.params.id);
      res.json({ message: "Admin Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else res.status(201).json({ message: "User Not Found!" });
});

export default adminRouter;
