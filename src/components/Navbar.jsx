import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-black/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand / Logo - High Contrast Dark Mode Style */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-black tracking-[0.2em] text-white uppercase">
            SKILL<span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-light">FORGE</span>
          </Link>
        </div>

        {/* Navigation Links - Clean, uppercase, and muted */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
            Courses
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
            Contact Us
          </Link>
          
          {/* Action Buttons - Matching the All-in-One CTA Style */}
          <div className="flex items-center gap-4 ml-6 border-l border-white/10 pl-10">
            <Link 
              href="/login" 
              className="px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all shadow-lg shadow-white/5 text-[10px] font-black uppercase tracking-widest"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;