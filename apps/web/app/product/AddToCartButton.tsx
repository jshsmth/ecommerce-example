import { Button } from "@repo/ui";
import { Product } from "../../lib/types/product";
import { useCartStore } from "../../lib/store/cartStore";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCartStore();
  const searchParams = useSearchParams();
  const [isAdded, setIsAdded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const returnPage = searchParams?.get("returnPage") || "1";
  const returnLimit = searchParams?.get("returnLimit") || "10";

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      1
    );

    setIsAdded(true);

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="space-y-5">
      <Button
        variant="primary"
        size="lg"
        className={`w-full flex items-center justify-center transition-all duration-300 ${
          isAnimating ? "animate-pulse scale-105" : ""
        } ${isAdded ? "bg-green-600 hover:bg-green-700" : ""}`}
        onClick={handleAddToCart}
        disabled={isAnimating}
      >
        {isAdded ? (
          <>
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Added to Cart!
          </>
        ) : (
          <>
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
          </>
        )}
      </Button>

      <Link
        href={`/?page=${returnPage}&limit=${returnLimit}`}
        className="mt-4 w-full flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 border border-gray-200"
      >
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Products
      </Link>
    </div>
  );
}
