interface ProductPriceProps {
  price: number;
}

export default function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div className="mb-8 bg-blue-50 inline-block px-5 py-4 rounded-lg">
      <span className="text-3xl font-bold text-blue-600">
        ${price.toFixed(2)}
      </span>
      {price > 100 && (
        <div className="mt-1 text-sm text-gray-600">
          or 4 interest-free payments of ${(price / 4).toFixed(2)}
        </div>
      )}
    </div>
  );
}
