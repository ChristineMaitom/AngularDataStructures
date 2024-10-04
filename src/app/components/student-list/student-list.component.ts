import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: string[] = [];
  newStudentName: string = '';

  addStudent() {
    if (this.newStudentName.trim()) {
      this.students.push(this.newStudentName.trim());
      this.newStudentName = ''; // Clear input after adding
    }
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}
