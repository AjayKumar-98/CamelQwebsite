import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://camelq.in/wp-content/uploads/2024/12/Untitled-300-x-300-px-150-x-150-px.png"
              alt="CamelQ Logo"
              className="h-10 w-10"
            />
            <span className="ml-2 text-xl font-bold text-white hover:text-[#FFD700] transition duration-300">CamelQ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#FFD700] transition duration-300">Home</Link>
            <Link to="/services" className="text-white hover:text-[#FFD700] transition duration-300">Services</Link>
            <Link to="/about" className="text-white hover:text-[#FFD700] transition duration-300">About</Link>
            <Link to="/portfolio" className="text-white hover:text-[#FFD700] transition duration-300">Portfolio</Link>
            <Link
              to="/contact"
              className="bg-[#FFD700] text-gray-900 font-medium px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white hover:text-[#FFD700] transition duration-300">Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white hover:text-[#FFD700] transition duration-300">Services</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white hover:text-[#FFD700] transition duration-300">About</Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white hover:text-[#FFD700] transition duration-300">Portfolio</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-[#FFD700] text-gray-900 rounded-md hover:bg-yellow-400 transition duration-300">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
