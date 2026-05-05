import React from 'react';

const Testimonials = () => {
    return (
    <>
     {/* 🔥 TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          
          <h2 className="text-2xl font-bold mb-10">
            What Our Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Amazing platform!", "Learned a lot!", "Highly recommend!"].map((text, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 hover:shadow-md transition"
              >
                <p className="text-gray-600 text-sm mb-3">`{text}`</p>
                <h4 className="font-semibold">User {i + 1}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
    );
};

export default Testimonials;