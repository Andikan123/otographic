import React from 'react';

const Contact = () => {
  return (
 <section className="min-h-screen bg-gradient-to-tr from-teal-400 to-blue-600 flex items-center justify-center py-24 px-6">
  <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full p-10 grid md:grid-cols-2 gap-16">
    {/* Form side */}
    <div>
      <h1
        className="text-7xl font-extrabold leading-[1.2] overflow-visible mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-600 to-purple-700"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Get In Touch
      </h1>

      <form className="space-y-6 mb-12">
  {/* Name */}
  <div>
    <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
      Name
    </label>
    <input
      id="name"
      type="text"
      required
      placeholder="Your full name"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-300 outline-none transition"
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
      Email
    </label>
    <input
      id="email"
      type="email"
      required
      placeholder="you@example.com"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      rows="5"
      required
      placeholder="Write your message here..."
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition resize-none"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full py-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-teal-400 hover:shadow-purple-500/50 transition transform hover:scale-105"
  >
    Send Message
  </button>
</form>

    </div>

    {/* Contact Info side */}
   <div className="flex flex-col items-center justify-center text-gray-700 max-w-md mx-auto space-y-8">
  <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
    Contact Info
  </h2>

  {/* WhatsApp */}
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 w-full bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-xl shadow-lg hover:shadow-green-400 transition transform hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.918 11.918 0 0012 0C5.373 0 0 5.372 0 12c0 2.11.555 4.076 1.524 5.84L0 24l6.374-1.504A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.206-1.247-6.22-3.48-8.52zm-8.366 16.734c-1.773 0-3.44-.485-4.923-1.395l-.352-.21-3.782.893.802-3.68-.23-.376a9.6 9.6 0 01-1.447-5.004c0-5.306 4.314-9.62 9.62-9.62 2.57 0 4.983.997 6.79 2.804a9.59 9.59 0 012.81 6.816c0 5.306-4.314 9.62-9.619 9.62z" />
      <path d="M16.106 13.71c-.297-.15-1.758-.867-2.03-.965-.273-.1-.472-.15-.67.15-.198.297-.768.964-.94 1.163-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.474-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.173.2-.298.3-.497.1-.198.05-.372-.025-.52-.075-.15-.67-1.613-.916-2.206-.24-.58-.48-.502-.67-.512l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.48 0 1.463 1.065 2.875 1.213 3.074.15.198 2.095 3.2 5.076 4.487.71.306 1.262.488 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.69.248-1.282.173-1.412-.074-.132-.272-.198-.57-.347z" />
    </svg>
    <span className="text-xl font-semibold">+123 456 7890</span>
  </a>

  {/* Email */}
  <a
    href="mailto:john@example.com"
    className="flex items-center gap-4 p-4 w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-blue-400 transition transform hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M4 4h16v16H4z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
    <span className="text-xl font-semibold">john@example.com</span>
  </a>

  {/* Phone */}
  <a
    href="tel:+1234567890"
    className="flex items-center gap-4 p-4 w-full bg-gradient-to-r from-indigo-400 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-indigo-400 transition transform hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.44 2.39.92 3.5a2 2 0 01-.45 2.11L9 10.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c1.11.48 2.29.79 3.5.92a2 2 0 011.72 2z" />
    </svg>
    <span className="text-xl font-semibold">+123 456 7890</span>
  </a>

  {/* Location */}
  <a
    href="https://goo.gl/maps/yourlocation"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 w-full bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-xl shadow-lg hover:shadow-pink-400 transition transform hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 21c-4.418 0-8-7-8-10a8 8 0 1116 0c0 3-3.582 10-8 10z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
    <span className="text-xl font-semibold">New York, NY</span>
  </a>
</div>

  </div>
</section>



  );
};

export default Contact;
