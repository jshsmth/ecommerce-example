import Link from "next/link";

interface ProductNotFoundProps {
  id: string | string[] | undefined;
}

export default function ProductNotFound({ id }: ProductNotFoundProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          We couldn&apos;t find a product with ID:{" "}
          <span className="font-medium">{id}</span>
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
