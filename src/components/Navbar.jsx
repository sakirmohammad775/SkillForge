"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 👉 Replace later with real auth
  const user = null; // or { name: "Safayet" }

  return (
    <header className="sticky top-0 z-50  border-b">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          SkillForge
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/courses" className="hover:text-gray-600">Courses</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact Us</Link>

          {user ? (
            <Link href="/dashboard" className="bg-black text-white px-4 py-2 rounded">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="border px-4 py-2 rounded">
                Login
              </Link>
              <Link href="/register" className="bg-black text-white px-4 py-2 rounded">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/courses" className="block">Courses</Link>
          <Link href="/about" className="block">About</Link>

          {user ? (
            <Link href="/dashboard" className="block">Dashboard</Link>
          ) : (
            <>
              <Link href="/login" className="block border px-3 py-2 rounded">Login</Link>
              <Link href="/register" className="block bg-black text-white px-3 py-2 rounded">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;