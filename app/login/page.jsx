"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')",
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl px-12 py-12 w-full max-w-lg mx-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-light text-white mb-3 tracking-wide">Welcome Back</h2>
          <p className="text-white/70 text-sm">Sign in to continue to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-blue-400 text-white placeholder-white/50 py-4 px-0 outline-none transition-all duration-300 text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-blue-400 text-white placeholder-white/50 py-4 px-0 outline-none transition-all duration-300 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-transparent border-2 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-white/80 text-sm">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl py-4 mt-8 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </form>
        
        <div className="text-center mt-10 pt-6 border-t border-white/10">
          <p className="text-white/70 text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
