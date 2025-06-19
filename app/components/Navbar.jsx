'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out!');
    router.push('/login');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div
          onClick={() => router.push('/dashboard')}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          🧾 InvoiceParser
        </div>

        {/* Conditional Navigation Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {pathname === '/login' && (
            <button
              onClick={() => router.push('/register')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Register
            </button>
          )}

          {pathname === '/register' && (
            <button
              onClick={() => router.push('/login')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </button>
          )}

          {(pathname === '/dashboard' || pathname === '/upload') && (
            <>
              {pathname === '/dashboard' && (
                <button
                  onClick={() => router.push('/upload')}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Upload
                </button>
              )}
              {pathname === '/upload' && (
                <button
                  onClick={() => router.push('/dashboard')}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Dashboard
                </button>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
