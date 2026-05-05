"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// Temporary data (later replace with API)
const coursesData = [
  {
    id: "1",
    title: "React for Beginners",
    description:
      "This course will teach you React from scratch. You will learn components, hooks, state management, and build real-world applications.",
    price: 49,
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: "2",
    title: "Django Mastery",
    description:
      "Master Django and build scalable backend systems. Covers REST APIs, authentication, and deployment.",
    price: 59,
    category: "Backend",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
];

const CourseDetails = () => {
  const { id } = useParams();

  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Course not found</h2>
        <Link href="/courses" className="text-blue-500 underline">
          Back to courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Back Button */}
      <Link
        href="/courses"
        className="text-sm text-gray-500 hover:underline"
      >
        ← Back to courses
      </Link>

      {/* Banner */}
      <div className="mt-4 rounded-xl overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        
        {/* LEFT: Details */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>

          <p className="text-gray-500">
            Category: {course.category}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* RIGHT: Card */}
        <div className="border rounded-xl p-6 shadow-sm h-fit space-y-4">
          <p className="text-2xl font-bold">${course.price}</p>

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Enroll Now
          </button>

          <p className="text-sm text-gray-500 text-center">
            Lifetime access • Certificate included
          </p>
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;