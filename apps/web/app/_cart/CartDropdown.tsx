import React from "react";
import { CartItemType } from "./types";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

interface CartDropdownProps {
  items: CartItemType[];
  isUpdating: number | null;
  totalPrice: number;
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onCheckout: () => void;
}

export function CartDropdown({
  items,
  isUpdating,
  totalPrice,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
}: CartDropdownProps) {
  return (
    <div
      className="fixed sm:absolute right-0 top-16 sm:top-auto sm:mt-3 w-screen sm:w-[350px] md:w-96 bg-white rounded-lg shadow-xl py-4 z-20 border border-gray-200 max-h-[calc(100vh-5rem)] overflow-auto animate-slide-in"
      id="shopping-cart-dropdown"
      role="dialog"
      aria-label="Shopping cart contents"
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <p className="text-base font-medium text-gray-900">Shopping Cart</p>
      </div>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                isUpdating={isUpdating}
                onRemove={onRemoveItem}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>

          <CartSummary totalPrice={totalPrice} onCheckout={onCheckout} />
        </>
      )}
    </div>
  );
}
