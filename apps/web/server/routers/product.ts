import { z } from "zod";
import { procedure, router } from "../trpc";
import axios from "axios";
import { Product, PaginatedProductsData } from "../../lib/types/product";

// Base URL for the API
const API_BASE_URL = "https://fakestoreapi.in/api";

export const productRouter = router({
  // Get all products with pagination
  getProducts: procedure
    .input(
      z.object({
        limit: z.number().default(20),
        page: z.number().default(1),
      })
    )
    .query(async ({ input }) => {
      try {
        const response = await axios.get<PaginatedProductsData>(
          `${API_BASE_URL}/products`,
          {
            params: {
              limit: input.limit,
              page: input.page,
            },
          }
        );

        // Calculate pagination info
        const offset = (input.page - 1) * input.limit;
        const nextOffset = offset + input.limit;
        const totalCount = response.data.totalCount || 100; // Temporary default for testing

        // Calculate if there are more pages
        const hasMore = nextOffset < totalCount;

        return {
          products: response.data.products || [],
          pagination: {
            limit: input.limit,
            offset: offset,
            nextOffset: nextOffset,
          },
          totalCount,
          hasMore,
        };
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
      }
    }),

  // Get a single product by ID
  getProduct: procedure.input(z.string()).query(async ({ input }) => {
    try {
      const response = await axios.get<{ product: Product }>(
        `${API_BASE_URL}/products/${input}`
      );
      return response.data.product;
    } catch (error) {
      console.error(`Error fetching product with ID ${input}:`, error);
      throw new Error("Failed to fetch product");
    }
  }),
});
