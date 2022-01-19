import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private urlToCreateThread = "api/thread/create";
  constructor(private http: HttpClient) { }

  createThread(threadToBeCreated: any) {
    return this.http.post(this.urlToCreateThread, threadToBeCreated).subscribe(
      res => console.log(res, " res"),
    )
      
  }

  getThreads(categoryId: any) {
    let urlToGetThreads = "/api/threads/byCategory/" + categoryId;

    return this.http.get(urlToGetThreads);
  }
}
