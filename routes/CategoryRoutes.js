import { Router } from "express";
import Category from "../model/CategoryModel.js";
const categoryRouter = Router();

// Create Category
categoryRouter.post("/", async (req, res) => {
  try {
    const categoryExists = await Category.findOne({ catName: req.body.title });
    if (!categoryExists) {
      const newCategory = new Category(req.body);
      const category = await newCategory.save();
      res.send(category);
    } else res.status(201).json({ message: "Category Already Exists" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// get ALl Category
categoryRouter.get("/", async (req, res) => {
  try {
    const allCat = await Category.find();
    res.send(allCat);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
export default categoryRouter;
