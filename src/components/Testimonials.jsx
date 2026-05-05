import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { text: "This platform completely changed how I approach MERN stack development. The depth is unmatched!", name: "Alex Rivera", role: "Full Stack Developer", image: "https://i.pravatar.cc/150?u=1" },
    { text: "The flexible learning schedule allowed me to master German while working a full-time engineering job.", name: "Sarah Chen", role: "Software Engineer", image: "https://i.pravatar.cc/150?u=2" },
    { text: "Highly recommend for anyone aiming for an IELTS Band 8.0. The speaking practice modules are brilliant.", name: "James Wilson", role: "IELTS Student", image: "https://i.pravatar.cc/150?u=3" },
  ];

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Glow (Matching your Hero/Features theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Inspired by image_e28e67.png */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Trusted by <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">leaders</span> <br />
            from various industries
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Learn why professionals trust SkillForge to advance their technical careers and complete their learning journeys.
          </p>
        </div>

        {/* Testimonial Grid - Inspired by the staggered layout in image_e28e67.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`group bg-[#0f0f0f] border border-white/5 p-8 rounded-[2.5rem] transition-all duration-500 hover:border-white/20 hover:-translate-y-2
                ${i === 1 ? "md:-mt-8" : "md:mt-8"}`} // Staggered effect
            >
              {/* Quote Icon */}
              <div className="text-4xl text-pink-500/20 mb-6 font-serif">“</div>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 italic">
                {item.text}
              </p>

              {/* User Info - Mimicking the photo grid look */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{item.name}</h4>
                  <p className="text-pink-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Matching the "Read Success Stories" button in image_e28e67.png */}
        <div className="mt-20 text-center">
          <button className="bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
            Read Success Stories <span className="ml-2">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;