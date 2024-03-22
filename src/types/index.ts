import { PRODUCT_CATEGORIES } from "@/config"

type Category = (typeof PRODUCT_CATEGORIES)[number]
export interface NavItemProps {
    category: Category
  handleOpen: () => void
 // close: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

