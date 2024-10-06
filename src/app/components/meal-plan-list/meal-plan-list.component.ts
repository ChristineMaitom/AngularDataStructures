import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  newMeal: string = '';
  meals: string[] = [];

  addMeal() {
    if (this.newMeal.trim()) {
      this.meals.push(this.newMeal.trim());
      this.newMeal = ''; // Clear the input field after adding
    }
  }
}
