import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../utilities/book.interface';
import { combineLatest } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import { BookCheckout } from '../utilities/bookcheckout.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  books: Book[] = [];
  checkoutHistory: BookCheckout[] = [];
  constructor(private router: Router, private apiService: ApiServiceService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log("hi");
    const userId = Number(localStorage.getItem("userId"));

    combineLatest([
      this.apiService.getUsersBooks(userId),
      this.apiService.getUsersBookCheckouts(userId)
    ]).subscribe(([booksResponse, checkoutHistoryResponse]) => {
      // Process the data from the responses
      booksResponse.forEach((item: any) => {
          let tempBook: Book = {
            id: item.id,
            title: item.title,
            authorFirstName: item.authorFirstName,
            authorLastName: item.authorLastName,
            genre: item.genre,
            copiesAvailable: item.copies,
            releaseDate: item.publishedDate,
          };

          const bookCheckout = item.checkouts.find((checkout: any) => 
            checkout.userId == userId)
            
            tempBook.checkOutDate = bookCheckout.checkoutDate;
            tempBook.checkInDate = bookCheckout.dueDate;
            tempBook.checkoutId = bookCheckout.id;
            
          this.books.push(tempBook);
      })

      checkoutHistoryResponse.forEach((item: any) => {
        let tempCheckout: BookCheckout = {
          id: item.id,
          checkoutDate: item.checkoutDate,
          dueDate: item.dueDate,
          title: item.bookTitle,
          userId: item.userId,
        }
        this.checkoutHistory.push(tempCheckout);
      })

      this.checkoutHistory.sort(function(a, b) {
          let aCheckout: any = a.checkoutDate.split('-');
          let bCheckout: any = b.checkoutDate.split('-');

          return aCheckout > bCheckout ? -1 : aCheckout < bCheckout ? 1 : 0
      })
    });
  }

  redirectToLogin(): void {
    this.router.navigate(['/login'])
  }

  checkIn(bookCheckoutId?: number): void {
    this.apiService.checkInBook(bookCheckoutId).subscribe(
      (v) => {
        window.location.reload();
      }
    )
  }
}
