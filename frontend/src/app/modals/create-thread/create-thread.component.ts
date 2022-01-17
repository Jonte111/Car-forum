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
    console.log("click")
    if (!this.title || !this.firstPost) {
      return;
    }
    console.log(this.title, this.firstPost, " title and first post")
    // const createdThread = {
    //   title: this.title,
    //   token: localStorage.getItem('token'),
    //   // firstPost: this.firstPost,
    //   threadStarter: localStorage.getItem('username'),
    //   posts: [this.firstPost],
    //   threadViews: 0,
    //   createdTime: Date,
    //   numberOfComments: 0,
    //   blockedUsers: [],
    //   adminLocked: false,
    //   threadStarterLocked: false,
    // }
    const createdThreadInformation = {
      threadStarter: localStorage.getItem('id'),
      title: this.title,
      // firstPost: this.firstPost
    }
    console.log(createdThreadInformation, " createdThreadInformation");
    
    this._store.createThread(createdThreadInformation);


    
  }

}
