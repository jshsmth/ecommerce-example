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
      className="absolute right-0 mt-3 w-96 bg-white rounded-lg shadow-xl py-4 z-20 border border-gray-200 max-h-[80vh] overflow-auto animate-slide-in"
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
