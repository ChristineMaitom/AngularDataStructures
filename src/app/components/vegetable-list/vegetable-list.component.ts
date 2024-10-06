import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  newVegetable: string = '';
  vegetables: string[] = [];

  addVegetable() {
    if (this.newVegetable.trim()) {
      this.vegetables.push(this.newVegetable.trim());
      this.newVegetable = ''; // Clear the input field
    }
  }
}
