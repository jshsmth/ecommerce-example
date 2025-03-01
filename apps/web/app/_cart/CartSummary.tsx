import React from "react";
import { Button } from "@repo/ui";

interface CartSummaryProps {
  totalPrice: number;
  onCheckout: () => void;
}

export function CartSummary({ totalPrice, onCheckout }: CartSummaryProps) {
  return (
    <div className="px-3 sm:px-6 py-4 border-t border-gray-200 mt-2">
      <div className="flex justify-between text-sm font-medium text-gray-900 mb-4">
        <p className="text-sm sm:text-base">Subtotal</p>
        <p className="text-sm sm:text-base transition-all">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
      <Button
        variant="primary"
        size="md"
        className="w-full text-white font-medium py-2 sm:py-3"
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  );
}
