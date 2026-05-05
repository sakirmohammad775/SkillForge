import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          {/* Brand Section */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-black tracking-[0.2em] text-white uppercase">
              Skill<span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Forge</span>
            </h2>
            <p className="text-gray-500 mt-6 text-sm leading-relaxed">
              Building the future of development, one block at a time. 
              Modern education for the next generation of creators.
            </p>
            
            {/* Social Icons - Glass Style */}
            <div className="flex gap-4 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-pink-500/50 transition-all cursor-pointer group">
                  <div className="w-4 h-4 bg-gray-400 group-hover:bg-pink-400 rounded-sm transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-16 md:gap-32">
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                Navigation
              </h3>
              <ul className="space-y-4 text-sm font-semibold text-gray-500">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                Join Us
              </h3>
              <ul className="space-y-4 text-sm font-semibold text-gray-500">
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/register" className="hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
            © {new Date().getFullYear()} SKILLFORGE DIGITAL SOLUTIONS.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 hover:text-pink-400 cursor-pointer transition-colors">
            Privacy Policy • Terms of Service
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;