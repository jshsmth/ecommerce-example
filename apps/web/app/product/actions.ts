"use server";

import { Product } from "../../lib/types/product";

/**
 * Fetches a single product by ID from the external GraphQL API
 * @param id The ID of the product to fetch
 * @returns Promise containing the product data
 */
export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch("https://api.escuelajs.co/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            product(id: "${id}") {
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

    return data.product || null;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}
