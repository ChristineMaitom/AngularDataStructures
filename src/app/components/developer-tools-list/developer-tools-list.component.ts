import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  newTool: string = '';
  tools: string[] = [];

  addTool(): void {
    if (this.newTool.trim()) {
      this.tools.push(this.newTool.trim());
      this.newTool = ''; // Clear the input after adding
    }
  }
}
