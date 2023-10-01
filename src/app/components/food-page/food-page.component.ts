import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent {
  food!: Food;
  constructor(
    private foodServ: FoodService,
    private activatedRoute: ActivatedRoute,
    private cartServ: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodServ.getFoodsById(params['id']);
      }
    });
  }
  ngOnInit(): void {}
  addToCart() {
    this.cartServ.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
