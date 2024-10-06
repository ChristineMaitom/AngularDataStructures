import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composerName: string = '';
  composers: string[] = [];

  addComposer() {
    if (this.composerName.trim()) {
      this.composers.push(this.composerName.trim());
      this.composerName = ''; // Clear input after adding
    }
  }
}
