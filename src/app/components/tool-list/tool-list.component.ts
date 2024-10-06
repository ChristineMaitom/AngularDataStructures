import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  newTool: string = '';
  tools: string[] = [];

  addTool() {
    if (this.newTool.trim()) {
      this.tools.push(this.newTool.trim());
      this.newTool = ''; // Clear the input field
    }
  }
}
