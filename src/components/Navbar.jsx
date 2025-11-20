// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-green-700">
            <Link to="/">GreenNest</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700">About</Link>
            <Link to="/categories" className="text-gray-700 hover:text-green-700">Plants</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700">Contact Us</Link>
          </div>

         <div className="flex items-center space-x-4">
           <input type="text" placeholder="Search plants..." className="hidden sm:block p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"/>
            <div className="text-green-700 font-semibold hover:text-green-800 transition">
              <Link to="/login" className="hover:underline">Login</Link> /{" "}
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </div>
            
            <Link to="/cart" className="text-gray-700 hover:text-green-700 transition">
              <ShoppingCartIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
