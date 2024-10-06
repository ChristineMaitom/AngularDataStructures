import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitureItem: string = '';
  furnitureItems: string[] = [];

  addFurniture() {
    if (this.furnitureItem.trim()) {
      this.furnitureItems.push(this.furnitureItem.trim());
      this.furnitureItem = ''; // Clear input after adding
    }
  }
}
