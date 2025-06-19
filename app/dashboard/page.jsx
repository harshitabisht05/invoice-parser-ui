'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';


export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Mock data
    const mockFiles = [
      {
        id: 1,
        filename: 'Invoice_June_2025.pdf',
        created_at: new Date().toISOString(),
        status: '✅ Processed',
      },
      {
        id: 2,
        filename: 'Invoice_July_2025.pdf',
        created_at: new Date().toISOString(),
        status: '⏳ Pending',
      },
    ];
    setTimeout(() => {
      setFiles(mockFiles);
      setLoading(false);
    }, 800);
  }, []);

  const handleDelete = (id) => {
    alert(`Deleting file ID: ${id}`);
    setFiles(files.filter((file) => file.id !== id));
  };

  const viewDetails = (id) => {
    alert(`Viewing details for file ID: ${id}`);
  };

  if (loading)
    return <p className="text-center text-lg mt-16 animate-pulse">🔄 Loading invoices...</p>;

  if (error)
    return <p className="text-red-500 text-center mt-16">{error}</p>;

  if (files.length === 0)
    return <p className="text-center text-gray-500 mt-16">No invoices uploaded yet.</p>;

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          📂 Uploaded Invoices
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{file.filename}</h2>
                <p className="text-sm text-gray-500">
                  ⏱️ Uploaded: {new Date(file.created_at).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">{file.status}</p>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => viewDetails(file.id)}
                  className="flex-1 text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  👀 View
                </button>
                <button
                  onClick={() => handleDelete(file.id)}
                  className="flex-1 text-sm bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
