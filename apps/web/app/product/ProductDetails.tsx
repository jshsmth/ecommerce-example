import ProductAvailability from "./ProductAvailability";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";
import { Product } from "../../lib/types/product";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="md:w-1/2 pt-8 md:pt-0 pb-8 pr-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
        {product.title}
      </h1>

      <ProductPrice price={product.price} />
      <ProductAvailability />
      <ProductDescription description={product.description} />

      <div className="space-y-5 mb-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
