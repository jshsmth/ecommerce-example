import React from "react";

interface HeroBannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function HeroBanner({
  title = "Discover Amazing Products",
  description = "Browse our curated collection of high-quality products designed to enhance your everyday life.",
  primaryButtonText = "Shop Now",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
}: HeroBannerProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm mb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-12 lg:p-16 md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">{description}</p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </button>
              <button
                className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-96 relative bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="aspect-square rounded-lg bg-white shadow-md p-4 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xl">New</span>
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white shadow-md p-4 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-indigo-100 rounded flex items-center justify-center">
                  <span className="text-indigo-500 font-bold text-xl">
                    Sale
                  </span>
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white shadow-md p-4 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-purple-100 rounded flex items-center justify-center">
                  <span className="text-purple-500 font-bold text-xl">Top</span>
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white shadow-md p-4 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-pink-100 rounded flex items-center justify-center">
                  <span className="text-pink-500 font-bold text-xl">Hot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
