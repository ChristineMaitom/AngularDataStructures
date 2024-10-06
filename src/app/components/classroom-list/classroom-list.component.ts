import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  studentName: string = '';
  students: string[] = [];

  addStudent() {
    if (this.studentName.trim()) {
      this.students.push(this.studentName.trim());
      this.studentName = ''; // Clear input after adding
    }
  }
}
