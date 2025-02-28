import { z } from "zod";
import { procedure, router } from "../trpc";
import { productRouter } from "./product";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  // Merge the product router
  product: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
