"use client";

import { use } from "react";
import { trpc } from "../providers";
import { LoadingSkeleton } from "../layout/Skeleton";
import NoProductId from "./NoProductId";
import ProductNotFound from "./ProductNotFound";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function Product(props: { searchParams: SearchParams }) {
  const searchParams = use(props.searchParams);
  const id = searchParams.id;

  if (!id) {
    return <NoProductId />;
  }

  const productQuery = trpc.product.getProduct.useQuery(id as string);

  if (productQuery.isError) {
    return <ProductNotFound id={id} />;
  }

  if (productQuery.isLoading) {
    return <LoadingSkeleton />;
  }

  if (productQuery.isSuccess) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="overflow-hidden">
          <div className="md:flex md:gap-12 lg:gap-16">
            <ProductImage
              image={productQuery.data.image}
              title={productQuery.data.title}
            />
            <ProductDetails product={productQuery.data} />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
