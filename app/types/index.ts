export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  badge?: "bestseller" | "sale" | "new";
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface CheckoutData {
  email: string;
  items: CartItem[];
  total: number;
}
