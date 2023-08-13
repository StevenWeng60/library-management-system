import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    const url = `${this.apiUrl}/book`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, data, { headers })
  }
}
