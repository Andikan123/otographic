import React from 'react';

const skills = [
  { name: 'Brand Identity', level: 90, color: 'from-teal-400 to-blue-500' },
  { name: 'UI/UX Design', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'Illustration', level: 75, color: 'from-yellow-400 to-red-400' },
  { name: 'Motion Graphics', level: 65, color: 'from-green-400 to-teal-400' },
];

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
       <h1
  className="text-6xl md:text-7xl font-extrabold mb-16 text-transparent bg-clip-text leading-[1.2] overflow-visible bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-center"
  style={{ fontFamily: "'Great Vibes', cursive" }}
>
  About Eyo
</h1>


        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Photo with glowing border */}
          <div className="flex justify-center">
            <div className="rounded-3xl p-1 bg-gradient-to-tr from-teal-400 via-blue-500 to-purple-600 shadow-lg">
              <img
                src="/john-photo.jpg"
                alt="John Portrait"
                className="rounded-3xl object-cover w-140 h-140"
              />
            </div>
          </div>

          {/* Right: Text & Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Biography</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-inter">
              Oto-obong Eyo is a visionary graphic designer who combines art and technology to craft unforgettable brands. With a knack for vibrant color palettes and sleek typography, he helps businesses stand out and tell their stories visually.
            </p>

            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <div className="space-y-6">
              {skills.map(({ name, level, color }, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span>{name}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden">
                    <div
                      className={`h-5 rounded-full bg-gradient-to-r ${color} transition-all duration-700`}
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-14 italic text-xl text-teal-300 border-l-4 border-teal-400 pl-6">
              “Design is intelligence made visible.” — Alina Wheeler
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
