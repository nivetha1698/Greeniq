import { useState } from "react";
import { signUpUser } from "../api/auth";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    username: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signUpUser(form);
    console.log("Signup result:", response);
  };

  return (
   <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
    <div className="absolute inset-0 bg-black/50 z-0"></div>
     <div className="relative z-10 w-full max-w-md px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
       <div className="text-center pb-2">
        <h2 className="text-2xl font-bold text-green-700">Sign Up</h2>
       </div>

       <form onSubmit={handleSubmit} className="space-y-4">
        <div>
         <label htmlFor="email" className="block text-gray-700 mb-1"> Email </label>
         <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} require className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"/>
        </div>

        <div>
         <label htmlFor="username" className="block text-gray-700 mb-1">Username</label>
         <input type="text" id="username" name="username" placeholder="Enter your username" onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"/>
        </div>

        <div>
         <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
         <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"/>
        </div>

        <div>
         <label htmlFor="password_confirmation" className="block text-gray-700 mb-1">Confirm Password</label>
         <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm your password" onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"/>
        </div>

        <div>
         <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
           Sign Up
         </button>
        </div>
       </form>

       <p className="text-center text-sm mt-4 text-gray-700">Already have an account?{" "}
         <a href="/login" className="text-green-700 font-semibold underline">
           Login
         </a>
       </p>
      </div>
     </div>
    </div>
  );
}
