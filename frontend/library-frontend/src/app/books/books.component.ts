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
  searchCategory: String = "";
  constructor(private http: HttpClient) {
    this.books = hardcodedBooks;
    this.searchCategory = "Title";
  }

  // Load initial book data
  ngOnInit(): void {
    this.http.get('http://localhost:8080/getBookResults').subscribe(
      (v: any) => {
        console.log(v);
        console.log(v.title);
        // Next thing to do is to create the Book objects
        this.books = [];
        v.forEach((item: any) => {
          let tempBook: Book = {
            id: item.id,
            title: item.title,
            authorFirstName: item.authorFirstName,
            authorLastName: item.authorLastName,
            genre: item.genre,
            copiesAvailable: item.copies,
            releaseDate: item.publishedDate,
          };
          this.books.push(tempBook);
        })
      }
    );
  }

  // Make a get request to the server to get books according to search params
  search(): void {
    this.http.get(`http://localhost:8080/searchBooks/${this.searchCategory}/${this.searchText}`).subscribe(
      (v: any) => {
        // Next thing to do is to create the Book objects
        this.books = [];
        v.forEach((item: any) => {
          let tempBook: Book = {
            id: item.id,
            title: item.title,
            authorFirstName: item.authorFirstName,
            authorLastName: item.authorLastName,
            genre: item.genre,
            copiesAvailable: item.copies,
            releaseDate: item.publishedDate,
          };
          this.books.push(tempBook);
        })
      }
    );
    console.log(this.searchText);
  }

  changeCategory(category: string): void {
    this.searchCategory = category;
  }
}
