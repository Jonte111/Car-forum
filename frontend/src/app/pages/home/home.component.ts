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

  onSelectCategory(category: any) {
    console.log("click")
    console.log(category, "category in click")
    this.router.navigate(['/forum', category._id])
  }

  getCategories() {
    this._store.getCategories().subscribe(
      res => {
        this.categories = res,
        console.log(this.categories, " categories")
      }
    );
  }
}
