import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  // Post request for creating books
  postData(data: any): Observable<any> {
    const url = `${this.apiUrl}/book`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, data, { headers });
  }

  // Get request for initial rendering of book
  getInitialData(): Observable<any> {
    const url = `${this.apiUrl}/getBookResults`;
    return this.http.get(url);
  }

  getSearchData(searchCategory: String, searchText: String): Observable<any> {
    const url = `${this.apiUrl}/searchBooks/${searchCategory}/${searchText}`

    return this.http.get(url);
  }

  // get all of a users books by passing their id found in the dataase
  getUsersBooks(userId: number): Observable<any> {
    const url = `${this.apiUrl}/getUsersBooks/${userId}`

    return this.http.get(url);
  }

}
