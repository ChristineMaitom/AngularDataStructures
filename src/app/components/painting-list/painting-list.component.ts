import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintingTitle: string = '';
  paintings: string[] = [];

  addPainting() {
    if (this.paintingTitle.trim()) {
      this.paintings.push(this.paintingTitle.trim());
      this.paintingTitle = ''; // Clear input after adding
    }
  }
}
