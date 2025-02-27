"use server";

import { ProductsData } from "../../lib/types/product";

/**
 * Fetches products directly from the external GraphQL API
 * @returns Promise containing product data
 */
export async function getProducts(): Promise<ProductsData> {
  try {
    const response = await fetch("https://api.escuelajs.co/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            products {
              id
              title
              price
              description
              category {
                id
                name
              }
              images
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] };
  }
}
