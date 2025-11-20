// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
        {/* About */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">About GreenNest</h3>
          <p className="text-sm">GreenNest is your one-stop nursery shop for indoor & outdoor plants, pots, seeds, and gardening essentials.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-green-700 transition">Home</a></li>
            <li><a href="/plans" className="hover:text-green-700 transition">Plans</a></li>
            <li><a href="/categories" className="hover:text-green-700 transition">Categories</a></li>
            <li><a href="/contact" className="hover:text-green-700 transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-green-700 mb-2">Newsletter</h3>
          <p className="text-sm mb-2">Get tips & deals straight to your inbox</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"/>
            <button className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        &copy; 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
