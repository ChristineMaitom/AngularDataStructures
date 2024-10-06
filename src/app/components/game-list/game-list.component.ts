import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  newGame: string = '';
  games: string[] = [];

  addGame() {
    if (this.newGame.trim()) {
      this.games.push(this.newGame.trim());
      this.newGame = ''; // Clear the input field
    }
  }
}
