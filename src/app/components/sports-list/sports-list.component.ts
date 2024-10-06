import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  newCountry: string = '';
  countries: string[] = [];

  addCountry() {
    if (this.newCountry.trim()) {
      this.countries.push(this.newCountry.trim());
      this.newCountry = ''; // Clear the input field
    }
  }
}
