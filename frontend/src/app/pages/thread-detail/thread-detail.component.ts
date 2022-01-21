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
  // firstPost!: string;
  threadObject!: any;

  constructor(
    private route: ActivatedRoute,
    private _store: StoreService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.threadId = id;
    this.threadObject = this._store.getThreadById(this.threadId);
    console.log("this.threadObject", this.threadObject);
    
  }

}
