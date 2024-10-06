import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destination: string = '';
  destinations: string[] = [];

  addDestination() {
    if (this.destination.trim()) {
      this.destinations.push(this.destination.trim());
      this.destination = ''; // Clear input after adding
    }
  }
}
