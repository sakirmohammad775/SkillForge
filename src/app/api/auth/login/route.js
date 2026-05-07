import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // Validation
    if (!email || !password)
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });

    // Find user ✅
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });

    // Compare password ✅
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });

    // Generate token ✅
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}