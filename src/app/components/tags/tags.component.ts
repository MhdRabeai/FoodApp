import { Component, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  @Input() foodPageTags?: string[];
  tags: Tag[] = [];
  constructor(private foodSer: FoodService) {}
  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodSer.gatAllTags();
  }
}
