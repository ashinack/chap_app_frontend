import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  registerUser(obj: any): Observable<any> {
    return this.http.post(this.url + '/auth/addUser', obj);
  }

  verifyOtp(obj: any): Observable<any> {
    return this.http.post(this.url + '/auth/verifyOtp', obj);
  }
}
