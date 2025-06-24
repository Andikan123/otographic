import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Logo Design',
    img: '/portfolio1.jpg',
    description: 'Clean and minimal logo that captures brand essence.'
  },
  {
    id: 2,
    title: 'Brand Identity',
    img: '/portfolio2.jpg',
    description: 'Comprehensive visual identity for a startup.'
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    img: '/portfolio3.jpg',
    description: 'Vibrant and engaging visuals for online ads.'
  },
  {
    id: 4,
    title: 'Product Packaging',
    img: '/portfolio4.jpg',
    description: 'Creative packaging design that stands out on shelves.'
  },
  {
    id: 5,
    title: 'UI/UX Mockups',
    img: '/portfolio5.jpg',
    description: 'User-friendly and stylish app interfaces.'
  },
  {
    id: 6,
    title: 'Poster & Flyer',
    img: '/portfolio6.jpg',
    description: 'Eye-catching event posters with bold typography.'
  },
];


const Portfolio = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-7xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 leading-[1.2] overflow-visible"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          My Portfolio
        </h1>

   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
  {projects.map(({ id, title, img, description }) => (
    <div
      key={id}
      className="relative rounded-3xl overflow-hidden cursor-pointer group perspective"
      style={{ perspective: '1000px' }}
    >
      {/* Image with 3D tilt */}
      <img
        src={img}
        alt={title}
        className="w-full h-72 object-cover rounded-3xl shadow-xl transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-y-3"
      />

      {/* Colorful gradient border */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-transparent bg-gradient-to-tr from-pink-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

      {/* Content Box - always visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 backdrop-blur-sm rounded-b-3xl p-4">
        <h2 className="text-white text-2xl font-extrabold drop-shadow-lg">{title}</h2>
        <p className="text-gray-300 mt-1 text-sm font-medium leading-snug">{description}</p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Portfolio;
