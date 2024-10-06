import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  searchTerm: string = '';
  newSubjectName: string = '';
  subjects = [
    { name: 'Mathematics' },
    { name: 'Physics' },
    { name: 'Chemistry' },
    { name: 'Biology' },
    { name: 'Computer Science' }
  ];

  filteredSubjects() {
    return this.subjects.filter(subject =>
      subject.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addSubject() {
    if (this.newSubjectName) {
      this.subjects.push({ name: this.newSubjectName });
      this.newSubjectName = ''; // Clear the input after adding
    }
  }
}
