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
    //Make sure that enter does not make a submit
    console.log("click")
    if (!this.title || !this.firstPost) {
      return;
    }
    console.log(this.title, this.firstPost, " title and first post")
  }

}
