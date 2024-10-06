import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
  specification: string = '';
  specifications: string[] = [];

  addSpecification() {
    if (this.specification.trim()) {
      this.specifications.push(this.specification.trim());
      this.specification = ''; // Clear input after adding
    }
  }
}
