import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateThreadComponent } from './modals/create-thread/create-thread.component';
import { DeleteAccountComponent } from './modals/delete-account/delete-account.component';
import { DeletePostComponent } from './modals/delete-post/delete-post.component';
import { DeleteThreadComponent } from './modals/delete-thread/delete-thread.component';
import { RegisterComponent } from './modals/register/register.component';
import { RoleMaintenanceComponent } from './modals/role-maintenance/role-maintenance.component';
import { SignInComponent } from './modals/sign-in/sign-in.component';
import { ForumComponent } from './pages/forum/forum.component';
import { HomeComponent } from './pages/home/home.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { ThreadDetailComponent } from './pages/thread-detail/thread-detail.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ForumComponent,
    SignInComponent,
    RegisterComponent,
    MyprofileComponent,
    CreateThreadComponent,
    DeleteAccountComponent,
    ThreadDetailComponent,
    RoleMaintenanceComponent,
    DeletePostComponent,
    DeleteThreadComponent,
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
    HttpClientModule,
    MatListModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
