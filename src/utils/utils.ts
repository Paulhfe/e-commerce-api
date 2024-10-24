import { Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

// Error handling utility
export const handleError = (res: Response, error: any) => {
  console.error(error); // Log error for debugging
  res.status(500).json({ message: "An error occurred", error: error.message });
};

// Validation utility for user input
export const validateUser = () => [
  body("email").isEmail().withMessage("Please enter a valid email address."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];

// Token utility functions
export const generateToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};

// General utility functions
export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
};

export const generateRandomString = (length: number): string => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2); // Generate a random string
};
