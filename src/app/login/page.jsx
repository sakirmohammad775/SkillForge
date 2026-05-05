"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10">
      
      {/* Background Glows for that SkillForge feel */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border border-white/5 shadow-2xl relative z-10">
        
        {/* LEFT SIDE: Brand Visual */}
        <div className="md:w-1/2 relative min-h-[400px] md:min-h-0 overflow-hidden border-r border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-black z-0"></div>
          
          <div className="relative z-10 h-full p-12 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black tracking-tighter text-white">SKILLFORGE</h2>
              <Link href="/" className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-pink-500 transition-all">
                Back to website →
              </Link>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                Forge Your <br />
                <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Future Now</span>
              </h1>
              <div className="flex gap-2">
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
                <div className="w-8 h-1 rounded-full bg-white/10"></div>
                <div className="w-8 h-1 rounded-full bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Welcome Back</h2>
            <p className="text-gray-500 text-[10px] font-bold mb-10 uppercase tracking-[0.3em]">
              New to the forge? <Link href="/register" className="text-pink-500 hover:text-orange-400 transition-colors">Create Account</Link>
            </p>

            <form className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Identity (Email)</label>
                <input 
                  type="email" 
                  placeholder="name@domain.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-700 font-medium"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Security Key</label>
                    <Link href="/forgot" className="text-[10px] font-bold text-orange-400 uppercase tracking-tighter hover:underline">Reset?</Link>
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-700"
                  />
                  <button type="button" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white">
                    👁️
                  </button>
                </div>
              </div>

              {/* Submit Button - The Hero Component */}
              <button className="w-full bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-[0.3em] transition-all shadow-xl shadow-pink-500/20 active:scale-[0.98] mt-4">
                Access Account
              </button>
            </form>

            <div className="relative my-10 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <span className="relative bg-black px-4 text-[10px] text-gray-600 font-bold uppercase tracking-widest">Rapid Access</span>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                <FcGoogle className="text-xl" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                <FaApple className="text-xl" /> Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;