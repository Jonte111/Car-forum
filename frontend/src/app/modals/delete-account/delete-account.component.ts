import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  
  password!: string;
  confirmPassword!: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  onDeleteAccount() {
    const deletAccountCredentials = {
      password: this.password,
      confirmPassword: this.confirmPassword
    }
  }
}
