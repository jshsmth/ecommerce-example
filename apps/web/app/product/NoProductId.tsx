import Link from "next/link";

export default function NoProductId() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          No Product ID Provided
        </h1>
        <p className="text-gray-600">
          Please provide a product ID using the query parameter: ?id=123
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
