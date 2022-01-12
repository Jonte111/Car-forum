import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username!: string;
  password!: string;
  errorMessage!: string;
  wasAnError!: boolean;

  constructor(private _auth: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSignIn() {
    
    if (!this.username||!this.password) {
      return;
    }
    const userToBeSignedIn = {
        username: this.username,
        password: this.password
     }
    
    //Calls on signInUser in authService
    this._auth.signInUser(userToBeSignedIn).subscribe(
      res => {
        //Token and username is stored in localStorage
        console.log(res)
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('username', res.username);
        console.log(res.accessToken)
        console.log(res.username)
        //Closes open modals
        this.dialog.closeAll();
      },
      err => { 
        this.wasAnError = true;
        this.errorMessage = err.statusText;
        console.log(err, ' errror in sign-in')
      }
    )
    this.username = "";
    this.password = "";
  }
}
