export default function ParseButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
    >
      {loading ? "Parsing..." : "Upload & Parse"}
    </button>
  );
}
