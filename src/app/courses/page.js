"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";

const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    shortDescription: "Learn React from scratch and build modern apps.",
    price: 49,
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "Django Mastery",
    shortDescription: "Build scalable backend systems with Django.",
    price: 59,
    category: "Backend",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
  {
    id: 3,
    title: "AI Basics",
    shortDescription: "Introduction to AI and machine learning concepts.",
    price: 69,
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: 4,
    title: "Node.js Bootcamp",
    shortDescription: "Master backend development with Node.js.",
    price: 45,
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 5,
    title: "UI/UX Design",
    shortDescription: "Design beautiful and user-friendly interfaces.",
    price: 39,
    category: "Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
  {
    id: 6,
    title: "JavaScript Advanced",
    shortDescription: "Deep dive into modern JavaScript concepts.",
    price: 55,
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
];

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
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
      <p className="text-gray-500 mb-6">
        Learn new skills and grow your career.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search courses..."
          className="flex-1 px-4 py-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Web Dev">Web Dev</option>
          <option value="Backend">Backend</option>
          <option value="AI">AI</option>
          <option value="Design">Design</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No courses found.
        </p>
      )}
    </div>
  );
};

export default CoursesPage;