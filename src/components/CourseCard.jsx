import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="relative group bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 shadow-2xl">
      
      {/* 1. Image Section with Sleek Overlay */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Gradient Bleed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
        
        {/* Floating Category Badge */}
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">
             {course.category}
           </span>
        </div>

        {/* Favorite/Bookmark Button */}
        <button className="absolute top-6 right-6 w-11 h-11 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-300">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* 2. Content Area */}
      <div className="p-10 pt-0 relative -mt-10">
        {/* Price Tag with Signature Gradient */}
        <div className="inline-block mb-5 px-5 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-pink-500/20">
          ${course.price}
        </div>

        <h3 className="text-2xl font-black text-white mb-4 tracking-tighter leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500 uppercase">
          {course.title}
        </h3>

        <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
          {course.shortDescription}
        </p>

        {/* Info Row - Styled for Clarity */}
        <div className="flex items-center justify-between mb-10 border-t border-white/5 pt-6">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400 text-[10px]">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <span className="text-gray-500 text-[10px] font-bold tracking-tighter">(4.8)</span>
          </div>
          
          <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Lifetime</span>
          </div>
        </div>

        {/* 3. Action Button - Pure White High Contrast */}
        <button className="w-full bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] py-5 rounded-[1.5rem] hover:bg-gray-200 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-xl shadow-white/5">
          Enroll Now
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>

      {/* Decorative Glow - Neon purple/pink hint on hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none"></div>
    </div>
  );
};

export default CourseCard;