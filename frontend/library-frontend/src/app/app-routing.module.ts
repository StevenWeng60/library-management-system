import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: 'app', component: AppComponent},
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'account', component: AccountComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'createAccount', component: CreateAccountComponent},
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
