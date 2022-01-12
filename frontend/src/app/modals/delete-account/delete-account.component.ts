import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  
  password!: string;
  confirmPassword!: string;
  private _deleteAccountUrl = "/api/users/" + localStorage.getItem('id');
  status!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onDeleteAccount() {
    if (this.password != this.confirmPassword) {
      return;
    }
    console.log(this.password, this.confirmPassword, this._deleteAccountUrl," credentials to delete account");
    
    const deletAccountCredentials = {
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    this.http.delete(this._deleteAccountUrl).subscribe(() => this.status = 'Delete successful');

  }
}
