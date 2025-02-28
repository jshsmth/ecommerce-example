"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  // Close the cart dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={cartRef}>
      <button
        className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-50 transition-colors"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </button>

      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-100">
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-gray-900">Shopping Cart</p>
            <div className="mt-3 bg-gray-50 p-4 rounded-md">
              <p className="text-xs text-gray-500">
                Your cart content will appear here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
