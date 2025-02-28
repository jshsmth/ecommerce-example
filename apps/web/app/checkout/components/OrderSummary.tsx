"use client";

import Image from "next/image";
import { CartItem } from "../../../lib/store/cartStore";

interface OrderSummaryProps {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export default function OrderSummary({
  items,
  totalItems,
  totalPrice,
}: OrderSummaryProps) {
  const tax = totalPrice * 0.08;
  const total = totalPrice + tax;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
        <p className="text-sm text-gray-500 mt-1">
          {totalItems} item{totalItems !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.id} className="px-6 py-4 flex items-center gap-4">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 line-clamp-1 mb-1">
                {item.title}
              </p>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-sm font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-gray-50">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <p>Tax</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-medium text-base text-gray-900 pt-4 border-t border-gray-200">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
