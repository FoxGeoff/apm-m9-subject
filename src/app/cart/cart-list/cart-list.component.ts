import { Component, Inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CartItem } from '../cart';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'sw-cart-list',
  standalone: true,
  imports: [CartItemComponent, NgFor, NgIf],
  templateUrl: 'cart-list.component.html'
})
export class CartListComponent {
  pageTitle = 'Cart';

  // Updated: for DI of service for a StandAlone Component
  cartService = Inject(CartService)

  cartItems = this.cartService.cartItems;
}