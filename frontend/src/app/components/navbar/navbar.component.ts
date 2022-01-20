import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/modals/sign-in/sign-in.component';
import { RegisterComponent } from 'src/app/modals/register/register.component';
import { AuthService } from 'src/app/services/auth.service';
import { RoleMaintenanceComponent } from 'src/app/modals/role-maintenance/role-maintenance.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public _authService: AuthService) { }

  ngOnInit(): void {
  }
  openSignIn() {
      this.dialog.open(SignInComponent);
  }
  openRegister() {
    this.dialog.open(RegisterComponent);
  }

  openRoleMaintenance() {
    this.dialog.open(RoleMaintenanceComponent);
  }
}
