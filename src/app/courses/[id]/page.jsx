"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { coursesData } from "@/data/courses";

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Course not found</h2>
        <Link href="/courses" className="text-pink-500 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors">
          ← Back to Academy
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        {/* Navigation & Breadcrumbs */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-pink-500 transition-colors mb-10"
        >
          <span>←</span> Back to Academy
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT: Details Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Banner with Neon Glow */}
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[400px] md:h-[500px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-400">
                  {course.category}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                {course.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "text-white" : "bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent ml-3"}>
                    {word}
                  </span>
                ))}
              </h1>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  {course.description}
                </p>
              </div>

              {/* Course Features List */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {course.features?.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Enrollment Card (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-10 space-y-8 shadow-2xl shadow-pink-500/5">
              <div className="flex justify-between items-end">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Total Price</p>
                <p className="text-5xl font-black text-white tracking-tighter">${course.price}</p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-gray-200 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-white/5">
                  Enroll Now
                  <span className="text-lg">→</span>
                </button>
                <button className="w-full bg-transparent border border-white/10 text-white font-black py-5 rounded-2xl hover:bg-white/5 transition-all text-[10px] uppercase tracking-[0.2em]">
                  Gift this course
                </button>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-gray-500">
                   <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                   <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest">Verified Certificate</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;