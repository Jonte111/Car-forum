import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-role-maintenance',
  templateUrl: './role-maintenance.component.html',
  styleUrls: ['./role-maintenance.component.css']
})
export class RoleMaintenanceComponent implements OnInit {
  users: any;

  constructor(private _searchAllUsers: AuthService) { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log("click search")
    this._searchAllUsers.getAllUsers().subscribe(
      res => {      
        this.users = res;
        console.log(res)
      },
      err => {       
        console.log(err, 'error in search')
      }
    );
  }

  onUpdate() {
    
  }

}
