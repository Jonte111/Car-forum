import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateThreadComponent } from 'src/app/modals/create-thread/create-thread.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  categoryId!: string;
  public threads: any = [];

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router, private _store: StoreService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.categoryId = id;
    this.getThreads(this.categoryId);
  }
  openCreateThread() {
    this.dialog.open(CreateThreadComponent, {
      data: "test"
    }
    );
  }

  onSelectThread(thread: any) {
    console.log("click")
    this.router.navigate(['/forum/thread', thread._id])
  }

  getThreads(categoryId:any) {
    this._store.getThreads(categoryId).subscribe(
      res => {
        this.threads = res,
        console.log(this.threads, " this.threads get threads")
      }
    );
  }

}
