import { Injectable, effect, signal } from "@angular/core";
import { CartItem } from "./cart";
import { Product } from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  eLength = effect(() => console.log('Cart array length:', this.cartItems().length));

  addToCart(product: Product): void {
    //this.cartItems().push({ product, quantity: 1 });
    //NB The signal is not updated by just changing thee value, we must create a ne obj to raise the signal
    this.cartItems.update(items => [...items, { product, quantity: 1 }]);
  }
}
