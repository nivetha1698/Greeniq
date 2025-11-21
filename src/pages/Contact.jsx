import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sendContactMessage } from "../api/contact";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: ""});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
   e.preventDefault();

   try {
      const response = await sendContactMessage(form);
      alert(response.message);

     setForm({ name: "", email: "", message: "" });
    } 
    catch (error) {
      console.error("Error:", error);
      alert("Failed to send message!");
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="flex flex-col font-serif md:flex-row max-w-6xl mx-auto my-16">
        <div data-aos="fade-right" data-aos-duration="1000" className="md:w-1/2 p-10 flex flex-col justify-center items-start relative">
          <h1 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg font-serif md:text-xl mb-6">
            Have questions or suggestions? We’d love to hear from you! Fill out the form and our team will respond as soon as possible.
          </p>
          <div className="text-gray-600 space-y-2">
            <p>Email: support@greennest.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123 Green Street, Plant City, India</p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000" className="md:w-1/2 p-10 flex flex-col justify-center bg-white rounded-3xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange}
              data-aos="fade-up" data-aos-delay="200" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"required/>
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange}
              data-aos="fade-up" data-aos-delay="300" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none" required/>
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows="6"
              data-aos="fade-up" data-aos-delay="400" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none" required/>
            <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="500">
               Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
