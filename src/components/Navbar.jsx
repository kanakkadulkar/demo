import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="text-white px-6 py-4 shadow-lg fixed w-full z-50 "
      style={{fontFamily: 'Macondo, cursive',
        backgroundColor: "rgba(0, 88, 131, 0.25)", // Semi-transparent background
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(12.5px)",
        WebkitBackdropFilter: "blur(12.5px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Scriptly
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Services
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-sky-500 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-white text-sky-500 rounded-lg hover:bg-gray-200 transition">
            Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <a href="#" className="block text-center py-2 bg-sky-600 rounded-md">
            Home
          </a>
          <a href="#" className="block text-center py-2 bg-sky-600 rounded-md">
            About
          </a>
          <a href="#" className="block text-center py-2 bg-sky-600 rounded-md">
            Services
          </a>
          <button className="w-full py-2 border border-white rounded-md hover:bg-white hover:text-sky-500 transition">
            Login
          </button>
          <button className="w-full py-2 bg-white text-sky-500 rounded-md hover:bg-gray-200 transition">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;