import { Product } from "../../../lib/types/product";
import Image from "next/image";
import { Button } from "@repo/ui";

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
}

export function ProductCard({ product, isNew = false }: ProductCardProps) {
  // Mock rating - in a real app, this would come from the product data
  const rating = Math.floor(Math.random() * 5) + 1;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full border border-gray-100">
      <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden">
        <Image
          src={
            product.images?.[0] ||
            "https://placehold.co/300x200/e2e8f0/64748b?text=No+Image"
          }
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-3 rounded-full text-sm font-medium shadow-sm">
          {formattedPrice}
        </div>

        {isNew && (
          <div className="absolute top-0 left-0 bg-emerald-500 text-white px-3 py-1 m-3 rounded-full text-sm font-medium shadow-sm">
            New
          </div>
        )}

        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
            {product.images.slice(0, 4).map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${index === 0 ? "bg-white" : "bg-white/60"}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-xs px-2.5 py-1 bg-gray-100 rounded-full text-gray-700 font-medium">
            {product.category.name}
          </span>
        </div>

        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h3>

        <div className="flex items-center mt-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1.5">
            ({Math.floor(Math.random() * 100) + 1} reviews)
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-1 line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="mt-auto">
          <Button
            variant="primary"
            size="sm"
            className="w-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
          >
            <span className="inline-flex items-center">
              View Details
              <svg
                className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
