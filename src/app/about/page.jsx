import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-20">

      {/* 🔥 HERO / INTRO */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About SkillForge
          </h1>
          <p className="text-gray-500">
            SkillForge is an online learning platform designed to help you
            build real-world skills and grow your career.
          </p>
        </div>
      </section>

      {/* 🔥 MISSION */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make high-quality education accessible to
            everyone. We connect learners with expert instructors and provide
            practical, industry-relevant courses that help people succeed in
            their careers.
          </p>
        </div>

        <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Image / Illustration</span>
        </div>
      </section>

      {/* 🔥 FEATURES / VALUES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <h2 className="text-2xl font-bold text-center mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Instructors",
                desc: "Learn from industry professionals with real experience.",
              },
              {
                title: "Flexible Learning",
                desc: "Study anytime, anywhere at your own pace.",
              },
              {
                title: "Career Growth",
                desc: "Gain skills that help you land better opportunities.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 text-center hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 TEAM (simple version) */}
      <section className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Safayet", "Team Member", "Team Member"].map((name, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3"></div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">Instructor</p>
            </div>
          ))}
        </div>

      </section>

      {/* 🔥 CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Start Learning Today 🚀
        </h2>
        <Link
          href="/courses"
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Browse Courses
        </Link>
      </section>

    </div>
  );
}