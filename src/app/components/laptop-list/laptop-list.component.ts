import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptopModel: string = '';
  laptopModels: string[] = [];

  addLaptop() {
    if (this.laptopModel.trim()) {
      this.laptopModels.push(this.laptopModel.trim());
      this.laptopModel = ''; // Clear input after adding
    }
  }
}
