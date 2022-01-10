import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // @Output() onSignInEvent: EventEmitter<Any> = new EventEmitter();
  username!: string;
  password!: string;
  // onSignInEvent: any;
  @Output() onSignInEvent: EventEmitter<Object> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSignIn() {
    if (!this.username||!this.password) {
      alert("no text")
      return;
    }
    // console.log(this.username, this.password, "test")
    const newSignInEvent = {
      username: this.username,
      password: this.password
    }

    // this.onSignInEvent.emit(newSignInEvent);
    this.onSignInEvent.emit(newSignInEvent);

    this.username = "";
    this.password = "";
  }
}
