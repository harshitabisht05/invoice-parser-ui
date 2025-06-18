"use client";

import { useState } from "react";
import FileUpload from "./components/FileUpload";
import ParseButton from "./components/ParseButton";
import ParsedResult from "./components/ParsedResult";

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setData(null);
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file");
    setLoading(true);

    setTimeout(() => {
      setData({
        vendor: "TCS Ltd.",
        invoiceNumber: "TCS2025-001",
        date: "2025-06-15",
        totalAmount: "₹12,000",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          🧾 AI Invoice Parser
        </h1>

        <FileUpload onChange={handleFileChange} />
        <ParseButton onClick={handleUpload} loading={loading} />
        {data && <ParsedResult data={data} />}
      </div>
    </main>
  );
}
