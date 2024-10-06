import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  newAnimal: string = '';
  animals: string[] = [];

  addAnimal() {
    if (this.newAnimal.trim()) {
      this.animals.push(this.newAnimal.trim());
      this.newAnimal = ''; // Clear the input field
    }
  }
}
