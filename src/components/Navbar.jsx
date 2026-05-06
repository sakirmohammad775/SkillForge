"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    setMobileOpen(false);
    router.push("/");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-black/95 text-white sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-4">

            {/* ── LOGO ── */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/skillforge_logo.svg"
                alt="logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-[0.15em] text-white uppercase">
                SKILL
                <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-light">
                  FORGE
                </span>
              </span>
            </Link>

            {/* ── DESKTOP NAV LINKS (lg+) ── */}
            <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── DESKTOP AUTH (lg+) ── */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-200"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-black text-xs shrink-0">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-white text-[10px] font-black uppercase tracking-widest max-w-[80px] truncate">
                      {user.name?.split(" ")[0]}
                    </span>
                    <svg
                      className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-64 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-black overflow-hidden">
                      {/* User Info */}
                      <div className="px-5 py-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-black shrink-0">
                            {user.name?.charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <p className="text-white font-black text-xs uppercase tracking-wider truncate">{user.name}</p>
                            <p className="text-gray-500 text-[10px] truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="py-1">
                        {[
                          { href: "/dashboard", icon: "📊", label: "Dashboard" },
                          { href: "/products/add", icon: "➕", label: "Add Product" },
                          { href: "/products/manage", icon: "⚙️", label: "Manage Products" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            <span>{item.icon}</span> {item.label}
                          </Link>
                        ))}
                      </div>

                      {/* Logout */}
                      <div className="border-t border-white/5 py-1">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all"
                        >
                          <span>🚪</span> Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-5 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all text-[10px] font-black uppercase tracking-widest"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* ── TABLET (md) — show links, hide auth ── */}
            <div className="hidden md:flex lg:hidden items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── RIGHT SIDE: Avatar (md) + Hamburger (sm+md) ── */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Show avatar on md when logged in */}
              {user && (
                <div className="hidden md:flex relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-black text-[10px]">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <svg
                      className={`w-3 h-3 text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-10 w-56 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-black overflow-hidden">
                      <div className="px-4 py-3 border-b border-white/5">
                        <p className="text-white font-black text-[10px] uppercase truncate">{user.name}</p>
                        <p className="text-gray-500 text-[10px] truncate">{user.email}</p>
                      </div>
                      <div className="py-1">
                        {[
                          { href: "/dashboard", icon: "📊", label: "Dashboard" },
                          { href: "/products/add", icon: "➕", label: "Add Product" },
                          { href: "/products/manage", icon: "⚙️", label: "Manage Products" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            <span>{item.icon}</span> {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/5 py-1">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-red-400 hover:bg-red-500/5 transition-all"
                        >
                          <span>🚪</span> Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* ── MOBILE MENU (sm only) ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-1">

              {/* User info — mobile */}
              {user && (
                <div className="flex items-center gap-3 p-3 mb-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-black shrink-0">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-black text-xs uppercase truncate">{user.name}</p>
                    <p className="text-gray-500 text-[10px] truncate">{user.email}</p>
                  </div>
                </div>
              )}

              {/* Nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-px bg-white/5 my-2" />

              {user ? (
                <>
                  {[
                    { href: "/dashboard", icon: "📊", label: "Dashboard" },
                    { href: "/products/add", icon: "➕", label: "Add Product" },
                    { href: "/products/manage", icon: "⚙️", label: "Manage Products" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      <span>{item.icon}</span> {item.label}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-3 text-[11px] font-black uppercase tracking-widest text-red-400 hover:bg-red-500/5 rounded-xl transition-all w-full text-left mt-1"
                  >
                    <span>🚪</span> Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center px-6 py-3 rounded-full border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center px-6 py-3 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;