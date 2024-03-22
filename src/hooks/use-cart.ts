import { Product } from '@/payload-types';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware'
type cartItem = {
    product : Product
}
type cartState = {
    items : cartItem[]
    addItem : (product : Product) => void
    removeItem : (productId: string) => void
    clearCart : () => void
}
export const useCart = create<cartState>()(
    persist (
        (set) => ({
            items: [],
            addItem: (product) =>
        set((state) => {
          return { items: [...state.items, { product }] }
        }),
        removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.product.id !== id
          ),
        })),
        clearCart: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
          }
    )
)
