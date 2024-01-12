# Apm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Project Introduction

### Module 11:1 Define the Cart

1. Define the Signal

```typescript
export class CartListComponent {
  pageTitle = 'Cart';

  // Updated: for DI of service for a StandAlone Component
  cartService = Inject(CartService)

  cartItems = this.cartService.cartItems;
}
```

### Module 11:2 Add Products to the Cart

1. Update service
2. Update ProductDetailComponent
3. Run from menu `Run/Start Debug`  and check `DEBUG CONSOLE` window
