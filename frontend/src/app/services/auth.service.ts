import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username!: string;
  password!: string;
  private _loginUrl = '/api/auth/signin';
  private _getAllUsersUrl = '/api/users';
  private _getUserByUserNameUrl = '/api/users/username';
  private _getRoles = '/api/roles';
  private _updateUserByIdUrl = 'api/users/update';

  constructor(private http: HttpClient, private _router: Router) {}

  signInUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }

  signedIn() {
    return !!localStorage.getItem('token');
  }
  signOutUser() {
    this._router.navigate(['/']);
    localStorage.clear();
  }

  roleMaintenance(): Boolean {
    if (
      localStorage.getItem('inLoggedUserIsAmin') === 'true' ||
      localStorage.getItem('inLoggedUserIsModerator') === 'true'
    ) {
      return true;
    } else {
      return false;
    }
  }

  getAllUsers() {
    return this.http.get<any>(this._getAllUsersUrl);
  }

  getUserById(id: string) {
    return this.http.get<any>(this._getAllUsersUrl);
  }

  getUserByUserName(username: string) {
    const url = this._getUserByUserNameUrl + '/' + username;
    return this.http.get<any>(url);
  }

  getRoleById(id: string) {
    const url = this._getRoles + '/' + id;
    return this.http.get<any>(url);
  }

  updateUserById(id: string, body: object) {
    const url = this._updateUserByIdUrl + '/' + id;
    return this.http.put<any>(url, body);
  }

  getRoles() {
    const url = this._getRoles;
    return this.http.get<any>(url);
  }

  isModerator() {
    return localStorage.getItem('inLoggedUserIsModerator') === 'true';
  }

  isAdmin() {
    return localStorage.getItem('inLoggedUserIsAmin') === 'true';
  }
  hasRole() {
    if (
      localStorage.getItem('inLoggedUserIsModerator') === 'true' ||
      localStorage.getItem('inLoggedUserIsAmin') === 'true'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
