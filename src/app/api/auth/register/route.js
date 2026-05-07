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
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
      return NextResponse.json({ message: "All fields are requiredd" }, { status: 400 });

    if (password.length < 6)
      return NextResponse.json({ message: "Password must be at least 6 characters" }, { status: 400 });

    const existing = await User.findOne({ email });
    if (existing)
      return NextResponse.json({ message: "Email already registered" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return NextResponse.json({
      message: "Account created successfully",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}