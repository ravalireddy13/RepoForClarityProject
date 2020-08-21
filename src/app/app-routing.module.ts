import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { aboutMeComponent } from './AboutMe/aboutMe.component';
import { ProjectsComponent } from './Projects/projects.component';
import { MirloComponent } from './Projects/Mirlo/mirlo.component';


const routes: Routes = [

  { path: '', component: aboutMeComponent, },
  {
    path: 'projects', component: ProjectsComponent
  },


  { path: 'projects/mirlo', component: MirloComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
