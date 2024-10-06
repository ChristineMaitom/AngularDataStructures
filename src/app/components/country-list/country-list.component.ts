import { Component } from '@angular/core';

interface Continent {
  name: string;          // Ensure the 'name' property is correctly defined
  countries: string[];
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  newCountry: string = '';
  countriesByContinent: Continent[] = [
    {
      name: 'Singapore',
      countries: ['Queenstown', 'Tao Payoh', 'Choa Chu Kang']
    },
    {
      name: 'Asia',
      countries: ['China', 'India', 'Japan']
    },
    {
      name: 'Europe',
      countries: ['Germany', 'France', 'UK']
    },
    {
      name: 'North America',
      countries: ['USA', 'Canada', 'Mexico']
    },
    {
      name: 'Philippines',
      countries: ['Luzon', 'Visayas', 'Mindanao']
    },
    {
      name: 'South America',
      countries: ['Brazil', 'Argentina', 'Chile']
    }
  ];

  addCountry(continentIndex: number) {
    const trimmedCountry = this.newCountry.trim();
    if (trimmedCountry) {
      if (!this.countriesByContinent[continentIndex].countries.includes(trimmedCountry)) {
        this.countriesByContinent[continentIndex].countries.push(trimmedCountry);
        this.newCountry = ''; // Clear the input field
      } else {
        console.error('Country already exists in this continent.');
      }
    } else {
      console.error('Country name cannot be empty.');
    }
  }
}
