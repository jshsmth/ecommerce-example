import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NoProductId() {
  const searchParams = useSearchParams();
  const returnPage = searchParams?.get("returnPage") || "1";
  const returnLimit = searchParams?.get("returnLimit") || "10";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          No Product ID Provided
        </h1>
        <p className="text-gray-600">
          Please provide a product ID using the query parameter: ?id=123
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href={`/?page=${returnPage}&limit=${returnLimit}`}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Return to Products
          </Link>
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
