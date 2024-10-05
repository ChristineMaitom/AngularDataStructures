import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent {
  fruits: string[] = [];
  newFruit: string = '';

  addFruit() {
    if (this.newFruit.trim()) {
      this.fruits.push(this.newFruit.trim());
      this.newFruit = '';
    }
  }

  removeFruit(index: number) {
    this.fruits.splice(index, 1);
  }
}

