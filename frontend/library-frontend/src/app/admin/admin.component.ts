import { Component } from '@angular/core';
import { Book } from '../utilities/book.interface';
import { hardcodedBooks } from '../utilities/hardcode-books';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  books: Book[] = [];
  title: String = "";
  authorFirstName: String = "";
  authorLastName: String = "";
  pubDate: String = "";
  copiesAvailable?: Number;
  genre: String = "";


  constructor(private apiService: ApiServiceService){
    this.books = hardcodedBooks;
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
