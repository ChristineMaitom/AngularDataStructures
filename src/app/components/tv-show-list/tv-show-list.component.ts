import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css'
})
export class TVShowListComponent {
  showTitle: string = '';
  shows: string[] = [];

  addShow() {
    if (this.showTitle.trim()) {
      this.shows.push(this.showTitle.trim());
      this.showTitle = ''; // Clear input after adding
    }
  }
}
