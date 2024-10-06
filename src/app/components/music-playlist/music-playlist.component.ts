import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
  newSong: string = '';
  songs: string[] = [];

  addSong() {
    if (this.newSong.trim()) {
      this.songs.push(this.newSong.trim());
      this.newSong = ''; // Clear the input field
    }
  }
}
