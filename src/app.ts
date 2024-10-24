import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";

dotenv.config();
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/categories", categoryRoutes);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Server
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
