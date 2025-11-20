import { useState } from "react";
import { signInUser } from "../api/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await signInUser({ email, password });
      console.log(res);

      setMessage("Login successful! 🎉");
    } catch (err) {
      setMessage("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Login
        </button>

        {message && (
          <p className="mt-3 text-center text-sm text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}
