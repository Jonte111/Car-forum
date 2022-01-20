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
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

import { AuthService } from './services/auth.service';
import { CreateThreadComponent } from './modals/create-thread/create-thread.component';
import { DeleteAccountComponent } from './modals/delete-account/delete-account.component';
import { ThreadDetailComponent } from './pages/thread-detail/thread-detail.component';
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
    MyprofileComponent,
    CreateThreadComponent,
    DeleteAccountComponent,
    ThreadDetailComponent,
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
