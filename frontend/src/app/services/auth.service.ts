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

  //The user credentials that are doing the sign in is sent to the _loginUrl adress
  signInUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  //If there is a token in local storage then you are logged in
  signedIn() {
    return !!localStorage.getItem('token')
  }
  signOutUser() {
    localStorage.clear();
  }

}
