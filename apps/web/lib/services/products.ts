import { ProductsData } from "../types/product";

/**
 * Fetches products from the API
 * @returns Promise containing product data
 */
export async function getProducts(): Promise<ProductsData> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/products`);

  if (!response.ok) {
    console.error("Error fetching products", response.statusText);
    return { products: [] };
  }

  return response.json();
}
