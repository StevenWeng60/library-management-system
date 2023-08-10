import { Component } from '@angular/core';
import { Book } from '../utilities/book.interface';
import { hardcodedBooks } from '../utilities/hardcode-books';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  books: Book[] = [];

  constructor(){
    this.books = hardcodedBooks;
  }
}
