import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
    { title: 'War and Peace', author: 'Leo Tolstoy', year: 1869 },
  ];

  newBook: Book = { title: '', author: '', year: new Date().getFullYear() };

  addBook() {
    if (this.newBook.title && this.newBook.author && this.newBook.year) {
      this.books.push({ ...this.newBook });
      this.newBook = { title: '', author: '', year: new Date().getFullYear() }; // Reset the input
    }
  }
}
