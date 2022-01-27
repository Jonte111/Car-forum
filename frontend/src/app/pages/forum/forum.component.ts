import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateThreadComponent } from 'src/app/modals/create-thread/create-thread.component';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  categoryId!: string;
  public threads: any = [];

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private _store: StoreService,
    public _authService: AuthService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.categoryId = id;
    this.getThreads(this.categoryId);
  }
  openCreateThread() {
    const dialog = this.dialog.open(CreateThreadComponent, {
      data: this.categoryId,
      panelClass: ['my-dialog'],
    });
    dialog.afterClosed().subscribe(() => {
      this.getThreads(this.categoryId);
    });
  }

  onSelectThread(thread: any) {
    this.router.navigate(['/forum/thread', thread._id]);
  }

  getThreads(categoryId: any) {
    this._store.getThreads(categoryId).subscribe((res) => {
      this.threads = res;
    });
  }
}
