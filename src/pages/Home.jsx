import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';
import heroImage from '../assets/tat20.jpg'; // replace with your hero image

const Home = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />
        <div className="z-10 px-4">
         <h1
  className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.2] overflow-visible bg-gradient-to-r from-pink-400 via-blue-500 to-teal-400 text-transparent bg-clip-text drop-shadow-lg"
  style={{ fontFamily: "'Great Vibes', cursive" }}
>
  Where Vision Becomes Visual
</h1>

          <p
  className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-10 text-gray-200 tracking-wide drop-shadow-sm"
  style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.8' }}
>
  Step into <span className="text-teal-300 font-semibold">Eyo’s world</span> of creative magic —
  where <span className="text-pink-400 font-semibold">logos breathe</span>,
  <span className="text-blue-400 font-semibold">colors talk</span>,
  and <span className="text-yellow-300 font-semibold">ideas explode</span> into vibrant design.
</p>

      <Link
  to="/portfolio"
  className="px-12 py-5 text-xl md:text-2xl font-bold bg-gradient-to-r from-[#14b8a6] via-[#3b82f6] to-[#6366f1] text-white rounded-full shadow-2xl hover:from-[#6366f1] hover:to-[#14b8a6] hover:shadow-blue-500/40 transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center gap-3"
>
  View My Work
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</Link>


 

        </div>
      </section>

      {/* ABOUT SECTION */}
     <section className="bg-white text-gray-800 py-24 px-4 relative">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Text */}
    <div className="relative">
      <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
        About John
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6 rounded-full"></div>
      <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
        I’m a passionate designer who blends visual storytelling with pixel-perfect precision. Every line, color, and space I choose is intentional — designed to move, speak, and sell.
      </p>

      {/* Signature Quote */}
      <p className="italic text-md text-gray-500 mt-6">
        "Design is not just art, it's strategy made visible."
      </p>
    </div>

    {/* Right: Image */}
    <div className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-teal-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
      <img
        src="/mockup.png"
        alt="Design Preview"
        className="relative rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
      />
    </div>
  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-lg mb-12 text-gray-300 max-w-xl mx-auto">
            I specialize in everything visual. Whether it's creating a logo or designing your app interface, I've got your back.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Brand Identity', color: 'from-blue-500 to-teal-400' },
              { title: 'Social Media Design', color: 'from-pink-500 to-yellow-500' },
              { title: 'Poster & Flyer', color: 'from-green-500 to-cyan-500' },
              { title: 'UI/UX Mockups', color: 'from-purple-500 to-indigo-500' },
              { title: 'Product Packaging', color: 'from-red-500 to-orange-500' },
              { title: 'Web Graphics', color: 'from-teal-500 to-blue-500' },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${service.color} p-6 rounded-xl shadow-lg transition transform hover:scale-105`}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTIVATIONAL QUOTE & CTA */}
      <section className="bg-black text-white py-20 px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          “Design is the silent ambassador of your brand.”
        </h2>
        <Link
          to="/contact"
          className="inline-block mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Let’s Work Together
        </Link>
      </section>
    </div>
  );
};

export default Home;
