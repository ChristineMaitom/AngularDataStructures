import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  newLibrary: string = '';
  libraries: string[] = [];

  addLibrary(): void {
    if (this.newLibrary.trim()) {
      this.libraries.push(this.newLibrary.trim());
      this.newLibrary = '';
    }
  }
}
