import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){ }
  verifyUser(): void {
    this.router.navigate(['/home'])
  }
  goToCreateAccount(): void {
    this.router.navigate(['createAccount'])
  }
}
