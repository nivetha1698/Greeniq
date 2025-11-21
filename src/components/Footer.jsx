import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#eeeeee]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 className="font-extrabold text-green-700 text-lg mb-4 uppercase tracking-wide">
            About GreenNest
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            GreenNest is your one-stop nursery shop for indoor & outdoor plants, pots, seeds, and gardening essentials.
          </p>
        </div>

        <div>
          <h3 className="font-extrabold text-green-700 text-lg mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-800 transition-colors duration-300 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-800 transition-colors duration-300 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="/plants" className="hover:text-green-800 transition-colors duration-300 font-medium">
                Plants
              </a>
            </li>
            
            <li>
              <a href="/contact" className="hover:text-green-800 transition-colors duration-300 font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold text-green-700 text-lg mb-4 uppercase tracking-wide">
            Newsletter
          </h3>
          <p className="text-gray-600 text-sm mb-3">Get tips & deals straight to your inbox</p>
          <form className="flex w-full max-w-sm">
            <input type="email" placeholder="Your email" className="w-full p-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none text-gray-700 placeholder-gray-400"/>
            <button className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition-colors duration-300 font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm tracking-wide">
        &copy; 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
