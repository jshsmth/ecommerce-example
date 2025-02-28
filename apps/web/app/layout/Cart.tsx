"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../lib/store/cartStore";
import { Button } from "@repo/ui";

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
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
      <Button
        variant="outline"
        size="sm"
        className="p-2 rounded-full text-gray-400 hover:text-blue-500 focus:ring-blue-500 transition-colors relative flex items-center justify-center"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>

      {isCartOpen && (
        <div className="absolute right-0 mt-3 w-96 bg-white rounded-lg shadow-xl py-4 z-20 border border-gray-200 max-h-[80vh] overflow-auto">
          <div className="px-6 py-4 border-b border-gray-200">
            <p className="text-base font-medium text-gray-900">Shopping Cart</p>
          </div>

          {items.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 mx-auto"
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
              <p className="text-sm text-gray-500 mt-2">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="px-6 py-4 flex items-center gap-4"
                  >
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="ml-2 flex-1">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1 mb-2">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-gray-50 rounded-md p-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 p-0 border-0 shadow-none h-9 w-9 flex items-center justify-center bg-white rounded-md"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </Button>
                          <span className="mx-3 text-sm text-gray-700 w-5 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 p-0 border-0 shadow-none h-9 w-9 flex items-center justify-center bg-white rounded-md"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </Button>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-2 text-gray-400 hover:text-gray-600 border-0 shadow-none h-10 w-10 flex items-center justify-center bg-transparent hover:bg-gray-50 rounded-full"
                      onClick={() => removeItem(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-gray-200 mt-2">
                <div className="flex justify-between text-sm font-medium text-gray-900 mb-4">
                  <p className="text-base">Subtotal</p>
                  <p className="text-base">${totalPrice.toFixed(2)}</p>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full text-white font-medium py-3"
                  onClick={() => {
                    setIsCartOpen(false);
                    router.push("/checkout");
                  }}
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
