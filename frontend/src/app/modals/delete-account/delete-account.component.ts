import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  
  password!: string;
  private _deleteAccountUrl = "/api/users/" + localStorage.getItem('id');
  status!: string;

  constructor(private http: HttpClient) { }

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
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
        // console.log(s);

      //if responstatus 200
        // localStorage.clear();
        //Route to homepage 
        //swal account is deleted
      );
  }
}
