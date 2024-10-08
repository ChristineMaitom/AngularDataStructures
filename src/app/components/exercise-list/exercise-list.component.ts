import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  newExercise: string = '';
  exercises: string[] = [];

  addExercise() {
    if (this.newExercise.trim()) {
      this.exercises.push(this.newExercise.trim());
      this.newExercise = ''; // Clear the input field after adding
    }
  }
}
