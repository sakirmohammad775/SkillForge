import React from 'react';
import CourseCard from './CourseCard';

const CourseSection = () => {
     const courses = [
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
  }
  ];
    return (
        <>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-10">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
        </>
    );
};

export default CourseSection;