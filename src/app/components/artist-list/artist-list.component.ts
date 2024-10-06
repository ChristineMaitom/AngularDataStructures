import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artistName: string = '';
  artists: string[] = [];

  addArtist() {
    if (this.artistName.trim()) {
      this.artists.push(this.artistName.trim());
      this.artistName = ''; // Clear input after adding
    }
  }
}
