import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  newSoftware: string = '';
  softwareList: string[] = [];

  addSoftware() {
    if (this.newSoftware.trim()) {
      this.softwareList.push(this.newSoftware.trim());
      this.newSoftware = ''; // Clear the input field
    }
  }
}
