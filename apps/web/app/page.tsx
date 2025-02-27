// Import the Tailwind CSS
import "@repo/ui/styles";
import { getProducts } from "./products/actions";

export default async function Home() {
  const data = await getProducts();
  return (
    <div className="container mx-auto px-4 py-8">
      <p>Products</p>
      {data?.products && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-sm">
                <h3 className="font-medium">{product.title}</h3>
                <p className="text-gray-600 mt-1">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
