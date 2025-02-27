"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

export default function ProductImageGallery({
  images,
  title,
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="md:w-1/2 flex flex-col">
      <div className="relative h-80 sm:h-96 w-full mb-6 rounded-xl bg-gray-50">
        {images && images.length > 0 ? (
          <>
            <div
              className="absolute inset-0 overflow-hidden rounded-xl"
              style={{ borderRadius: "0.75rem" }}
            >
              <Image
                src={images[selectedImageIndex] || ""}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3">
                <button
                  onClick={handlePrevious}
                  className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}

            {images.length > 1 && (
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-400 mt-2">No image available</p>
            </div>
          </div>
        )}
      </div>

      {images && images.length > 0 && (
        <div
          className={`grid gap-4 ${
            images.length === 1
              ? "hidden"
              : images.length === 2
                ? "grid-cols-2"
                : images.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
          }`}
        >
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="aspect-square relative"
              onClick={() => handleThumbnailClick(index)}
              role="button"
              aria-label={`View ${title} - image ${index + 1}`}
            >
              <div
                className={`absolute inset-0 z-10 rounded-xl ${
                  selectedImageIndex === index
                    ? "border-2 border-blue-500"
                    : "border border-transparent"
                }`}
              ></div>
              <div className="absolute inset-[3px] rounded-xl overflow-hidden">
                <Image
                  src={image || ""}
                  alt={`${title} - view ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 25vw, 12vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
