import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        const items = get().items
        const existing = items.find((i) => i.id === item.id)

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          set({
            items: [...items, item],
          });
        }
      },

      decreaseQuantity: (id) => {
        const items = get().items
        const item = items.find((i) => i.id === id)

        if (!item) return

        if (item.quantity === 1) {
          
          set({
            items: items.filter((i) => i.id !== id),
          })
        } else {
         
          set({
            items: items.map((i) =>
              i.id === id
                ? { ...i, quantity: i.quantity - 1 }
                : i
            ),
          })
        }
      },

      removeFromCart: (id) => {
        set({
          items: get().items.filter((i) => i.id !== id),
        })
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
)