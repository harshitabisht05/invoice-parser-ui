'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="p-8 bg-gray-100 rounded-lg shadow-md w-full max-w-md" onSubmit={handleRegister}>
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <input type="email" placeholder="Email" className="mb-4 w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" className="mb-4 w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
      </form>
    </div>
  );
}
