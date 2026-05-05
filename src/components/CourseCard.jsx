import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="relative group bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 shadow-2xl">
      
      {/* 1. Image Section with Sleek Overlay */}
      <div className="relative h-60 overflow-hidden">
        <img src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Gradient Bleed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
           <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400">
             {course.category}
           </span>
        </div>

        {/* Favorite/Bookmark Button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* 2. Content Area */}
      <div className="p-8 pt-0 relative -mt-12">
        {/* Price Tag with Gradient */}
        <div className="inline-block mb-4 px-4 py-1 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold text-sm shadow-lg shadow-pink-500/20">
          ${course.price}
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight group-hover:text-pink-400 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Info Row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-1.5">
            <div className="flex text-orange-400 text-xs">
              {/* Rating stars */}
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <span className="text-gray-400 text-xs font-semibold">(4.8)</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
             Lifetime Access
          </div>
        </div>

        {/* 3. Action Button - High Contrast */}
        <button className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
          Enroll Now
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Decorative Glow - Invisible until hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
    </div>
  );
};

export default CourseCard;