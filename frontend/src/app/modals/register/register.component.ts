import { Component, OnInit} from '@angular/core';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email!: string;
  username!:string;
  password!: string;
  confirmPassword!: string;
  errorMessage!: string;
  wasAnError!: boolean;
  successMessage!: string;
  isRegisterSuccess!: boolean;


  constructor(private _registerUser: RegisterUserService) { }

  ngOnInit(): void {
  }

  onChange() {
    this.wasAnError = false;
    this.successMessage = "";
  }
  
  onRegister() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      return
    }
    const registerInfo = {
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    
    this._registerUser.signUpUser(registerInfo).subscribe(
      res => {
        this.wasAnError = false;
        this.isRegisterSuccess = true;
        this.successMessage = res.message;
        console.log(res)
      },
      err => {
        this.wasAnError = true;
        this.errorMessage = err.error.message;
        console.log(err,'error in register') 
      }      
    );
/* 
    this.email = "";
    this.username = "";
    this.password = ""; 
    this.confirmPassword = ""; */
    this.wasAnError = false;
    this.isRegisterSuccess = false;
  }

}
