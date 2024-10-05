import { Component } from '@angular/core';

interface Movie {
  title: string;
  director: string;
  releaseYear: number;
  rating: number;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movie[] = [
    { title: 'No Way Home', director: 'Jon Watts', releaseYear:2021, rating: 9.10 },
    { title: 'Un/Happy for You', director: 'Petersen Vargas', releaseYear: 2024, rating: 10.10 },
    { title: 'The Godfather', director: 'Francis Ford Coppola', releaseYear: 1972, rating: 9.2 },
    { title: 'Love Between Fairy and Devil', director: 'Zheng Yi', releaseYear: 2022, rating: 10.10}
  ];
}

