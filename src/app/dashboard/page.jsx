"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(stored));
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/enrollments/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setEnrollments(data.enrollments || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-pink-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">
            My <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-2">
            Welcome back, {user?.name} 👋
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Enrolled Courses", value: enrollments.length },
            { label: "In Progress", value: enrollments.filter(e => e.status === "active").length },
            { label: "Completed", value: enrollments.filter(e => e.status === "completed").length },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Enrolled Courses */}
        <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
          My Courses
        </h2>

        {enrollments.length === 0 ? (
          <div className="text-center py-20 border border-white/5 rounded-3xl">
            <p className="text-4xl mb-4">📚</p>
            <p className="text-white font-black uppercase tracking-tighter text-xl mb-2">No courses yet</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">Start your learning journey today</p>
            <Link
              href="/courses"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 rounded-2xl text-white font-black text-[10px] uppercase tracking-widest"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollments.map((enrollment) => (
              <div
                key={enrollment._id}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-pink-500/20 transition-all"
              >
                <img
                  src={enrollment.courseImage}
                  alt={enrollment.courseTitle}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-400">
                      {enrollment.courseCategory}
                    </span>
                  </div>
                  <p className="text-white font-black uppercase tracking-tight text-sm">
                    {enrollment.courseTitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Paid: ${enrollment.price}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase">
                      {enrollment.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[10px]">
                    Enrolled: {new Date(enrollment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}