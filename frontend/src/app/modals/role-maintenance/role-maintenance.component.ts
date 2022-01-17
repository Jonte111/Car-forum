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
  updatedBan!: boolean;
  updatedModerator!: boolean;  
  inLoggedUser!: string;  
  inLoggedUserRoleId!: [];
  inLoggedUserRole!: Array<string>;

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
        this.roles = res[0].roles;
        console.log("this.roles",this.roles)
        for (let i = 0; i < this.roles.length; i++) {
          this._searchUser.getRoleById(this.roles[i]).subscribe(
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
 

  onUpdate() {
    this.inLoggedUser = localStorage.getItem('username') || "";
    console.log("click on update")
    console.log("this.inLoggedUser", this.inLoggedUser)
    this._searchUser.getUserByUserName(this.inLoggedUser).subscribe(
      res => {
        this.inLoggedUserRoleId = res[0].roles;
        for (let i = 0; i < this.inLoggedUserRoleId.length; i++) {
          this._searchUser.getRoleById(this.inLoggedUserRoleId[i]).subscribe(
            res1 => {
              if (res1.name === "moderator") {
                this.inLoggedUserRole.push("moderator")
              }
              if (res1.name === "amin") {
                this.inLoggedUserRole.push("amin")
              }
              console.log("this.inLoggedUserRole", this.inLoggedUserRole)
            },
            err1 => {
              console.log(err1, 'error in search roles')
            }
          )
        }       
      },
      err1 => {
        console.log(err1, 'error in search roles')
      }
    )
  }

}
