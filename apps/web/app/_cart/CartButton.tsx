import React from "react";
import { Button } from "@repo/ui";

interface CartButtonProps {
  totalItems: number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

export function CartButton({
  totalItems,
  isCartOpen,
  toggleCart,
}: CartButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="p-2 rounded-full text-gray-400 hover:text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors relative flex items-center justify-center"
      onClick={toggleCart}
      aria-label={`Shopping cart with ${totalItems} items`}
      aria-expanded={isCartOpen}
      aria-controls="shopping-cart-dropdown"
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
        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
          {totalItems}
        </span>
      )}
    </Button>
  );
}
