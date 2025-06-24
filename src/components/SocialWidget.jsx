import React from 'react';
import { FaInstagram, FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';

const SocialWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Instagram */}
      <a
        href="https://instagram.com/johncreative"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-pink-400 to-pink-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* Behance */}
      <a
        href="https://behance.net/johndesigns"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaBehance size={20} />
      </a>

      {/* Dribbble */}
      <a
        href="https://dribbble.com/johncreative"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-pink-300 to-pink-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaDribbble size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/johncreative"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};

export default SocialWidget;
