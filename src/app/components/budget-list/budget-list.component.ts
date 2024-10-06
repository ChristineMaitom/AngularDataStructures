import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  newBudgetItem: string = '';
  budgetItems: string[] = [];

  addBudgetItem() {
    if (this.newBudgetItem.trim()) {
      this.budgetItems.push(this.newBudgetItem.trim());
      this.newBudgetItem = ''; // Clear the input field after adding
    }
  }
}
