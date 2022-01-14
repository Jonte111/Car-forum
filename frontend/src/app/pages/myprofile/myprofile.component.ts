import { Component, OnInit } from '@angular/core';
import { DeleteAccountComponent } from 'src/app/modals/delete-account/delete-account.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDeleteAccount() {
    this.dialog.open(DeleteAccountComponent);
  }

}
