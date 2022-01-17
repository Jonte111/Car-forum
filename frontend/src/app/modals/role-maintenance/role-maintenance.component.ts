import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-role-maintenance',
  templateUrl: './role-maintenance.component.html',
  styleUrls: ['./role-maintenance.component.css']
})
export class RoleMaintenanceComponent implements OnInit {
  users: any;
  username!: string;
  roles!: [];
  moderator!: boolean;

  constructor(private _searchUser: AuthService) { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log("click search")
    const username = this.username;
    console.log("username",username)
    this._searchUser.getUserByUserName(username).subscribe(
      res => {
        this.users = res;
        for (let i = 0; i < res[0].roles.length; i++) {
          this._searchUser.getRoleById(res[0].roles[i]).subscribe(
            res1 => { 
              if (res1.name === "moderator") {
                this.moderator = true
              }
            },
            err1 => {
              console.log(err1, 'error in search roles')
            }
          )
        }
       
      },
      err => {
        console.log(err, 'error in search')
      }
    );
  }

  
  /* onSearch() {
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
  } */

  onUpdate() {
    
  }

}
