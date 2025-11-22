import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-green-700">
            <Link to="/">GreenNest</Link>
          </div>
          <div className="hidden md:flex space-x-14">
            <Link to="/" className="relative text-gray-700 font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>
            <Link to="/about" className="relative text-gray-700 font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
              About
            </Link>
            <Link to="/plants" className="relative text-gray-700 font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
              Plants
            </Link>
            <Link to="/contact" className="relative text-gray-700 font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search plants..." className="hidden sm:block p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"/>
            <div className="hidden md:flex text-green-700 font-semibold space-x-2">
              <Link to="/login" className="relative text-gray-700 font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
                Login
              </Link>
              <Link to="/signup" className="relative text-gray-700 font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
                Sign Up
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-700 focus:outline-none">
                {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
       <div className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white shadow-md">
        {[
         { name: "Home", path: "/" },
         { name: "About", path: "/about" },
         { name: "Plants", path: "/plants" },
         { name: "Contact", path: "/contact" },
         { name: "Login", path: "/login" },
         { name: "Sign Up", path: "/signup" },
        ].map((item) => (
        <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}className="block p-4 bg-green-50 rounded-lg shadow hover:bg-green-100 text-gray-700 font-medium transition">
          {item.name}
        </Link>
        ))}
       </div>
      )}

    </nav>
  );
};

export default Navbar;
