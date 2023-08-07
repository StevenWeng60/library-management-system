import { Component } from '@angular/core';
import { Book } from '../utilities/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: Book[] = [];
  constructor() {
    this.books = [
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        pages: 234,
        copiesAvailable: 1,
        releaseDate: new Date("1951-07-16"),
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        copiesAvailable: 1,
        releaseDate: new Date("1960-07-11"),
      },
      {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        copiesAvailable: 1,
        releaseDate: new Date("1949-06-08"),
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        copiesAvailable: 1,
        releaseDate: new Date("1925-04-10"),
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 336,
        copiesAvailable: 1,
        releaseDate: new Date("1813-01-28"),
      },
    ]
  }
}
