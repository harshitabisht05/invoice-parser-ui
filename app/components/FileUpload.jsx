// ✅ Correct default export
export default function FileUpload({ onChange }) {
  return (
    <input
      type="file"
      accept=".pdf,.jpg,.png"
      onChange={onChange}
      className="mb-4 block w-full text-sm text-gray-700"
    />
  );
}
