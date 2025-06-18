export default function ParsedResult({ data }) {
  return (
    <div className="mt-6 bg-indigo-50 p-4 rounded text-sm">
      <p><strong>Vendor:</strong> {data.vendor}</p>
      <p><strong>Invoice Number:</strong> {data.invoiceNumber}</p>
      <p><strong>Date:</strong> {data.date}</p>
      <p><strong>Total Amount:</strong> {data.totalAmount}</p>
    </div>
  );
}
