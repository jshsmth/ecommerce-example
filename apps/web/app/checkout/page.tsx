"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../lib/store/cartStore";
import OrderSummary from "./components/OrderSummary";
import PaymentForm from "./components/PaymentForm";
import EmptyCart from "./components/EmptyCart";
import PaymentSuccess from "./components/PaymentSuccess";

export default function Checkout() {
  const router = useRouter();
  const { items, totalItems, totalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);

      setTimeout(() => {
        clearCart();
        router.push("/");
      }, 2000);
    }, 1500);
  };

  if (paymentSuccess) {
    return <PaymentSuccess />;
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      <div className="lg:flex lg:gap-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <OrderSummary
            items={items}
            totalItems={totalItems}
            totalPrice={totalPrice}
          />
        </div>

        <div className="lg:w-1/2">
          <PaymentForm isProcessing={isProcessing} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
