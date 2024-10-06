import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  videoTitle: string = '';
  videos: string[] = [];

  addVideo() {
    if (this.videoTitle.trim()) {
      this.videos.push(this.videoTitle.trim());
      this.videoTitle = ''; // Clear input after adding
    }
  }
}
