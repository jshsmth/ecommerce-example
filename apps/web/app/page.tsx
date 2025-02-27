// Import the Tailwind CSS
import "@repo/ui/styles";
import { getProducts } from "./products/actions";
import { ProductsTable } from "./products/components/ProductTable";
export default async function Home() {
  const data = await getProducts();
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductsTable initialData={data} />
    </div>
  );
}
