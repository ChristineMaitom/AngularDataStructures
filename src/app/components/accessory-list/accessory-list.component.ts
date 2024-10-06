import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessory: string = '';
  accessories: string[] = [];

  addAccessory() {
    if (this.accessory.trim()) {
      this.accessories.push(this.accessory.trim());
      this.accessory = ''; // Clear input after adding
    }
  }
}
