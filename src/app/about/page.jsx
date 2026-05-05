import Link from "next/link";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* 🔥 HERO / INTRO */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              The SkillForge Story
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-tight">
            Building the <br />
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 bg-clip-text text-transparent">
              Next Generation
            </span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            SkillForge is an elite online learning ecosystem designed to bridge the gap 
            between academic theory and professional mastery.
          </p>
        </div>
      </section>

      {/* 🔥 MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500">
            Our Mission
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight leading-snug">
            Making industry-standard education <span className="text-gray-400">universally accessible.</span>
          </h3>
          <p className="text-gray-500 leading-loose text-base">
            We connect ambitious learners with world-class instructors. By focusing on 
            high-impact technologies and real-world project builds, we ensure our 
            graduates do not just learn—they thrive.
          </p>
          <div className="pt-4">
             <div className="h-[1px] w-20 bg-gradient-to-r from-pink-500 to-transparent"></div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0f0f0f] border border-white/10 h-80 rounded-[2rem] flex items-center justify-center overflow-hidden">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Innovation Center</span>
            {/* Visual element representing your tech focus */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-pink-500/5 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 🔥 FEATURES / VALUES */}
      <section className="bg-[#050505] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-16">
            Core Philosophies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Mentors",
                desc: "Every instructor is a verified professional currently working in the field.",
                color: "group-hover:border-pink-500/50"
              },
              {
                title: "Adaptive Pace",
                desc: "Our platform evolves with you, allowing for deep focus or rapid acceleration.",
                color: "group-hover:border-orange-500/50"
              },
              {
                title: "Career Trajectory",
                desc: "We don't just teach syntax; we build portfolios that demand attention.",
                color: "group-hover:border-purple-500/50"
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group bg-black border border-white/5 rounded-[2rem] p-10 transition-all duration-500 hover:bg-[#0f0f0f] ${item.color}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 mb-6 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-white group-hover:border-white/20">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-xl mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 TEAM */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">
              The Minds Behind
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tighter">Architects of SkillForge</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-sm">
            Our diverse team of engineers and educators are dedicated to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Safayet", "Alex Chen", "Sarah Jenkins"].map((name, i) => (
            <div
              key={i}
              className="group bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-8 text-center hover:border-white/20 transition-all"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mb-6 border border-white/10 group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center">
                 <span className="text-white/20 font-black text-2xl uppercase">{name[0]}</span>
              </div>
              <h3 className="font-bold text-lg mb-1">{name}</h3>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                {i === 0 ? "Lead Software Engineer" : "Senior Instructor"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="relative py-24 text-center overflow-hidden">
        {/* Bottom Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Forge Your Path?</span>
          </h2>
          <Link
            href="/courses"
            className="inline-block bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-200 active:scale-95 transition-all shadow-xl shadow-white/5"
          >
            Explore Courses —&gt;
          </Link>
        </div>
      </section>

    </div>
  );
}