import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {
  title!: string;
  firstPost!: string;
  
  constructor(
    public _store: StoreService,
    @Inject(MAT_DIALOG_DATA) public categoryId: any,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onCreateThread() {
    console.log(this.categoryId, " categoryId")
    if (!this.title || !this.firstPost) {
      return;
    }
    const createdThreadInformation = {
      threadStarter: localStorage.getItem('id'),
      title: this.title,
      category: this.categoryId,
    }
    
    this._store.createThread(createdThreadInformation);
    this.dialog.closeAll();
  }

}
