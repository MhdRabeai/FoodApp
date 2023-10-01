import { CartItem } from './cartitem';

export class Cart {
  items: CartItem[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((ele) => {
      totalPrice += ele.price;
    });
    return totalPrice;
  }
}
