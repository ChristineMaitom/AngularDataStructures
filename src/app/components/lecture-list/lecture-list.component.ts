import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  lectureTitle: string = '';
  lectures: string[] = [];

  addLecture() {
    if (this.lectureTitle.trim()) {
      this.lectures.push(this.lectureTitle.trim());
      this.lectureTitle = ''; // Clear input after adding
    }
  }
}
