import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {
  title!: string;
  firstPost!: string;
  categoryId!: string;
  
  constructor(public _store: StoreService, @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
  }

  onCreateThread() {
    console.log(this.data, "data")
    if (!this.title || !this.firstPost) {
      return;
    }
    const createdThreadInformation = {
      threadStarter: localStorage.getItem('id'),
      title: this.title,
      category: this.categoryId,
      // firstPost: this.firstPost
    }
    
    this._store.createThread(createdThreadInformation);


    
  }

}
