import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email!: string;
  username!:string;
  password!: string;
  repeatPassword!: string;
  @Output() onRegisterEvent: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

 
  onRegister() {
    const registerInfo = {
      email: this.email,
      username: this.username,
      password: this.password,
    }
    this.onRegisterEvent.emit(registerInfo);

    this.email = "",
    this.username = "",
    this.password = ""     

  }

}
