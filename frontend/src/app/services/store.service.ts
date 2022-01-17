import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private urlToCreateThread = "api/thread/create";
  private urlToCreatePost = "api/post/create";
  constructor(private http: HttpClient) { }

  createThread(threadToBeCreated: any) {
    return this.http.post(this.urlToCreateThread, threadToBeCreated).subscribe(
      res => console.log(res, " res"),
    )
  }
  createPost(postToBeCreated: any) {
    return this.http.post(this.urlToCreatePost, postToBeCreated).subscribe(
      res => console.log(res, " res"),
    )
  }
}
