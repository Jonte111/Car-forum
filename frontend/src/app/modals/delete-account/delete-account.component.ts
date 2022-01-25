import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  
  password!: string;
  private _deleteAccountUrl = "/api/users/" + localStorage.getItem('id');
  status!: string;
  message!: string;

  constructor(private http: HttpClient,
    public dialog: MatDialog,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onDeleteAccount() {
    if (!this.password) {
      return;
    }
    console.log(this.password, this._deleteAccountUrl," credentials to delete account");
    
    
    const deletAccountCredentials = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        password: this.password
      },
    };

    this.http
      .delete(this._deleteAccountUrl, deletAccountCredentials)
      .subscribe(
        res => {
          console.log('HTTP response', res);
          localStorage.clear();
          this.dialog.closeAll();
          this._router.navigate(['/']);
          Swal.fire("Success", "Account deleted", "success");
        },
        err => {
          console.log('HTTP Error', err);
          this.message = 'Wrong password';
        },
        () => console.log('HTTP request completed.')
      );
  }

  onClose() {
      this.dialog.closeAll()
  }
}
