import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  appName: string = '';
  apps: string[] = [];

  addApp() {
    if (this.appName.trim()) {
      this.apps.push(this.appName.trim());
      this.appName = ''; // Clear input after adding
    }
  }
}
