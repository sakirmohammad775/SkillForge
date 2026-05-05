import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn Skills That Matter 🚀
        </h1>

        <p className="text-gray-500 mb-6">
          Upgrade your career with high-quality online courses from expert instructors.
        </p>

        <Link
          href="/courses"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Explore Courses
        </Link>

      </div>
    </section>
  );
};

export default Hero;