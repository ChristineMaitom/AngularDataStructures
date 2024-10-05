import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: string[] = [];
  newCourse: string = '';

  addCourse() {
    if (this.newCourse.trim()) {
      this.courses.push(this.newCourse.trim());
      this.newCourse = '';
    }
  }

  removeCourse(index: number) {
    this.courses.splice(index, 1);
  }
}
