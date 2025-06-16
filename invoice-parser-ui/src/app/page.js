'use client';
import { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleParse = async () => {
    if (!selectedFile) return alert("Please upload a file first!");
    setLoading(true);

    // Simulated API call (replace this with your real endpoint)
    setTimeout(() => {
      setResult({
        vendor: "Acme Pvt Ltd",
        invoiceNo: "INV-00123",
        invoiceDate: "2025-06-12",
        dueDate: "2025-06-20",
        gst: "18%",
        transportCharges: "₹150",
        grandTotal: "₹4,320",
        lineItems: [
          { item: "Widget A", qty: 2, price: "₹1000", tax: "18%" },
          { item: "Widget B", qty: 1, price: "₹2000", tax: "18%" }
        ]
      });
      setLoading(false);
    }, 1500);

    // ✅ Real API call example:
    // const formData = new FormData();
    // formData.append("file", selectedFile);
    // try {
    //   const response = await axios.post("YOUR_API_ENDPOINT", formData);
    //   setResult(response.data);
    // } catch (err) {
    //   console.error(err);
    //   alert("Failed to parse invoice");
    // } finally {
    //   setLoading(false);
    // }
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    saveAs(blob, "invoice.json");
  };

  const downloadCSV = () => {
    const headers = ["Item", "Qty", "Price", "Tax"];
    const csvRows = [
      headers.join(","),
      ...result.lineItems.map(item => [item.item, item.qty, item.price, item.tax].join(","))
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    saveAs(blob, "invoice.csv");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">🧾 AI Invoice Parser</h1>

      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleParse}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Parsing..." : "Parse Invoice"}
      </button>

      {result && (
        <div className="mt-8 w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">📄 Parsed Invoice Data</h2>
          <p><strong>Vendor:</strong> {result.vendor}</p>
          <p><strong>Invoice No:</strong> {result.invoiceNo}</p>
          <p><strong>Invoice Date:</strong> {result.invoiceDate}</p>
          <p><strong>Due Date:</strong> {result.dueDate}</p>
          <p><strong>GST:</strong> {result.gst}</p>
          <p><strong>Transport Charges:</strong> {result.transportCharges}</p>
          <p><strong>Grand Total:</strong> {result.grandTotal}</p>

          <h3 className="mt-4 font-semibold">📦 Line Items:</h3>
          <table className="w-full table-auto mt-2 border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-2">Item</th>
                <th className="border px-2">Qty</th>
                <th className="border px-2">Price</th>
                <th className="border px-2">Tax</th>
              </tr>
            </thead>
            <tbody>
              {result.lineItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="border px-2">{item.item}</td>
                  <td className="border px-2">{item.qty}</td>
                  <td className="border px-2">{item.price}</td>
                  <td className="border px-2">{item.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex gap-4">
            <button onClick={downloadJSON} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Download JSON
            </button>
            <button onClick={downloadCSV} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Download CSV
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
