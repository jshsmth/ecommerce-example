"use client";

export default function PaymentSuccess() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-center animate-fadeIn">
      <div className="bg-green-50 rounded-lg p-8 mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been processed
          successfully.
        </p>
        <p className="text-gray-500 text-sm">Redirecting to homepage...</p>
      </div>
    </div>
  );
}
