// Import the Tailwind CSS
import "@repo/ui/styles";
import { ProductsTable } from "./products/ProductTable";
import HeroBanner from "./HeroBanner";

export default async function Home() {
  return (
    <div className="animate-fadeIn">
      <HeroBanner />
      <ProductsTable />
    </div>
  );
}
