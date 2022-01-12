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

  constructor(private _auth: AuthService,
    public dialog: MatDialog) { }

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
    
    this._auth.signInUser(newSignInEvent).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('username', res.username);
        console.log(res.accessToken)
        console.log(res.username)
        this.dialog.closeAll();

      },
      err => console.log(err)
    )
    this.username = "";
    this.password = "";
  }
}
