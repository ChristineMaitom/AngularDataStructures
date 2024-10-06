import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryItem: string = '';
  stationeryItems: string[] = [];

  addStationery() {
    if (this.stationeryItem.trim()) {
      this.stationeryItems.push(this.stationeryItem.trim());
      this.stationeryItem = ''; // Clear input after adding
    }
  }
}
