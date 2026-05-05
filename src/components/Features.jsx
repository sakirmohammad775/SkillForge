import React from "react";

const Features = () => {
  const featureData = [
    {
      title: "Expert Mentors",
      desc: "Learn from industry experts with deep practical knowledge and real-world experience.",
      icon: "🎓",
      gradient: "from-pink-500 to-orange-400",
    },
    {
      title: "Flexible Learning",
      desc: "Effortless conversion. Maintaining consistent schedules for optimal user experience.",
      icon: "⏳",
      gradient: "from-purple-500 to-pink-400",
      offset: true, // This mimics the staggered look in image_126056.png
    },
    {
      title: "Career Growth",
      desc: "Power your career with seamless mentorship and skills for streamlined professional growth.",
      icon: "🚀",
      gradient: "from-blue-500 to-purple-400",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              Why Choose SkillForge
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Better learning, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400 bg-clip-text text-transparent">
              faster growth.
            </span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

          {featureData.map((item, i) => (
            <div
              key={i}
              className={`relative group bg-[#0f0f0f] border border-white/5 p-10 rounded-[2.5rem] 
                hover:border-white/10 transition-all duration-300 hover:-translate-y-2
                ${item.offset ? "md:mt-10" : ""}`}
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl mb-8 flex items-center justify-center shadow-lg`}>
                <span className="text-2xl">{item.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative hover light */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;