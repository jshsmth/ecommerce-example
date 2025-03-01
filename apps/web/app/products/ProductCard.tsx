import Image from "next/image";
import Link from "next/link";
import { Card } from "@repo/ui";
import { Product } from "../../lib/types/product";
import { StarRating } from "./components/StarRating";

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
}

export function ProductCard({ product, isNew = false }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <Card
      variant="outlined"
      padding="none"
      rounded="lg"
      shadow="sm"
      hoverEffect={true}
      className="group relative flex flex-col h-full bg-white transition-all duration-300 hover:shadow-md border border-gray-200/80 hover:border-gray-300 overflow-hidden rounded-xl"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-105"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {isNew && (
            <span className="bg-emerald-500/95 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm backdrop-blur-sm">
              NEW
            </span>
          )}
          <div className="flex items-center bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
            <span className="text-gray-900 text-sm font-semibold tracking-tight">
              {formattedPrice}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full font-medium tracking-wide uppercase">
            {product.category}
          </span>
          <StarRating />
        </div>

        <h3 className="font-semibold text-base text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1 mb-2">
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        <Link
          href={`/product?id=${product.id}`}
          className="mt-auto inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg transition-all duration-200 group/link"
        >
          View Details
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1"
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
        </Link>
      </div>
    </Card>
  );
}
