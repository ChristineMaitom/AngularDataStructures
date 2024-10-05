import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  students: string[] = [];
  newStudentName: string = '';

  addStudent() {
    if (this.newStudentName.trim()) {
      this.students.push(this.newStudentName.trim());
      this.newStudentName = '';
    }
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}
