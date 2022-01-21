import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {

  threadId!: string;
  firstPost!: string;
  threadObject!: any;
  createdPost!: string;

  constructor(
    private route: ActivatedRoute,
    private _store: StoreService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.threadId = id;
    this.threadObject = this._store.getThreadById(this.threadId).subscribe(
      res => {
        console.log(res, " res")
        this.threadObject = res;
        // this.firstPost = res.firstPost;
        this.firstPost = this.threadObject.firstPost;
      }

    );
    console.log("this.threadObject", this.threadObject);
    console.log("this.threadObject.firstPost", this.threadObject.firstPost);
    // this.threadObject = this.threadObject.firstPost;
    // console.log(this.threadObject.firstPost, "this.threadObject.firstPost");
    
  }

  createPost() {
    console.log("createPost click");
    if (!this.createdPost) {
      console.log("is false", this.createdPost, "this.createdPost");
      return;
    }
    console.log("is true", this.createdPost, "this.createdPost");

    let post = {
      threadId: 1,
      creator: 1,
      postText: 1
    }

    this._store.createPostInThread(post)
  }

}
