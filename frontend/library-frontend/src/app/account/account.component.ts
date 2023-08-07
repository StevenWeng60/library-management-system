import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../utilities/book.interface';
import { hardcodedBooks } from '../utilities/hardcode-books';
import { hardcodedHistory } from '../utilities/hardcoded-history';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  books: Book[] = [];
  history: String[] = [];
  constructor(private router: Router) {
    this.books = hardcodedBooks;
    this.history = hardcodedHistory;
  }

  redirectToLogin(): void {
    this.router.navigate(['/login'])
  }
}
