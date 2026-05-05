import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold">SkillForge</h2>
            <p className="text-sm text-gray-500 mt-2">
              Learn. Build. Grow your skills.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <div>
              <h3 className="font-semibold mb-2">Pages</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Account</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SkillForge. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;