import React from "react";
import Image from "next/image";
import { Button } from "@repo/ui";
import { CartItemType } from "./types";

interface CartItemProps {
  item: CartItemType;
  isUpdating: number | null;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export function CartItem({
  item,
  isUpdating,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  return (
    <div className="px-3 sm:px-6 py-4 flex items-start gap-2 sm:gap-4 animate-fade-in">
      <div className="h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 64px, 80px"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhwYHDIYGDIdHRkyLR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1 sm:gap-2">
          <p className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-1">
            {item.title}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="flex-shrink-0 p-0 border-0 shadow-none h-10 w-10 flex items-center justify-center bg-transparent transition-colors cursor-pointer border-none -mt-1.5"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.title} from cart`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-7 sm:w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="oklch(0.577 0.245 27.325)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </Button>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mt-2">
          <div className="flex items-center bg-gray-50 rounded-md p-1">
            <Button
              variant="outline"
              size="sm"
              className="text-gray-500 hover:text-gray-700 p-0 border-0 shadow-none h-7 w-7 sm:h-9 sm:w-9 flex items-center justify-center bg-white rounded-md disabled:opacity-50 transition-opacity"
              onClick={() =>
                onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
              disabled={isUpdating === item.id}
              aria-label={`Decrease quantity of ${item.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
              </svg>
            </Button>
            <span className="mx-2 sm:mx-3 text-xs sm:text-sm text-gray-700 w-4 sm:w-5 text-center font-medium transition-all">
              {item.quantity}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="text-gray-500 hover:text-gray-700 p-0 border-0 shadow-none h-7 w-7 sm:h-9 sm:w-9 flex items-center justify-center bg-white rounded-md disabled:opacity-50 transition-opacity"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              disabled={isUpdating === item.id}
              aria-label={`Increase quantity of ${item.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </Button>
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-900 transition-all w-16 sm:w-20 text-right">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
