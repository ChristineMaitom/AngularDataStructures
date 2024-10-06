import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  newFramework: string = '';
  frameworks: string[] = [];

  addFramework(): void {
    if (this.newFramework.trim()) {
      this.frameworks.push(this.newFramework.trim());
      this.newFramework = '';
    }
  }
}
