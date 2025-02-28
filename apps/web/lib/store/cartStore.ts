import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  // Actions
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (item, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            const updatedItems = state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
            );

            return {
              items: updatedItems,
              totalItems: state.totalItems + quantity,
              totalPrice: state.totalPrice + item.price * quantity,
            };
          } else {
            const newItem = { ...item, quantity };

            return {
              items: [...state.items, newItem],
              totalItems: state.totalItems + quantity,
              totalPrice: state.totalPrice + item.price * quantity,
            };
          }
        }),

      removeItem: (itemId) =>
        set((state) => {
          const itemToRemove = state.items.find((i) => i.id === itemId);

          if (!itemToRemove) return state;

          return {
            items: state.items.filter((i) => i.id !== itemId),
            totalItems: state.totalItems - itemToRemove.quantity,
            totalPrice:
              state.totalPrice - itemToRemove.price * itemToRemove.quantity,
          };
        }),

      updateQuantity: (itemId, quantity) =>
        set((state) => {
          const itemToUpdate = state.items.find((i) => i.id === itemId);

          if (!itemToUpdate) return state;

          const quantityDiff = quantity - itemToUpdate.quantity;

          return {
            items: state.items.map((i) =>
              i.id === itemId ? { ...i, quantity } : i
            ),
            totalItems: state.totalItems + quantityDiff,
            totalPrice: state.totalPrice + itemToUpdate.price * quantityDiff,
          };
        }),

      clearCart: () =>
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        }),
    }),
    {
      name: "smithy-cart",
    }
  )
);
