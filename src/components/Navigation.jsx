import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    "How it works",
    "All apps",
    "Pricing",
    "For Teams",
    "Blog",
    "Podcast",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B2D32] border-b border-[#3A3C42]">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center rotate-45">
            <div className="grid grid-cols-2 gap-[2px] -rotate-45">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#2B2D32] rounded-[1px]" />
              ))}
            </div>
          </div>
        </a>

        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-white/90 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-white/90 hover:text-white">
            Sign in
          </a>
          <button className="border border-white/30 text-white hover:bg-white/10 text-sm px-4 py-2 rounded-md transition">
            Try free
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2B2D32] border-t border-[#3A3C42] px-6 py-4 animate-slideDown">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/90 hover:text-white transition"
              >
                {item}
              </a>
            ))}

            <a href="#" className="text-sm text-white/90 hover:text-white mt-2">
              Sign in
            </a>
            <button className="border border-white/30 text-white hover:bg-white/10 text-sm px-4 py-2 rounded-md mt-2 w-full transition">
              Try free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
