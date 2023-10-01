import { Food } from 'src/app/shared/models/food';
import { FoodService } from './../../services/food/food.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodServ: FoodService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodServ.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      } else this.foods = this.foodServ.getAll();

      if (params['tag']) {
        this.foods = this.foodServ.getAllFoodsByTag(params['tag']);
      }
    });
  }
}
