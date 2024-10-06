import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  itemName: string = '';
  items: string[] = [];

  addItem() {
    if (this.itemName.trim()) {
      this.items.push(this.itemName.trim());
      this.itemName = ''; // Clear input after adding
    }
  }
}
