import express from "express";
import Product from "../models/Product"; // Adjust the import path as needed
import { protect, admin } from "../middlewares/authMiddleware"; // Adjust the import path as needed

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

// Create a new product (protected route)
router.post("/", protect, admin, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Product creation failed" });
  }
});

// Delete a product by ID (protected route)
router.delete(
  "/:id",
  protect,
  admin,
  async (req, res): Promise<Response | any> => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  }
);

export default router;
