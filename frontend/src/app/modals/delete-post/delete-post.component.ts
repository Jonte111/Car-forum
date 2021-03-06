import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css'],
})
export class DeletePostComponent implements OnInit {
  public posts: any = [];
  userId!: string;
  threadTitle!: string;

  constructor(public dialog: MatDialog, private _store: StoreService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || '';

    this.getPostsByUserId(this.userId);
  }

  getPostsByUserId(userId: string) {
    this._store.getPostsByUserId(userId).subscribe((res) => {
      this.posts = res;
      if (this.posts.length === 0) {
        Swal.fire('info', "You don't have any post", 'info');
        this.dialog.closeAll();
      }
    });
  }
  onDeletePost(threadId: string) {
    let body = { creator: this.userId };
    this._store.deleteMyPost(threadId, body).subscribe((res) => {
      this.posts = res;
    });
  }
}
