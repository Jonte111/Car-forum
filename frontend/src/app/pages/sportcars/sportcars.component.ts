import { Component, OnInit } from '@angular/core';
import { CreateThreadComponent } from 'src/app/modals/create-thread/create-thread.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sportcars',
  templateUrl: './sportcars.component.html',
  styleUrls: ['./sportcars.component.css']
})
export class SportcarsComponent implements OnInit {
  tempThreads = [{}]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCreateThread() {
    this.dialog.open(CreateThreadComponent);
  }
}
