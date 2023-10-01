import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cart!: Cart;
  constructor(
    private cartServ: CartService,
    private router: Router,
    private foodServ: FoodService
  ) {
    let foods = foodServ.getAll();
    cartServ.addToCart(foods[1]);
    cartServ.addToCart(foods[2]);
    cartServ.addToCart(foods[3]);
    this.setCart();
  }
  ngAfterContentChecked(): void {
    if (this.cart.items.length === 0) {
      this.router.navigateByUrl('');
    }
    this.setCart();
  }
  setCart() {
    this.cart = this.cartServ.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartServ.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityString: string) {
    const quantity = +quantityString;
    this.cartServ.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
