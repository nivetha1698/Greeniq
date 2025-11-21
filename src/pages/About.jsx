import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20 text-center relative overflow-hidden px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-6">
          Who We Are?
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl font-serif leading-relaxed">
          Bringing nature closer to your home with carefully selected indoor & outdoor plants, pots, and gardening essentials. 
          At GreenNest, we believe in creating a living space that nurtures your well-being, brightens your surroundings, and inspires your love for nature. 
          Discover our wide variety of plants, planters, and gardening tools — handpicked to add freshness and life to every corner of your home.
       </p>
      </section>


      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <div>
        <h2 className="text-3xl font-bold text-green-700 font-serif mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
           GreenNest started with a simple mission: make homes and offices greener, healthier, and happier. We curate plants, seeds, and pots to help you create your own urban oasis.
          </p>
          <p className="text-gray-700">
           We focus on quality, sustainability, and customer satisfaction. Every plant we sell is handpicked and nurtured with love.
          </p>
       </div>

       <div className="flex justify-center md:justify-end">
        <img src="/images/nursery1.jpg" alt="Our nursery" className="rounded-xl shadow-lg w-72 md:w-96 object-cover"/>
       </div>
      </section>


      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Our Mission & Values
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainability</h3>
            <p className="text-gray-600">We promote eco-friendly gardening and use sustainable packaging.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Quality Plants</h3>
            <p className="text-gray-600">Every plant is handpicked and nurtured to ensure the best quality for our customers.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Customer Happiness</h3>
            <p className="text-gray-600">Our support team is always ready to help you with plant care and shopping experience.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
