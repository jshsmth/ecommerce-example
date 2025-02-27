"use server";

import { PaginatedProductsData } from "../../lib/types/product";

/**
 * Fetches products directly from the external GraphQL API
 * @param limit Number of products to fetch
 * @param offset Starting position for pagination
 * @returns Promise containing paginated product data
 */
export async function getProducts(
  limit = 10,
  offset = 0
): Promise<PaginatedProductsData> {
  try {
    const response = await fetch("https://api.escuelajs.co/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            products(limit: ${limit}, offset: ${offset}) {
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

    return {
      products: data.products || [],
      pagination: {
        limit,
        offset,
        nextOffset: offset + limit,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      products: [],
      pagination: {
        limit,
        offset,
        nextOffset: offset + limit,
      },
    };
  }
}
