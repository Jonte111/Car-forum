import { ArrayType } from '@angular/compiler';
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
  moderatorId!: string
  moderatorBlocked!: boolean;
  inLoggedUserIsAmin!: boolean;
  inLoggedUserIsModerator!: boolean;
  moderatorBlockedOrg!: boolean;
  moderatorOrg!: boolean;  
  body!: any;

  constructor(private _searchUser: AuthService) { }

  ngOnInit(): void {
    //check inloggeduser role
   // this.inLoggedUser = localStorage.getItem('username') || "";
    if (localStorage.getItem('inLoggedUserIsAmin') === "true")
    {
      this.inLoggedUserIsModerator = true;
    }

    if (localStorage.getItem('inLoggedUserIsModerator') === "true")
    {
      this.inLoggedUserIsAmin = true;
    }
    //get motoratorId 
    this._searchUser.getRoles().subscribe(
      res => {
        //console.log('all roles',res)
        for (let i = 0; i < res.length; i++){
          if (res[i].name === "moderator") {
            this.moderatorId = res[i]._id
            //console.log('moderatorId', this.moderatorId)
          }
        }
      },
      err => {
        console.log(err, 'error in search  all roles')
      }
    );
  }

  onSearch() {
    const username = this.username;
    //console.log("username", username)    
    if (!this.username) {
      Swal.fire('error', "You have to input username to search", 'error')
      return
    }
    this._searchUser.getUserByUserName(username).subscribe(
      res => {
       // console.log("res", res);
        if (res.length === 0) {
          Swal.fire('error', "No user found", 'error')
          return
        }
        //console.log("res",res);
        
        this.users = res;
        this.roles = res[0].roles;
        this.moderatorBlockedOrg = this.users[0].moderatorBlocked;
        this.moderatorOrg = false;
       // console.log("this.roles",this.roles)
        for (let i = 0; i < this.roles.length; i++) {
          this._searchUser.getRoleById(this.roles[i]).subscribe(
            res1 => { 
              if (res1.name === "moderator") {                
                this.moderator = true
                this.moderatorOrg  = true
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
   // console.log("this.inLoggedUserIsAmin", this.inLoggedUserIsAmin);
   // console.log("this.inLoggedUserIsModerator", this.inLoggedUserIsModerator); 
    if (this.inLoggedUserIsAmin) {
    //update role to moderator or not moderator
     // console.log("moderator",this.moderator);
      
      if (this.moderator) {
        const index = this.roles.indexOf(this.moderatorId)
        if (index === -1) {
          this.roles.push(this.moderatorId)
        }
        this.body={ "roles": this.roles }
        
        
      } else {
        const index = this.roles.indexOf(this.moderatorId)
        if (index !== -1) {
          this.roles.splice(index,1)
        }
        this.body = { "roles": this.roles }

      } 
      //update user
      if (this.moderator !== this.moderatorOrg) {
        this._searchUser.updateUserById(this.users[0]._id, this.body).subscribe(
          res => {
            console.log("res", res.message)
            Swal.fire("Success", "Update successfully", "success")
          },
          err => {
            Swal.fire('error', "error in update", 'error')
            console.log(err, 'error in update')
          }
        ) 
      }      
     
    } 

    if (this.inLoggedUserIsModerator) {
      this.body={ "moderatorBlocked": this.moderatorBlocked } 
      if (this.moderatorBlocked !== this.moderatorBlockedOrg) {
        this._searchUser.updateUserById(this.users[0]._id, this.body).subscribe(
          res => {
            console.log("res", res.message)
            Swal.fire("Success", "Update successfully", "success")
          },
          err => {
            Swal.fire('error', "error in update", 'error')
            console.log(err, 'error in update')
          }
        ) 
      }      
    }
   
    this.onSearch()
  }

}
