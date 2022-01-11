import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // @Output() onSignInEvent: EventEmitter<Any> = new EventEmitter();
  username!: string;
  password!: string;
  // @Output() onSignInEvent: EventEmitter<Object> = new EventEmitter();

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  onSignIn() {
    
    if (!this.username||!this.password) {
      return;
    }
     const newSignInEvent = {
        username: this.username,
        password: this.password
     }
    // console.log(username, password, "username, password")
    // console.log(this.http.post<any>(this._loginUrl, { username, password }));
    // this.onSignInEvent.emit(newSignInEvent);
    this._auth.signInUser(newSignInEvent).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.username = "";
    this.password = "";
  }
}
