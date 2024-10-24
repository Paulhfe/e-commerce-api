import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await user.save();

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role }, // Include the role in the token if needed
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    // Return the response without password
    return res.status(201).json({
      message: "User created",
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
        _id: user._id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token, // Include the token in the response
    });
  } catch (error) {
    return res.status(500).json({ error: "User registration failed" });
  }
};

export const login = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate the token here
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    // Return the token in the response
    return res.json({
      message: "Login successful",
      token, // Include the token in the response
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    } else {
      return res.status(400).json({ error: "Unknown error occurred" });
    }
  }
};

// Function to get all users
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  try {
    const users = await User.find().select("-password"); // Exclude password from the response
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
};
