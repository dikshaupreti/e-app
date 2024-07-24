// src/services/CartService.ts

import Product from '../models/Product';

interface CartItem {
  product: Product;
  quantity: number;
}

class CartService {
  private cartItems: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }

  incrementQuantity(productId: number): void {
    const existingItem = this.cartItems.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    }
  }

  decrementQuantity(productId: number): void {
    const existingItem = this.cartItems.find(item => item.product.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    }
  }

  getTotalCartValue(): number {
    let total = this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    return Number(total.toFixed(2))
  }
}

const cartService = new CartService();
export default cartService;
