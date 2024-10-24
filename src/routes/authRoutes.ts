import express, { Request, Response } from "express"; // Import Request and Response types
import { check, validationResult } from "express-validator";
import {
  register,
  login,
  getAllUsers,
  deleteUser,
} from "../controllers/authController";
import { protect, admin, isAdmin } from "../middlewares/authMiddleware";

const router = express.Router();

// Validation middleware for the registration route
const registerValidation = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];

// Register route with validation
router.post(
  "/register",
  registerValidation,
  async (req: Request, res: Response): Promise<any> => {
    // Explicitly type req and res
    // Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Proceed with the register logic if validation passes
    await register(req, res);
  }
);

router.post("/login", login);

// Route to get all users
router.get("/", protect, isAdmin, getAllUsers);

// Delete user by id
router.delete("/delete/:id", protect, admin, deleteUser);

export default router;
