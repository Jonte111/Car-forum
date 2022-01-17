import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username!: string;
  password!: string;
  private _loginUrl = "/api/auth/signin";
  private _getAllUsersUrl = "/api/users";

  constructor(private http: HttpClient,
    private _router: Router) { }

  //The user credentials that are doing the sign in is sent to the _loginUrl adress
  signInUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  //If there is a token in local storage then you are logged in
  signedIn() {
    return !!localStorage.getItem('token')
  }
  signOutUser() {
    this._router.navigate(['/']);
    localStorage.clear();
  }

  getAllUsers() {
    return this.http.get<any>(this._getAllUsersUrl);
  }

}
