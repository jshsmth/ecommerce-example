import { Product } from "../../../lib/types/product";
import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@repo/ui";
import { StarRating } from "./StarRating";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
}

export function ProductCard({ product, isNew = false }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const [imgSrc, setImgSrc] = useState<string>(
    product.images?.[0] || "/no-image.svg"
  );
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <Card
      variant="outlined"
      padding="none"
      rounded="lg"
      shadow="sm"
      hoverEffect={true}
      className="group flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden">
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
          onError={() => {
            if (!imgError) {
              setImgSrc("/no-image.svg");
              setImgError(true);
            }
          }}
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-3 rounded-full text-sm font-medium shadow-sm">
          {formattedPrice}
        </div>

        {isNew && (
          <div className="absolute top-0 left-0 bg-emerald-500 text-white px-3 py-1 m-3 rounded-full text-sm font-medium shadow-sm">
            New
          </div>
        )}

        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
            {product.images.slice(0, 4).map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${index === 0 ? "bg-white" : "bg-white/60"}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-xs px-2.5 py-1 bg-gray-100 rounded-full text-gray-700 font-medium">
            {product.category.name}
          </span>
        </div>

        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h3>

        <div className="mt-2 mb-3">
          <StarRating />
        </div>

        <p className="text-gray-600 text-sm mt-1 line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="mt-auto">
          <Link href={`/product?id=${product.id}`} passHref>
            <Button
              variant="primary"
              size="sm"
              className="w-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
            >
              <span className="inline-flex items-center">
                View Details
                <svg
                  className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
