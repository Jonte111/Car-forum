import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-maintenance',
  templateUrl: './role-maintenance.component.html',
  styleUrls: ['./role-maintenance.component.css']
})
export class RoleMaintenanceComponent implements OnInit {
  users: any;
  username!: string;
  roles!: Array<string>;
  moderator!: boolean;
  moderatorOrg!: boolean;
  moderatorId!: string
  moderatorBlockedOrg!: boolean;
  moderatorBlocked!: boolean;
  inLoggedUser!: string;
  inLoggedUserIsAmin!: boolean;
  inLoggedUserIsModerator!: boolean;
  inLoggedUserRoleId!: [];

  constructor(private _searchUser: AuthService) { }

  ngOnInit(): void {
    //check inloggeduser role
    this.inLoggedUser = localStorage.getItem('username') || "";
    console.log("this.inLoggedUser", this.inLoggedUser)
    this._searchUser.getUserByUserName(this.inLoggedUser).subscribe(
      res => {
        this.inLoggedUserRoleId = res[0].roles;
        for (let i = 0; i < this.inLoggedUserRoleId.length; i++) {
          this._searchUser.getRoleById(this.inLoggedUserRoleId[i]).subscribe(
            res1 => {
              if (res1.name === "moderator") {
                this.inLoggedUserIsModerator = true;
              }
              if (res1.name === "admin") {
                this.inLoggedUserIsAmin = true;
              }
            },
            err1 => {
              console.log(err1, 'error in search roles')
            }
          )
        }
      },
      err => {
        console.log(err, 'error in search roles')
      }
    )
    //get motoratorId 
    this._searchUser.getRoles().subscribe(
      res => {
        console.log('all roles',res)
        for (let i = 0; i < res.length; i++){
          if (res[i].name === "moderator") {
            this.moderatorId = res[i]._id
            console.log('moderatorId', this.moderatorId)
          }
        }
      },
      err => {
        console.log(err, 'error in search  all roles')
      }
    );
  }

  onSearch() {
    console.log("click search")
    const username = this.username;
    console.log("username", username)    
    if (!this.username) {
      Swal.fire('error', "You have to input username to search", 'error')
      return
    }
    this._searchUser.getUserByUserName(username).subscribe(
      res => {
        this.users = res;
        this.roles = res[0].roles;
        this.moderatorBlockedOrg = this.users[0].moderatorBlocked;
        this.moderatorOrg = false;
        console.log("this.roles",this.roles)
        for (let i = 0; i < this.roles.length; i++) {
          this._searchUser.getRoleById(this.roles[i]).subscribe(
            res1 => { 
              if (res1.name === "moderator") {                
                this.moderator = true
                this.moderatorOrg = true
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
    console.log("click on update")
    console.log("this.inLoggedUserIsAmin", this.inLoggedUserIsAmin);
    console.log("this.inLoggedUserIsModerator", this.inLoggedUserIsModerator);    
    if (this.inLoggedUserIsAmin) {
    //update role to moderator or not moderator
      console.log("moderator",this.moderator);
      
      if (this.moderator) {
        const index = this.roles.indexOf(this.moderatorId)
        if (index === -1) {
          this.roles.push(this.moderatorId)
        }
        const body = { "roles": this.roles }
        console.log("body", body)
        this._searchUser.updateUserById(this.users[0]._id, body) 
      } else {
        const index = this.roles.indexOf(this.moderatorId)
        if (index !== -1) {
          this.roles.splice(index,1)
        }
        const body = { "roles": this.roles }
        console.log("body", body)
        this._searchUser.updateUserById(this.users[0]._id, body) 
      }
  
      const body = { "roles": this.roles}
      console.log("body", body)
      this._searchUser.updateUserById(this.users[0]._id, body)  
    } else {
      if (this.moderator !== this.moderatorOrg) {
        Swal.fire('error', "You don't have permision to this role maintenence!", 'error')
        console.log("You have no permision to this role maintenence")
        return        
      }
    }

    if (this.inLoggedUserIsModerator) {
    //update ban to ture or false
      const body = { "moderatorBlocked": this.moderatorBlocked }
      console.log("body",body)
      this._searchUser.updateUserById(this.users[0]._id,body)          
    } else {
      if (this.moderatorBlocked !== this.moderatorBlockedOrg) {
        Swal.fire('error', "You don't have permision to ban!", 'error')
        console.log("You have no permision to ban")
        return 
      }

    }
  }

}
