import React from 'react';

const SuccessStory = () => {
  const testimonials = [
    {
      name: "Anand Bajaj",
      role: "CEO of ABC Company",
      text: "I am associated with them since 12 years and got good leads. Loved their services.",
      isFeatured: true,
    },
    {
      name: "Anand Bajaj",
      role: "CEO of ABC Company",
      text: "I am associated with them since 12 years and got good leads. Loved their services.",
    },
    {
      name: "Anand Bajaj",
      role: "CEO of ABC Company",
      text: "I am associated with them since 12 years and got good leads.",
    },
    {
      name: "Anand Bajaj",
      role: "CEO of ABC Company",
      text: "I am associated with them since 12 years and got good leads.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Our Graduates <br />
            <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400 bg-clip-text text-transparent">
              Speak For Us
            </span>
          </h2>
          <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.4em]">
            — Here’s what they say
          </p>
        </div>

        {/* 2. Profile Avatar Cloud (Simplified version of the image) */}
        <div className="flex justify-center items-center gap-4 mb-16 opacity-80">
          <div className="w-12 h-12 rounded-full bg-gray-800 border border-white/10 overflow-hidden scale-90 translate-y-4"></div>
          <div className="w-16 h-16 rounded-full bg-gray-800 border border-white/10 overflow-hidden -translate-y-4"></div>
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-pink-500 to-orange-400">
            <div className="w-full h-full rounded-full bg-gray-900 border-2 border-black overflow-hidden flex items-center justify-center">
               <span className="text-xs font-black text-white uppercase tracking-tighter">SF Member</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-gray-800 border border-white/10 overflow-hidden translate-y-2"></div>
          <div className="w-12 h-12 rounded-full bg-gray-800 border border-white/10 overflow-hidden scale-90 -translate-y-2"></div>
        </div>

        {/* 3. Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                item.isFeatured 
                ? 'bg-white/5 border-pink-500/30 shadow-2xl shadow-pink-500/5' 
                : 'bg-[#0f0f0f] border-white/5 hover:border-white/10'
              }`}
            >
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                `{item.text}``
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-[10px] font-black text-white/50">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest">{item.name}</h4>
                  <p className="text-gray-600 text-[10px] font-bold uppercase mt-1 tracking-tighter">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Action Button */}
        <div className="mt-16 text-center">
          <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
            Load More Stories
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessStory;