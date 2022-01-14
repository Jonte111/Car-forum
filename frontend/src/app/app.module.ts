import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SignInComponent } from './modals/sign-in/sign-in.component';
import { RegisterComponent } from './modals/register/register.component';
import { SportcarsComponent } from './pages/sportcars/sportcars.component';
import { ElectriccarsComponent } from './pages/electriccars/electriccars.component';
import { VeterancarsComponent } from './pages/veterancars/veterancars.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

import { AuthService } from './services/auth.service';
import { RoleMaintenanceComponent } from './modals/role-maintenance/role-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ForumComponent,
    SignInComponent,
    RegisterComponent,
    SportcarsComponent,
    ElectriccarsComponent,
    VeterancarsComponent,
    MyprofileComponent,
    RoleMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
