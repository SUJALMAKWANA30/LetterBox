import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // React icons
import { FileText, Sparkles } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <>
      <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/Logo1.png" alt="Logo" className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                LettrBox
              </span>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</Link>
              <Link to="/application" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Applications</Link>
              <Link to="/about-us" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">About Us</Link>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact Us</a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:border-purple-500 hover:text-purple-600 transition-colors duration-300">Log In</Link>
              <Link to="/sign-up" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow">
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/application" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600">Applications</Link>
            <Link to="/about-us" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600">About Us</Link>
            <a href="#" className="block text-gray-700 hover:text-purple-600">Contact Us</a>
            <hr className="border-gray-200" />
            <Link to="/login" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600">Log In</Link>
            <Link to="/sign-up" onClick={toggleMenu} className="block text-purple-600 font-semibold">Sign Up</Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
