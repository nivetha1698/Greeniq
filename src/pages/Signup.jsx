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
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
         SignUp 🌿
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 font-semibold underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
