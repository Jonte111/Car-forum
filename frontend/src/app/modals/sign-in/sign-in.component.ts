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
  inLoggedUser!: string;
  inLoggedUserRoleId!: [];
  inLoggedUserIsAmin!: boolean;
  inLoggedUserIsModerator!: boolean;

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
        localStorage.setItem('id', res.id);
        console.log(res.accessToken)
        console.log(res.username)
        this.saveRole()
        //Closes open modals
        this.dialog.closeAll();
      },
      err => { 
        this.wasAnError = true;
        this.errorMessage = err.error.message;
        console.log(err, ' errror in sign-in')
      }
    )
    this.username = "";
    this.password = "";
  }

  saveRole() {
    localStorage.setItem('inLoggedUserIsModerator', "false");
    localStorage.setItem('inLoggedUserIsAmin', "false");
    this.inLoggedUser = localStorage.getItem('username') || "";
    this._auth.getUserByUserName(this.inLoggedUser).subscribe(
      res => {
        this.inLoggedUserRoleId = res[0].roles;
        for (let i = 0; i < this.inLoggedUserRoleId.length; i++) {
          this._auth.getRoleById(this.inLoggedUserRoleId[i]).subscribe(
            res1 => {
              if (res1.name === "moderator") {
                localStorage["inLoggedUserIsModerator"] = "true";
               // localStorage.setItem('inLoggedUserIsModerator', "true");
              }
              if (res1.name === "admin") {
                localStorage["inLoggedUserIsAmin"] = "true";
               // localStorage.setItem('inLoggedUserIsAmin', "true");
              }
            },
            err1 => {
              console.log(err1, 'error in search roles')
            }
          )
        }
      },
      err => {
        console.log(err, 'error in search roles')
      }
    )
  }

}
