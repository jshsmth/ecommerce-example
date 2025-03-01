interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <div className="py-5 mb-6">
      <h3 className="text-lg font-medium mb-3">Description</h3>
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>{description}</p>
      </div>
    </div>
  );
}
