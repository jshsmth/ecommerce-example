"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui";

export default function EmptyCart() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-center animate-fadeIn">
      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven&apos;t added any items to your cart yet.
        </p>
        <Button
          variant="primary"
          size="md"
          className="px-8"
          onClick={() => router.push("/")}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
