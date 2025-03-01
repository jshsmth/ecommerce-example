import Image from "next/image";

interface ProductImageProps {
  image: string;
  title: string;
}

export default function ProductImage({ image, title }: ProductImageProps) {
  return (
    <div className="md:w-1/2 relative">
      <div className="aspect-square w-full relative bg-white rounded-lg overflow-hidden border border-gray-100">
        <Image
          src={image || "/no-image.svg"}
          alt={title || "Product image"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
