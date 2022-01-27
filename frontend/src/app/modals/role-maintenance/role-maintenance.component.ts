import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-maintenance',
  templateUrl: './role-maintenance.component.html',
  styleUrls: ['./role-maintenance.component.css'],
})
export class RoleMaintenanceComponent implements OnInit {
  users: any;
  username!: string;
  roles!: Array<string>;
  moderator!: boolean;
  moderatorId!: string;
  moderatorBlocked!: boolean;
  inLoggedUserIsAmin!: boolean;
  inLoggedUserIsModerator!: boolean;
  moderatorBlockedOrg!: boolean;
  moderatorOrg!: boolean;
  body!: any;

  constructor(private _searchUser: AuthService) {}

  ngOnInit(): void {
    this.inLoggedUserIsModerator =
      localStorage.getItem('inLoggedUserIsModerator') === 'true';
    this.inLoggedUserIsAmin =
      localStorage.getItem('inLoggedUserIsAmin') === 'true';

    //get motoratorId
    this._searchUser.getRoles().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].name === 'moderator') {
          this.moderatorId = res[i]._id;
        }
      }
    });
  }

  onSearch() {
    if (!this.username) {
      Swal.fire('error', 'You have to input username to search', 'error');
      return;
    }
    this._searchUser.getUserByUserName(this.username).subscribe((res) => {
      if (res.length === 0) {
        Swal.fire('error', 'No user found', 'error');
        return;
      }

      this.users = res;
      this.roles = res[0].roles;
      this.moderatorBlocked = this.users[0].moderatorBlocked;
      this.moderatorBlockedOrg = this.users[0].moderatorBlocked;
      this.moderatorOrg = false;
      this.moderator = false;

      for (let i = 0; i < this.roles.length; i++) {
        this._searchUser.getRoleById(this.roles[i]).subscribe((res1) => {
          if (res1.name === 'moderator') {
            this.moderator = true;
            this.moderatorOrg = true;
          }
        });
      }
    });
  }

  onUpdate() {
    if (this.inLoggedUserIsAmin) {
      if (this.moderator) {
        const index = this.roles.indexOf(this.moderatorId);
        if (index === -1) {
          this.roles.push(this.moderatorId);
        }
        this.body = { roles: this.roles };
      } else {
        const index = this.roles.indexOf(this.moderatorId);
        if (index !== -1) {
          this.roles.splice(index, 1);
        }
        this.body = { roles: this.roles };
      }
      if (!this.inLoggedUserIsModerator) {
        this._searchUser.updateUserById(this.users[0]._id, this.body).subscribe(
          (res) => {
            Swal.fire('Success', 'Update successfully', 'success');
          },
          (err) => {
            Swal.fire('error', 'error in update', 'error');
          }
        );
      }
    }

    if (this.inLoggedUserIsModerator && !this.inLoggedUserIsAmin) {
      this.body = { moderatorBlocked: this.moderatorBlocked };

      this._searchUser.updateUserById(this.users[0]._id, this.body).subscribe(
        (res) => {
          Swal.fire('Success', 'Update successfully', 'success');
        },
        (err) => {
          Swal.fire('error', 'error in update', 'error');
        }
      );
    }

    if (this.inLoggedUserIsModerator && this.inLoggedUserIsAmin) {
      this.body = {
        roles: this.roles,
        moderatorBlocked: this.moderatorBlocked,
      };

      this._searchUser.updateUserById(this.users[0]._id, this.body).subscribe(
        (res) => {
          Swal.fire('Success', 'Update successfully', 'success');
        },
        (err) => {
          Swal.fire('error', 'error in update', 'error');
        }
      );
    }

    for (let i = 0; i < this.roles.length; i++) {
      this._searchUser.getRoleById(this.roles[i]).subscribe((res1) => {
        if (res1.name === 'moderator') {
          this.moderator = true;
        }
      });
    }
  }
}
