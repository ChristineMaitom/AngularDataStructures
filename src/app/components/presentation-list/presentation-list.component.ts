import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  newPresentationTopic: string = '';
  presentationTopics: string[] = [];

  addPresentationTopic() {
    if (this.newPresentationTopic.trim()) {
      this.presentationTopics.push(this.newPresentationTopic.trim());
      this.newPresentationTopic = ''; // Clear the input field after adding
    }
  }
}
