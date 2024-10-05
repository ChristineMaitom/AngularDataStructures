import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  searchTerm: string = '';
  newCarName: string = '';
  carModels = [
    { name: 'Toyota Camry', year: 2022 },
    { name: 'Honda Accord', year: 2021 },
    { name: 'Ford Mustang', year: 2023 },
    { name: 'Chevrolet Malibu', year: 2022 },
    { name: 'Nissan Altima', year: 2021 }
  ];

  filteredCarModels() {
    return this.carModels.filter(car =>
      car.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addCarModel() {
    if (this.newCarName) {
      this.carModels.push({ name: this.newCarName, year: new Date().getFullYear() });
      this.newCarName = ''; // Clear the input after adding
    }
  }
}
