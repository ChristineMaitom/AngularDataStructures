import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  newFoodItem: string = '';
  foodItems: string[] = [];

  addFoodItem() {
    if (this.newFoodItem.trim()) {
      this.foodItems.push(this.newFoodItem.trim());
      this.newFoodItem = ''; // Clear the input field
    }
  }
}
