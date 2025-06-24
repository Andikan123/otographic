import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] shadow-md"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-5xl font-bold text-white tracking-wide"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          onClick={() => setIsOpen(false)}
        >
          Eyo<span style={{ color: '#93c5fd' }}>Designs</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-white text-lg font-medium relative group transition duration-300 ${
                  location.pathname === link.path
                    ? 'text-blue-200 underline underline-offset-8'
                    : ''
                }`}
              >
                {link.name}
                <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-blue-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-1 w-full bg-white rounded transition duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className="md:hidden bg-[#0f172a] px-4 pb-4 space-y-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-white text-lg font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-300 underline underline-offset-4'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
