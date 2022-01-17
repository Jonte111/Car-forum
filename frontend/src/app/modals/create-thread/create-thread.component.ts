import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {
  title!: string;
  firstPost!: string;

  constructor(public _store: StoreService) { }

  ngOnInit(): void {
  }

  onCreateThread() {
    if (!this.title || !this.firstPost) {
      return;
    }
    const createdThreadInformation = {
      threadStarter: localStorage.getItem('id'),
      title: this.title,
      // firstPost: this.firstPost
    }
    
    this._store.createThread(createdThreadInformation);


    
  }

}
