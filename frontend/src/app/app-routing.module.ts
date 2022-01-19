import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component'
import { ForumComponent } from './pages/forum/forum.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { ThreadDetailComponent } from './pages/thread-detail/thread-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'forum/:id', component: ForumComponent},
  { path: 'forum/thread/:id', component: ThreadDetailComponent},
  { path: 'myprofile', component: MyprofileComponent},
  { path: 'myprofile', component: MyprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
