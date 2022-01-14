import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {
  title!: string;
  firstPost!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateThread() {

    const createdThread = {
      title: this.title,
      token: localStorage.getItem('token'),
      // firstPost: this.firstPost,
      threadStarter: localStorage.getItem('username'),
      posts: [this.firstPost],
      threadViews: 0,
      createdTime: Date,
      numberOfComments: 0,
      blockedUsers: [],
      adminLocked: false,
      threadStarterLocked: false,
    }
    console.log(createdThread, " createdThread");
    


    console.log("click")
    if (!this.title || !this.firstPost) {
      return;
    }
    console.log(this.title, this.firstPost, " title and first post")
  }

}
