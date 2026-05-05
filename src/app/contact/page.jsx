"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      return;
    }

    setError("");
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* 🔥 HERO SECTION */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            Let us <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Have questions about SkillForge? We’re here to help you build the future of development.
          </p>
        </div>
      </section>

      {/* 🔥 CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        
        {/* LEFT INFO */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">Contact Information</h2>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Reach out to us for any queries, support, or potential collaboration. Our team typically responds within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-pink-500/50 transition-colors">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Us</p>
                <p className="text-white font-semibold">support@skillforge.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Call Us</p>
                <p className="text-white font-semibold">+880 1234-567890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location</p>
                <p className="text-white font-semibold">Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM - GLASS CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-8 md:p-10 space-y-6 shadow-2xl relative"
        >
          {/* Subtle Form Header */}
          <h3 className="text-xl font-bold mb-2">Send a Message</h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-pink-500 outline-none text-white placeholder:text-gray-600 transition-all"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-pink-500 outline-none text-white placeholder:text-gray-600 transition-all"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-pink-500 outline-none text-white placeholder:text-gray-600 transition-all resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-200 active:scale-[0.98] transition-all shadow-xl shadow-white/5"
          >
            Send Message →
          </button>
        </form>
      </section>

      {/* 🔥 MAP / EXTRA SECTION */}
      <section className="py-24 text-center border-t border-white/5 mt-12 relative overflow-hidden">
         {/* Decorative Glow */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-orange-900/10 blur-[120px] rounded-full"></div>

        <h2 className="text-3xl font-extrabold mb-4 relative z-10">Global Presence</h2>
        <p className="text-gray-500 max-w-lg mx-auto px-6 relative z-10 leading-relaxed text-sm md:text-base">
          Headquartered in <span className="text-white font-bold">Bangladesh</span>, we support developers and students across 100+ countries 🌍
        </p>
      </section>

    </div>
  );
}