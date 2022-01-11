import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username!: string;
  password!: string;
  private _loginUrl = "http://localhost:4000/api/auth/signin";

  constructor(private http: HttpClient) { }

  signInUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }

}
