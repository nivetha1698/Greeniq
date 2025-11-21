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

      setMessage("Login successfull");
    } catch (err) {
      console.error(err);
      setMessage("Invalid credentials ❌");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center" style={{backgroundImage: "url('/background.png')",}}>
    <div className="absolute inset-0 bg-black/50 z-0"></div>
     <div className="relative z-10 w-full max-w-md px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
       <div className="text-center pb-2">
        <h2 className="text-2xl font-bold text-center text-green-700">Login</h2>
       </div>

       <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-white mb-1">Email</label>
          <input type="email" id="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="password" className="block text-white mb-1">Password</label>
          <input type="password" id="password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required/>
        </div>

        <div>
          <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Login
          </button>
        </div>

        {message && (
          <p className="mt-2 text-center text-sm text-red-600">{message}</p>
        )}

        <div className="text-center mt-2">
          <a href="/signup" className="text-center underline font-semibold text-sm text-green-700">
            Create an Account
          </a>
        </div>
       </form>
      </div>
    </div>
   </div>
  );
}
