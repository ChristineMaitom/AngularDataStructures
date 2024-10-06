import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  newLanguage: string = '';
  languages: string[] = [];

  addLanguage() {
    if (this.newLanguage.trim()) {
      this.languages.push(this.newLanguage.trim());
      this.newLanguage = ''; // Clear the input field
    }
  }
}
