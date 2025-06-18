'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    // Call FastAPI backend here
    // Send PDF, get JSON
  };

  const handleDownload = () => {
    // For now, simulate download
    alert('Download triggered (mock)');
  };

  return (
    <div className="min-h-screen p-6 bg-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">AI Invoice & Document Parser</h1>
      <input type="file" onChange={handleUpload} className="mb-4" />
      {file && (
        <div className="mb-4 text-sm text-gray-700">Uploaded: {file.name}</div>
      )}
      <button onClick={handleDownload} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Download Structured Data
      </button>
    </div>
  );
}
