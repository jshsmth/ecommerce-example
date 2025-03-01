"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../lib/store/cartStore";
import { CartButton } from "./CartButton";
import { CartDropdown } from "./CartDropdown";

export function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState<number | null>(null);
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

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleQuantityUpdate = async (itemId: number, newQuantity: number) => {
    setIsUpdating(itemId);
    updateQuantity(itemId, newQuantity);
    setIsUpdating(null);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push("/checkout");
  };

  return (
    <div className="relative" ref={cartRef}>
      <CartButton
        totalItems={totalItems}
        isCartOpen={isCartOpen}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      {isCartOpen && (
        <CartDropdown
          items={items}
          isUpdating={isUpdating}
          totalPrice={totalPrice}
          onRemoveItem={removeItem}
          onUpdateQuantity={handleQuantityUpdate}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}
