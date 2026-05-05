import React from "react";

const Features = () => {
  return (
    <>
      {/* 🔥 FEATURES */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose SkillForge
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Expert Mentors", "Flexible Learning", "Career Growth"].map(
            (item, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 text-center hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-sm text-gray-500">
                  Learn from industry experts with practical knowledge.
                </p>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
};

export default Features;
