import { Component, OnInit } from '@angular/core';
import { CreateThreadComponent } from 'src/app/modals/create-thread/create-thread.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sportcars',
  templateUrl: './sportcars.component.html',
  styleUrls: ['./sportcars.component.css']
})
export class SportcarsComponent implements OnInit {
  tempThreads = [{
    "id":"asdasdasd",
    "threadStarter":"RandomName",
    "posts": ["hej","test","äpple"],
    "threadViews": "1111111",
    "title": "This is the thread title",
    "createdTime":"0111111111",
    "numberOfComments":"3",
    "blockedUsers":[],
    "adminLocked":false,
    "threadStarterLocked": false
  }, {
      "id": "asdasdasdasd",
      "threadStarter": "RandomName",
      "posts": ["hej", "test", "äpple"],
      "threadViews": "1111111",
      "title": "This is the secondthread title",
      "createdTime": "0111111111",
      "numberOfComments": "3",
      "blockedUsers": [],
      "adminLocked": false,
      "threadStarterLocked": false
    }, {
      "id": "asdasdasdasdasdasd",
      "threadStarter": "RandomName",
      "posts": ["hej", "test", "äpple"],
      "threadViews": "1111111",
      "title": "This is the third thread title",
      "createdTime": "0111111111",
      "numberOfComments": "3",
      "blockedUsers": [],
      "adminLocked": false,
      "threadStarterLocked": false
    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCreateThread() {
    this.dialog.open(CreateThreadComponent);
  }
}
