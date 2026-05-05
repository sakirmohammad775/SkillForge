import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] md:h-[750px] bg-black overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full md:w-[70%] z-0"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/pvtmDDPR/photo-1517245386807-bb43f82c33c4-auto-format-fit-crop-q-80.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Deep Gradient Overlay to blend with Black */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black md:to-transparent"></div>
      </div>

      {/* 2. Modern Slant Overlay (Right Side) */}
      <div 
        className="absolute inset-0 bg-black hidden md:block z-10"
        style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 45% 100%)' }}
      ></div>

      {/* 3. Content Container */}
      <div className="relative z-20 w-full h-full flex items-center justify-center md:justify-end px-6 sm:px-12 md:px-20 lg:px-32 py-20 md:py-0">
        <div className="max-w-xl text-center md:text-left">
          
          {/* Animated Subheading Badge */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
            <h3 className="text-gray-400 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">
              SkillForge Academy
            </h3>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            Learn Skills <br /> 
            <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400 bg-clip-text text-transparent">
              That Matter
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base mb-10 max-w-sm mx-auto md:mx-0 leading-relaxed font-medium">
            Upgrade your career with high-quality courses from expert instructors. 
            Build your future with the most in-demand technical skills.
          </p>

          {/* Action Button - High Contrast */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="/courses"
              className="w-full sm:w-auto text-center bg-white text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all duration-300 shadow-2xl shadow-white/5 active:scale-95 rounded-2xl"
            >
              Explore Courses →
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Decorative Background Glow */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default Hero;