import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildingName: string = '';
  buildings: string[] = [];

  addBuilding() {
    if (this.buildingName.trim()) {
      this.buildings.push(this.buildingName.trim());
      this.buildingName = ''; // Clear input after adding
    }
  }
}
