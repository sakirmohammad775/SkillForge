import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {course.shortDescription}
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="font-bold text-black">
            ${course.price}
          </span>

          <Link
            href={`/courses/${course.id}`}
            className="text-sm px-3 py-1 border rounded hover:bg-black hover:text-white transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;