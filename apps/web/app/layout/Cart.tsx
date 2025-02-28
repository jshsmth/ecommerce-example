"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "../../lib/store/cartStore";

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const { items, totalItems, totalPrice, removeItem, updateQuantity } =
    useCartStore();

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
        className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-50 transition-colors relative"
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
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-100 max-h-[80vh] overflow-auto">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">Shopping Cart</p>
          </div>

          {items.length === 0 ? (
            <div className="px-4 py-6 text-center">
              <div className="text-gray-400 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
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
              <p className="text-sm text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <div key={item.id} className="px-4 py-3 flex items-center">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="text-gray-500 hover:text-gray-700 p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          </button>
                          <span className="mx-1 text-xs text-gray-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-500 hover:text-gray-700 p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="px-4 py-3 border-t border-gray-100">
                <div className="flex justify-between text-sm font-medium text-gray-900 mb-3">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  onClick={() => {
                    setIsCartOpen(false);
                    // You could navigate to checkout page here
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
