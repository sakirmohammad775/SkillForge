import { NextResponse } from "next/server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";

const EnrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: String, required: true },
  courseTitle: { type: String, required: true },
  courseCategory: String,
  courseImage: String,
  price: { type: Number, required: true },
  status: { type: String, default: "active" },
}, { timestamps: true });

const Enrollment = mongoose.models.Enrollment || mongoose.model("Enrollment", EnrollmentSchema);

const getUserId = (req) => {
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET).id;
  } catch {
    return null;
  }
};

export async function POST(req) {
  try {
    await connectDB();
    const userId = getUserId(req);
    if (!userId)
      return NextResponse.json({ message: "Not authorized" }, { status: 401 });

    const { courseId, courseTitle, courseCategory, courseImage, price } = await req.json();

    const existing = await Enrollment.findOne({ user: userId, courseId });
    if (existing)
      return NextResponse.json({ message: "Already enrolled in this course" }, { status: 400 });

    const enrollment = await Enrollment.create({
      user: userId, courseId, courseTitle, courseCategory, courseImage, price,
    });

    return NextResponse.json({ message: "Enrolled successfully", enrollment }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDB();
    const userId = getUserId(req);
    if (!userId)
      return NextResponse.json({ message: "Not authorized" }, { status: 401 });

    const enrollments = await Enrollment.find({ user: userId }).sort({ createdAt: -1 });
    return NextResponse.json({ enrollments }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}