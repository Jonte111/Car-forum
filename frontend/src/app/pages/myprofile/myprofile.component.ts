import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteAccountComponent } from 'src/app/modals/delete-account/delete-account.component';
import { DeletePostComponent } from 'src/app/modals/delete-post/delete-post.component';
import { DeleteThreadComponent } from 'src/app/modals/delete-thread/delete-thread.component';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _store: StoreService
  ) {}

  ngOnInit(): void {}

  openDeleteThread() {
    this.dialog.open(DeleteThreadComponent, { panelClass: ['my-dialog'] });
  }
  openDeletePost() {
    this.dialog.open(DeletePostComponent, { panelClass: ['my-dialog'] });
  }
  openDeleteAccount() {
    this.dialog.open(DeleteAccountComponent, { panelClass: ['my-dialog'] });
  }
}
