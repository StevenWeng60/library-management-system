import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  newFirstName: String = "";
  newLastName: String = "";
  newAge?: number;
  newPassword: String = "";
  newUsername: String = "";
  success: Boolean = false;
  failed: Boolean = false;
  constructor(private router: Router, private apiService: ApiServiceService){ }
  createAccount(): void {
    // Add constraints?

    // Username too long or short
    // Password too long or short
    const data = {
      username: this.newUsername,
      firstName: this.newFirstName,
      lastName: this.newLastName,
      age: this.newAge,
      password: this.newPassword,
    }

    this.apiService.createAccount(data).subscribe(
      (v) => {
        console.log("success");
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000)
      },
      (error: HttpErrorResponse) => {
        console.error("error: ", error);
        this.failed = true;
        setTimeout(() => {
          this.failed = false;
        }, 3000);
      }
    )
  }
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
