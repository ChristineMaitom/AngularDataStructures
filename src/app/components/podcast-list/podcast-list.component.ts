import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  episodeTitle: string = '';
  episodes: string[] = [];

  addEpisode() {
    if (this.episodeTitle.trim()) {
      this.episodes.push(this.episodeTitle.trim());
      this.episodeTitle = ''; // Clear input after adding
    }
  }
}
