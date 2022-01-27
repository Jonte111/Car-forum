import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
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

  constructor(
    private _auth: AuthService,
    public dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSignIn() {
    if (!this.username || !this.password) {
      return;
    }
    const userToBeSignedIn = {
      username: this.username,
      password: this.password,
    };

    this._auth.signInUser(userToBeSignedIn).subscribe(
      (res) => {
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('username', res.username);
        localStorage.setItem('id', res.id);

        this.saveRole();

        this.dialog.closeAll();
        this._router.navigate(['/']);
      },
      (err) => {
        this.wasAnError = true;
        this.errorMessage = err.error.message;

        if (err.status == 403) {
          this.dialog.closeAll();
          Swal.fire(
            'error',
            'You account has been blocked. If you want to delete it contact us at car-admin@car.com',
            'error'
          );
        }
      }
    );
    this.username = '';
    this.password = '';
  }

  saveRole() {
    localStorage.setItem('inLoggedUserIsModerator', 'false');
    localStorage.setItem('inLoggedUserIsAmin', 'false');
    this.inLoggedUser = localStorage.getItem('username') || '';
    this._auth.getUserByUserName(this.inLoggedUser).subscribe((res) => {
      this.inLoggedUserRoleId = res[0].roles;
      for (let i = 0; i < this.inLoggedUserRoleId.length; i++) {
        this._auth.getRoleById(this.inLoggedUserRoleId[i]).subscribe((res1) => {
          if (res1.name === 'moderator') {
            localStorage['inLoggedUserIsModerator'] = 'true';
          }
          if (res1.name === 'admin') {
            localStorage['inLoggedUserIsAmin'] = 'true';
          }
        });
      }
    });
  }
}
