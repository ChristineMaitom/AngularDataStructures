import { Component } from '@angular/core';

class City {
  country: any;
  name: any;
}

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities: City[] = [
    { name: 'Caloocan', country: 'Philippines' },
    { name: 'Bulacan', country: 'Philippines' },
    { name: 'Makati', country: 'Philippines' },
    { name: 'Quezon City', country: 'Philippines' },
    { name: 'Cebu City', country: 'Philippines' },
  ];

  newCity: City = { name: '', country: '' };

  addCity() {
    if (this.newCity.name && this.newCity.country) {
      this.cities.push({ ...this.newCity });
      this.newCity = { name: '', country: '' }; // Reset the input
    }
  }
}
