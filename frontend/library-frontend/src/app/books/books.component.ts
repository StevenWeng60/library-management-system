import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../utilities/book.interface';
import { hardcodedBooks } from '../utilities/hardcode-books';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  searchText: String = "";
  books: Book[] = [];
  constructor(private http: HttpClient) {
    this.books = hardcodedBooks;
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/book').subscribe(
      (v) => console.info(v)
    );
  }

  search(): void {
    console.log(this.searchText);
  }
}
