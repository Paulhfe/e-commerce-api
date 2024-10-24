import express from "express";
import Category from "../models/Category"; // Ensure this path is correct
import { protect, admin } from "../middlewares/authMiddleware";

const router = express.Router();

// Route to create a new category (Admin Only)
router.post("/", protect, admin, async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: "Category creation failed" });
  }
});

// Add other category-related routes here if needed

export default router;
