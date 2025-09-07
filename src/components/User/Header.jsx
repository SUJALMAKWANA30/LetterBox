import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink-0 space-x-2">
            <img src="/Logo1.png" alt="Logo" className="w-10 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              LettrBox
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/application" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Applications
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              About Us
            </Link>
            <Link to="/my-application" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              My Applications
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:border-purple-500 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap"
            >
              Log In
            </Link>
            <Link
              to="/sign-up"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow-lg">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 px-2 py-2 rounded-md transition">
            Home
          </Link>
          <Link to="/application" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 px-2 py-2 rounded-md transition">
            Applications
          </Link>
          <Link to="/about-us" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 px-2 py-2 rounded-md transition">
            About Us
          </Link>
          <Link to="/my-application" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 px-2 py-2 rounded-md transition">
            My Applications
          </Link>
          <hr className="border-gray-200 my-2" />
          <Link to="/login" onClick={toggleMenu} className="block text-gray-700 hover:text-purple-600 px-2 py-2 rounded-md transition">
            Log In
          </Link>
          <Link to="/sign-up" onClick={toggleMenu} className="block text-purple-600 font-semibold px-2 py-2 rounded-md transition">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
