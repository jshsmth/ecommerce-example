import { getProduct } from "./actions";
import type { Product } from "../../lib/types/product";
import Link from "next/link";
import ProductImageGallery from "./components/ProductImageGallery";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Product(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const id = searchParams.id;

  if (!id) {
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

  const productId = Array.isArray(id) ? id[0] : id;
  const product = await getProduct(productId as string);

  if (!product) {
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="overflow-hidden">
        <div className="md:flex md:gap-12 lg:gap-16">
          <ProductImageGallery
            images={product.images || []}
            title={product.title}
          />

          {/* Product Details */}
          <div className="md:w-1/2 pt-8 md:pt-0">
            <div className="mb-3">
              <Link
                href={`/category/${product.category?.id}`}
                className="inline-block px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {product.category?.name}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {product.title}
            </h1>

            <div className="mb-8 bg-blue-50 inline-block px-5 py-4 rounded-lg">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </span>
              {product.price > 100 && (
                <div className="mt-1 text-sm text-gray-600">
                  or 4 interest-free payments of $
                  {(product.price / 4).toFixed(2)}
                </div>
              )}
            </div>

            <div className="flex items-center mb-6">
              <div className="flex items-center bg-green-50 px-3 py-1.5 rounded-full">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium text-green-700">
                  In Stock
                </span>
              </div>
              <div className="ml-3 text-sm text-gray-500">
                <span>Usually ships within 24 hours</span>
              </div>
            </div>

            <div className="py-5 mb-6">
              <h3 className="text-lg font-medium mb-3">Description</h3>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>{product.description}</p>
                {product.description && product.description.length < 100 && (
                  <p>
                    This premium product offers exceptional quality and value.
                    Perfect for everyday use or as a special gift for someone
                    who appreciates fine craftsmanship.
                  </p>
                )}
              </div>
            </div>

            {/* Product Actions */}
            <div className="space-y-5">
              <div className="flex items-center">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mr-3"
                >
                  Quantity:
                </label>
                <select
                  id="quantity"
                  className="w-20 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <button className="w-full bg-blue-600 text-white py-3.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-medium shadow-sm hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
