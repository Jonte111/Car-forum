import { Component, OnInit } from '@angular/core';
import { DeleteAccountComponent } from 'src/app/modals/delete-account/delete-account.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  tempThreads = [{
    "id": "firstThreadId",
    "threadStarter": "RandomName",
    "posts": ["hej", "test", "äpple"],
    "threadViews": "1111111",
    "title": "This is the thread title",
    "createdTime": "0111111111",
    "numberOfComments": "3",
    "blockedUsers": [],
    "adminLocked": false,
    "threadStarterLocked": false
  }, {
    "id": "secondThreadId",
    "threadStarter": "RandomName",
    "posts": ["hej", "test", "citron"],
    "threadViews": "1111111",
    "title": "This is the secondthread title",
    "createdTime": "0111111111",
    "numberOfComments": "3",
    "blockedUsers": [],
    "adminLocked": false,
    "threadStarterLocked": false
  }, {
    "id": "thirdThreadId",
    "threadStarter": "RandomName",
    "posts": ["hej", "test", "päron"],
    "threadViews": "1111111",
    "title": "This is the third thread title",
    "createdTime": "0111111111",
    "numberOfComments": "3",
    "blockedUsers": [],
    "adminLocked": false,
    "threadStarterLocked": false
  }
  ]
  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

  openDeleteAccount() {
    this.dialog.open(DeleteAccountComponent);
  }
  onSelect(thread: any) {
    console.log("click")
    this.router.navigate(['/forum/sportcars', thread.id])
  }
}
