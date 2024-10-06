import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  newEvent: string = '';
  events: string[] = [];

  addEvent(): void {
    if (this.newEvent.trim()) {
      this.events.push(this.newEvent.trim());
      this.newEvent = '';
    }
  }
}
