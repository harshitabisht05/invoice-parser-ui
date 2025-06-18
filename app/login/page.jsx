'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login
    if (email && password) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="p-8 bg-gray-100 rounded-lg shadow-md w-full max-w-md" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input type="email" placeholder="Email" className="mb-4 w-full p-2 border rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="mb-4 w-full p-2 border rounded" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <a className="text-blue-500" href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
