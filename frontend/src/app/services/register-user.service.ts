import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
  
export class RegisterUserService {
  private _registerUrl = "http://localhost:4000/api/auth/signup";

  constructor(private http: HttpClient) { }
  
  signUpUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }
}
