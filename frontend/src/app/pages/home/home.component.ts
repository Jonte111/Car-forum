import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categories:any = [];
  constructor(private router: Router, private _store: StoreService) { }

  ngOnInit(): void{
    this.getCategories();
    // this.getCategories().subscribe(data=> this.categories=data);
  }

  onSelect(thread: any) {
    console.log("click")
    this.router.navigate(['/forum/sportcars', thread.id])
  }

  getCategories() {
    this.categories = this._store.getCategories();
    console.log(this.categories, "categories")
  }
}
