<<<<<<< HEAD
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
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
          <h2 className="text-4xl font-light text-white mb-3 tracking-wide">Create Account</h2>
          <p className="text-white/70 text-sm">Join us today and get started</p>
        </div>
        
        <form onSubmit={handleRegister} className="space-y-8">
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-blue-400 text-white placeholder-white/50 py-4 px-0 outline-none transition-all duration-300 text-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
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
              placeholder="Create a secure password"
              className="w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-blue-400 text-white placeholder-white/50 py-4 px-0 outline-none transition-all duration-300 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl py-4 mt-8 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>
        </form>
        
        <div className="text-center mt-10 pt-6 border-t border-white/10">
          <p className="text-white/70 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
=======
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        setSuccess('User registered successfully!');
        setError('');
        setTimeout(() => router.push('/login'), 1000);
      } else {
        const data = await response.json();
        setError(data.detail || 'Registration failed');
        setSuccess('');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
>>>>>>> b09669bd45b6c33dbc64cd647a93cb657181f69a
    </div>
  );
}
