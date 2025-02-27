// Import the Tailwind CSS
import "@repo/ui/styles";
import { getProducts } from "./products/actions";
import ProductsTable from "./products/components/ProductsTable";
export default async function Home() {
  const data = await getProducts(10, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      <ProductsTable initialData={data} />
    </div>
  );
}
