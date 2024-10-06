import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flowerName: string = '';
  flowers: string[] = [];

  addFlower() {
    if (this.flowerName.trim()) {
      this.flowers.push(this.flowerName.trim());
      this.flowerName = ''; // Clear input after adding
    }
  }
}
