import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StoreService } from 'src/app/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-thread',
  templateUrl: './delete-thread.component.html',
  styleUrls: ['./delete-thread.component.css'],
})
export class DeleteThreadComponent implements OnInit {
  public threads: any = [];
  userId!: string;

  constructor(public dialog: MatDialog, private _store: StoreService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || '';

    this.getThreadsByUserId(this.userId);
  }

  getThreadsByUserId(userId: string) {
    this._store.getThreadsByUserId(userId).subscribe((res) => {
      this.threads = res;

      if (this.threads.length === 0) {
        Swal.fire('info', "You don't have any thread", 'info');
        this.dialog.closeAll();
      }
    });
  }
  onDeleteThread(threadId: string) {
    let body = { threadStarter: this.userId };
    this._store.deleteMyThread(threadId, body).subscribe((res) => {
      this.threads = res;
    });
  }
}
