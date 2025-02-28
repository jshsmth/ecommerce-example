"use client";

import { useState } from "react";
import { Button } from "@repo/ui";

interface PaymentFormProps {
  isProcessing: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function PaymentForm({
  isProcessing,
  onSubmit,
}: PaymentFormProps) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Payment Information
      </h2>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="cardName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name on Card
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Smith"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="4242 4242 4242 4242"
            required
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="123"
              required
            />
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full py-4 text-white font-medium"
          disabled={isProcessing}
          onClick={() =>
            onSubmit(new Event("click") as unknown as React.FormEvent)
          }
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            "Process Payment"
          )}
        </Button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          This is a demo checkout. No actual payment will be processed.
        </p>
      </form>
    </div>
  );
}
