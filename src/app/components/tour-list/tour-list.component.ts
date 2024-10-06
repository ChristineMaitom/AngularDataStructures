import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  newTourDate: string = '';
  tourDates: string[] = [];

  addTourDate(): void {
    if (this.newTourDate.trim()) {
      this.tourDates.push(this.newTourDate.trim());
      this.newTourDate = ''; // Clear the input after adding
    }
  }
}
