import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: String = "";
  password: String = "";
  failed: Boolean = false;
  constructor(private router: Router, private apiService: ApiServiceService){ }
  login(): void {
    this.apiService.login(this.username, this.password).subscribe(
      (v) => {
        console.log("Success!")
        console.log(v);
        localStorage.setItem("userId", v.id);
        this.router.navigate(['/home'])
      },
      (error: HttpErrorResponse) => {
        this.failed = true;

        setTimeout(() => {
          this.failed = false;
        }, 3000)
      }
    )
  }
  goToCreateAccount(): void {
    this.router.navigate(['createAccount'])
  }
}
