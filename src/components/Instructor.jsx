import React from 'react';

const Instructor = () => {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* 1. Background Visuals (Matching your Hero/Features glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* 2. Badge & Header */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Join Our Community
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Become an <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Instructor
          </span>
        </h2>

        {/* 3. Description Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
            Share your knowledge and earn money by creating courses on SkillForge. 
            Join thousands of professionals already teaching worldwide.
          </p>
        </div>

        {/* 4. Action Area */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-white/5 group">
            Start Teaching 
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button className="w-full md:w-auto px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>

        {/* 5. Decorative Floating Stats (Subtle) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-1">10k+</h4>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Instructors</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white mb-1">1M+</h4>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Students</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-2xl font-bold text-white mb-1">100+</h4>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Countries</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Instructor;