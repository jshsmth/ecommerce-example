// Import the Tailwind CSS
import "@repo/ui/styles";
import { getProducts } from "./products/actions";
import { ProductsTable } from "./products/components/ProductTable";
import HeroBanner from "./components/HeroBanner";

export default async function Home() {
  const data = await getProducts(10, 0);

  return (
    <div className="animate-fadeIn">
      <HeroBanner />

      <ProductsTable initialData={data} />
    </div>
  );
}
