"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { coursesData } from "@/data/courses";

const CoursesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const filteredCourses = coursesData.filter((course) => {
    return (
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? course.category === category : true)
    );
  });

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="mb-16 relative">
          <div className="absolute -top-20 -left-10 w-64 h-64 bg-pink-600/10 blur-[120px] pointer-events-none"></div>
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Academy Catalog
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            Explore <span className="bg-gradient-to-r from-pink-500 via-orange-300 to-purple-400 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
            Master the most in-demand technical skills with our curated curriculum. 
            Designed for engineers, by engineers.
          </p>
        </header>

        {/* Search + Filter - Glassmorphism Style */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 p-2 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by course title..."
              className="w-full bg-transparent px-8 py-5 rounded-2xl outline-none text-white placeholder:text-gray-600 font-medium tracking-tight"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="md:border-l border-white/10 flex items-center pr-4">
            <select
              className="bg-transparent px-8 py-5 md:py-0 outline-none text-gray-400 font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" className="bg-black">All Categories</option>
              <option value="Web Dev" className="bg-black">Web Dev</option>
              <option value="Backend" className="bg-black">Backend</option>
              <option value="AI" className="bg-black">AI</option>
              <option value="Design" className="bg-black">Design</option>
            </select>
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="block">
              <CourseCard course={course} />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-40 border border-dashed border-white/10 rounded-[3rem] mt-10">
            <p className="text-gray-600 font-black text-xs uppercase tracking-[0.3em]">
              No courses found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;