import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  newSport: string = '';
  sports: string[] = [];

  addSport() {
    if (this.newSport.trim()) {
      this.sports.push(this.newSport.trim());
      this.newSport = ''; // Clear the input field
    }
  }
}
