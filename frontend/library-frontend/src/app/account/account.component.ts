import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../utilities/book.interface';
import { hardcodedBooks } from '../utilities/hardcode-books';
import { hardcodedHistory } from '../utilities/hardcoded-history';
import { ApiServiceService } from '../services/api-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  books: Book[] = [];
  history: String[] = [];
  constructor(private router: Router, private apiService: ApiServiceService) {
    this.books = hardcodedBooks;
    this.history = hardcodedHistory;
  }

  ngOnInit(): void {
    console.log("hi");
    this.apiService.getUsersBooks(1).subscribe(
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
    )
  }

  redirectToLogin(): void {
    this.router.navigate(['/login'])
  }
}
