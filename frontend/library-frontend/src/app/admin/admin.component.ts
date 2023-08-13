import { Component } from '@angular/core';
import { Book } from '../utilities/book.interface';
import { hardcodedBooks } from '../utilities/hardcode-books';
import { ApiServiceService } from '../services/api-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // variables for searching for a book
  searchText: String = "";
  books: Book[] = [];
  searchCategory: String = "";
  // variables for adding a book
  title: String = "";
  authorFirstName: String = "";
  authorLastName: String = "";
  pubDate: String = "";
  copiesAvailable?: Number;
  genre: String = "";


  constructor(private apiService: ApiServiceService){
    this.books = hardcodedBooks;
    this.searchCategory = "Title";
  }

  ngOnInit(): void {
    this.apiService.getInitialData().subscribe(
      (v: any) => {
        console.log(v);
        console.log(v.title);
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
          }
          this.books.push(tempBook);
        })
      }
    );
  }

  search(): void {
    this.apiService.getSearchData(this.searchCategory, this.searchText).subscribe ((v: any) => {
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
        }
        this.books.push(tempBook);
      })
    })
  }

  changeCategory(category: String): void {
    this.searchCategory = category;
  }

  addBook(): void {
    if (this.title && this.authorFirstName && this.authorLastName && this.pubDate && this.copiesAvailable && this.genre){
      const data = {
        title: this.title,
        authorFirstName: this.authorFirstName,
        authorLastName: this.authorLastName,
        publishedDate: this.pubDate,
        copies: this.copiesAvailable,
        genre: this.genre
      };

      this.apiService.postData(data).subscribe(
        (v) => {
          console.log(v);
        }
      );
    }
  }
}
