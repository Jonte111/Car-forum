import { Component, OnInit } from '@angular/core';
import { DeleteAccountComponent } from 'src/app/modals/delete-account/delete-account.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { DeletePostComponent } from 'src/app/modals/delete-post/delete-post.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  public threads: any = [];
  userId!: string;
  message!: string;
  
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _store: StoreService
    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("id") || "";
    console.log("this.userId", this.userId);    
    this.getThreadsByUserId(this.userId);
  }
  
  getThreadsByUserId(userId: string) {
    this._store.getThreadsByUserId(userId).subscribe(
      res => {
        console.log("userId",userId);        
        this.threads = res;
        console.log("res", res);
        if (!res) {
          this.message ="You don't have any thread"
        }
        console.log(this.threads, " this.threads get threads")
      }
    );
  }
  onDeleteThread(threadId: string) {
    let body = { "threadStarter": this.userId}
    this._store.deleteMyThread(threadId,body).subscribe(
      res => {
        console.log("res thread",res)
        this.threads = res,
        console.log(this.threads, " this.threads get threads")
      }
    )
    
  }

  openDeletePost() {
    this.dialog.open(DeletePostComponent)
  }
  openDeleteAccount() {
    this.dialog.open(DeleteAccountComponent);
  }
  onSelect(thread: any) {
    console.log("click")
    //this.router.navigate(['/forum/sportcars', thread.id])
  }
}
