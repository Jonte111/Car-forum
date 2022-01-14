import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component'
import { ForumComponent } from './pages/forum/forum.component';
import { SportcarsComponent } from './pages/sportcars/sportcars.component';
import { ElectriccarsComponent } from './pages/electriccars/electriccars.component';
import { VeterancarsComponent } from './pages/veterancars/veterancars.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'forum/sportcars', component: SportcarsComponent},
  { path: 'forum/electriccars', component: ElectriccarsComponent},
  { path: 'forum/veterancars', component: VeterancarsComponent},
  { path: 'myprofile', component: MyprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
