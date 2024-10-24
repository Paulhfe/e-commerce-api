import mongoose from "mongoose";
import User from "./src/models/User";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const seedAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI as string);

    // Check if admin user exists
    const existingAdmin = await User.findOne({ email: "admin@example.com" });
    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash("password123", 10);

    // Create a new admin user
    const adminUser = new User({
      username: "adminUser",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin", // Set role to admin
    });

    await adminUser.save();
    console.log("Admin user created:", adminUser);
  } catch (error) {
    console.error("Error seeding admin user:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
  }
};

seedAdminUser();
