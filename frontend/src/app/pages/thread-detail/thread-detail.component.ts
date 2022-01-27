import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css'],
})
export class ThreadDetailComponent implements OnInit {
  threadId!: string;
  firstPost!: string;
  threadObject!: any;
  createdPost!: string;
  posts!: any;
  threadTitle!: string;
  threadStarterUsername!: string;

  constructor(
    private route: ActivatedRoute,
    private _store: StoreService,
    public _authService: AuthService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.threadId = id;
    this._store.getThreadById(this.threadId).subscribe((res) => {
      this.threadObject = res;
      this.firstPost = this.threadObject.firstPost;

      this.threadTitle = this.threadObject.title;
      this.threadStarterUsername = this.threadObject.threadStarterUsername;
    });

    this.getPosts();
  }

  createPost() {
    if (!this.createdPost) {
      return;
    }

    let post = {
      threadId: this.threadId,
      username: localStorage.getItem('username'),
      creator: localStorage.getItem('id'),
      postText: this.createdPost,
    };

    this._store.createPostInThread(post).subscribe();

    this.getPosts();
    this.createdPost = '';
  }

  getPosts() {
    this._store.getPostsByThreadId(this.threadId).subscribe((res) => {
      this.posts = res;
    });
  }
}
