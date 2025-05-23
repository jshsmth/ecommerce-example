import React from "react";
import { Button } from "@repo/ui";

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
          <div className="p-6 md:p-12 lg:p-16 md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 mx-auto md:mx-0 max-w-md">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-8 md:mb-0">
              <Button
                variant="primary"
                size="md"
                onClick={onPrimaryClick}
                className="md:px-6 md:py-3"
              >
                {primaryButtonText}
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={onSecondaryClick}
                className="md:px-6 md:py-3"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-96 relative bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center p-4 md:p-8">
            <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-xs md:max-w-md">
              <div className="aspect-square rounded-lg bg-white shadow-md p-2 md:p-4 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-lg md:text-xl">
                    New
                  </span>
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white shadow-md p-2 md:p-4 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-indigo-100 rounded flex items-center justify-center">
                  <span className="text-indigo-500 font-bold text-lg md:text-xl">
                    Sale
                  </span>
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white shadow-md p-2 md:p-4 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-purple-100 rounded flex items-center justify-center">
                  <span className="text-purple-500 font-bold text-lg md:text-xl">
                    Top
                  </span>
                </div>
              </div>
              <div className="aspect-square rounded-lg bg-white shadow-md p-2 md:p-4 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-pink-100 rounded flex items-center justify-center">
                  <span className="text-pink-500 font-bold text-lg md:text-xl">
                    Hot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
