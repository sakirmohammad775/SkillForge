const Banner = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold mb-3">
          Become an Instructor
        </h2>

        <p className="text-gray-300 mb-6">
          Share your knowledge and earn money by creating courses on SkillForge.
        </p>

        <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
          Start Teaching
        </button>

      </div>
    </section>
  );
};

export default Banner;