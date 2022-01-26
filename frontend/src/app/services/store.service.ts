import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private urlToCreateThread = "api/thread/create";
  private urlToCreatePost = "api/post/create";
  private urlToGetCategories = "api/categories";
  private urlToGetThreadById = "/api/thread/";
  private urlToGetToPost = "/api/post/create";

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
  getCategories() {
    return this.http.get(this.urlToGetCategories);
  }

  getThreads(categoryId: any) {
    let urlToGetThreads = "/api/threads/byCategory/" + categoryId;
    return this.http.get(urlToGetThreads);
  }

  getThreadsByUserId(id: any) {
    let urlToGetThreadsByUserId = "/api/my-threads/" + id;  
    return this.http.get(urlToGetThreadsByUserId);
  }

  deleteMyThread(id: any, threadStarter: any) {
    const body = {     
      body: threadStarter
    };
    let urlDeleteMyThread = "/api/thread/delete/" + id;
    console.log("urlDeleteMyThread", urlDeleteMyThread)
    console.log("body", body)
    return this.http.delete(urlDeleteMyThread,body);
  }

  getPostsByUserId(id: any) {
    let urlToGetPostsByUserId = "/api/my-posts/" + id;
    return this.http.get(urlToGetPostsByUserId);
  }

  deleteMyPost(id: any, creator: any) {   
    const body = {
      body: creator
    };
    let urlDeleteMyPost = "/api/post/delete/" + id;
    console.log("urlDeleteMyPost", urlDeleteMyPost)
    return this.http.delete(urlDeleteMyPost,body);
  }

  getThreadById(threadId: string) {
    let urlToGetThreadByIdWithId = this.urlToGetThreadById + threadId;
    console.log("threadId", threadId)
    console.log(urlToGetThreadByIdWithId)
    return this.http.get(urlToGetThreadByIdWithId)
  }
  
  createPostInThread(createdPost: any) {
    console.log(createdPost, "createdPost");
    return this.http.post(this.urlToGetToPost, createdPost);
  }

  getPostsByThreadId(threadId: string) {
    let urlToGetPostsByThreadId = "api/post/" + threadId;
    return this.http.get(urlToGetPostsByThreadId)
  }
}
